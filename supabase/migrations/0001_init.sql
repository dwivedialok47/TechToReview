-- TechToReview core schema
-- Run in the Supabase SQL editor (or via supabase db push) on a fresh project.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------------

do $$
begin
  if not exists (select 1 from pg_type where typname = 'user_role') then
    create type public.user_role as enum ('admin', 'editor', 'author', 'user');
  end if;
  if not exists (select 1 from pg_type where typname = 'article_type') then
    create type public.article_type as enum ('review', 'news', 'buying_guide', 'comparison');
  end if;
  if not exists (select 1 from pg_type where typname = 'publish_status') then
    create type public.publish_status as enum ('draft', 'published');
  end if;
  if not exists (select 1 from pg_type where typname = 'comment_status') then
    create type public.comment_status as enum ('pending', 'approved');
  end if;
end
$$;

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  avatar_url text,
  role public.user_role not null default 'user',
  created_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  parent_id uuid references public.categories (id) on delete set null
);

create table if not exists public.brands (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  logo_url text
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  brand_id uuid not null references public.brands (id) on delete restrict,
  category_id uuid not null references public.categories (id) on delete restrict,
  image_url text,
  release_date date,
  specs jsonb not null default '{}'::jsonb,
  pros text[] not null default '{}',
  cons text[] not null default '{}',
  overall_rating numeric(3, 1),
  verdict text,
  -- status is required so public read can match "published" the same way as articles
  status public.publish_status not null default 'draft',
  constraint products_overall_rating_range
    check (overall_rating is null or (overall_rating >= 0 and overall_rating <= 10))
);

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  article_type public.article_type not null,
  excerpt text,
  content text not null default '',
  featured_image text,
  author_id uuid not null references public.profiles (id) on delete restrict,
  product_id uuid references public.products (id) on delete set null,
  category_id uuid not null references public.categories (id) on delete restrict,
  views_count integer not null default 0,
  published_at timestamptz,
  status public.publish_status not null default 'draft',
  constraint articles_views_count_nonnegative check (views_count >= 0)
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references public.articles (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now(),
  status public.comment_status not null default 'pending',
  constraint comments_content_not_empty check (char_length(trim(content)) > 0)
);

create index if not exists categories_parent_id_idx on public.categories (parent_id);
create index if not exists products_brand_id_idx on public.products (brand_id);
create index if not exists products_category_id_idx on public.products (category_id);
create index if not exists products_status_idx on public.products (status);
create index if not exists articles_author_id_idx on public.articles (author_id);
create index if not exists articles_product_id_idx on public.articles (product_id);
create index if not exists articles_category_id_idx on public.articles (category_id);
create index if not exists articles_status_published_at_idx on public.articles (status, published_at desc);
create index if not exists comments_article_id_idx on public.comments (article_id);
create index if not exists comments_user_id_idx on public.comments (user_id);

-- ---------------------------------------------------------------------------
-- Auth: create a profile row for every new user
-- ---------------------------------------------------------------------------

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url',
    'user'
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Role helpers (security definer so RLS on profiles does not recurse)
-- ---------------------------------------------------------------------------

create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role in ('admin'::public.user_role, 'editor'::public.user_role)
  );
$$;

create or replace function public.protect_profile_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op = 'INSERT' then
    if auth.uid() is not null and not public.is_staff() then
      new.role := 'user';
    end if;
    return new;
  end if;

  if new.role is distinct from old.role and not public.is_staff() then
    raise exception 'Only admin or editor can change roles';
  end if;

  return new;
end;
$$;

drop trigger if exists protect_profile_role on public.profiles;
create trigger protect_profile_role
  before insert or update on public.profiles
  for each row execute procedure public.protect_profile_role();

-- New comments from non-staff always start as pending.
create or replace function public.force_pending_comment()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_staff() then
    new.status := 'pending';
    new.user_id := auth.uid();
  end if;
  return new;
end;
$$;

