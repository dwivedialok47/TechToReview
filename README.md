# TechToReview

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Supabase foundation for [techtoreview.com](https://www.techtoreview.com).

## Folder structure

```
techtoreview/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── lib/
│   │   └── supabase/
│   │       ├── client.ts      # Browser / Client Component client
│   │       ├── server.ts      # Server Components, actions, route handlers
│   │       ├── middleware.ts  # Session refresh helper
│   │       └── env.ts
│   ├── middleware.ts          # Next.js matcher → updateSession()
│   └── types/
│       └── database.ts        # Typed Database schema
├── supabase/
│   └── migrations/
│       └── 0001_init.sql      # Tables, triggers, RLS
├── .env.example
└── package.json
```

## Setup

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local` and paste the project URL plus the anon / publishable key.
3. In the Supabase SQL editor, run `supabase/migrations/0001_init.sql`.
4. Sign up once, then promote that user:

```sql
update public.profiles
set role = 'admin'
where id = '<auth user uuid>';
```

5. Install Node 20+ if needed, then:

```bash
npm install
npm run dev
```

## Clients

| File | Use from |
| --- | --- |
| `src/lib/supabase/client.ts` | Client Components (`"use client"`) |
| `src/lib/supabase/server.ts` | Server Components, Server Actions, Route Handlers |
| `src/lib/supabase/middleware.ts` | `src/middleware.ts` only |

Do not use `getSession()` to authorize. Middleware calls `getClaims()` to refresh and validate the JWT. Server Components cannot write cookies; failed `setAll` calls are ignored because middleware already refreshed the session.

## Schema notes

- `products.status` (`draft` \| `published`) exists so public product pages can follow the same published-only RLS rule as articles.
- Article `content` is Markdown / rich-text stored as `text`.
- Product `specs` is `jsonb` (RAM, processor, battery, and so on).
- Only `admin` and `editor` can create, update, or delete categories, brands, products, and articles.
- Users can read and write their own profiles and comments. New comments are forced to `pending` unless staff inserts them. Approved comments are publicly readable.
- Users cannot change `profiles.role`; that is restricted to staff via a trigger.