drop trigger if exists force_pending_comment on public.comments;
create trigger force_pending_comment
  before insert on public.comments
  for each row execute procedure public.force_pending_comment();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.brands enable row level security;
alter table public.products enable row level security;
alter table public.articles enable row level security;
alter table public.comments enable row level security;

-- profiles: anyone can read (bylines); users write their own row
drop policy if exists "Profiles are readable" on public.profiles;
create policy "Profiles are readable"
  on public.profiles for select
  using (true);

drop policy if exists "Users can insert their own profile" on public.profiles;
create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

drop policy if exists "Staff can manage profiles" on public.profiles;
create policy "Staff can manage profiles"
  on public.profiles for all
  using (public.is_staff())
  with check (public.is_staff());

-- categories & brands: public read, staff write
drop policy if exists "Categories are readable" on public.categories;
create policy "Categories are readable"
  on public.categories for select
  using (true);

drop policy if exists "Staff can manage categories" on public.categories;
create policy "Staff can manage categories"
  on public.categories for all
  using (public.is_staff())
  with check (public.is_staff());

drop policy if exists "Brands are readable" on public.brands;
create policy "Brands are readable"
  on public.brands for select
  using (true);

drop policy if exists "Staff can manage brands" on public.brands;
create policy "Staff can manage brands"
  on public.brands for all
  using (public.is_staff())
  with check (public.is_staff());

-- products: public if published; staff full access (includes drafts)
drop policy if exists "Published products are readable" on public.products;
create policy "Published products are readable"
  on public.products for select
  using (status = 'published' or public.is_staff());

drop policy if exists "Staff can manage products" on public.products;
create policy "Staff can manage products"
  on public.products for insert
  with check (public.is_staff());

drop policy if exists "Staff can update products" on public.products;
create policy "Staff can update products"
  on public.products for update
  using (public.is_staff())
  with check (public.is_staff());

drop policy if exists "Staff can delete products" on public.products;
create policy "Staff can delete products"
  on public.products for delete
  using (public.is_staff());

-- articles: same published-or-staff rule
drop policy if exists "Published articles are readable" on public.articles;
create policy "Published articles are readable"
  on public.articles for select
  using (status = 'published' or public.is_staff());

drop policy if exists "Staff can insert articles" on public.articles;
create policy "Staff can insert articles"
  on public.articles for insert
  with check (public.is_staff());

drop policy if exists "Staff can update articles" on public.articles;
create policy "Staff can update articles"
  on public.articles for update
  using (public.is_staff())
  with check (public.is_staff());

drop policy if exists "Staff can delete articles" on public.articles;
create policy "Staff can delete articles"
  on public.articles for delete
  using (public.is_staff());

-- comments: approved are public; owners can read/write their own; staff moderate
drop policy if exists "Approved or own comments are readable" on public.comments;
create policy "Approved or own comments are readable"
  on public.comments for select
  using (
    status = 'approved'
    or auth.uid() = user_id
    or public.is_staff()
  );

drop policy if exists "Users can create their own comments" on public.comments;
create policy "Users can create their own comments"
  on public.comments for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own comments" on public.comments;
create policy "Users can update their own comments"
  on public.comments for update
  using (auth.uid() = user_id or public.is_staff())
  with check (auth.uid() = user_id or public.is_staff());

drop policy if exists "Users can delete their own comments" on public.comments;
create policy "Users can delete their own comments"
  on public.comments for delete
  using (auth.uid() = user_id or public.is_staff());

grant usage on schema public to anon, authenticated;
grant select on table public.profiles, public.categories, public.brands, public.products, public.articles, public.comments
  to anon, authenticated;
grant insert, update, delete on table public.profiles, public.comments to authenticated;
grant insert, update, delete on table public.categories, public.brands, public.products, public.articles to authenticated;

-- After the first user signs up, promote them in the SQL editor:
-- update public.profiles set role = 'admin' where id = '<auth user uuid>';
