import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import { readSupabasePublicEnv } from "@/lib/supabase/env";
import {
  mockArticles,
  mockProducts,
  mockTrending,
} from "@/lib/content/mock";
import { GUIDE_RANK_LABELS, mockTopFive } from "@/lib/content/mock-guides";
import {
  badgeFromKind,
  estimateReadingTime,
  headlineFromArticle,
  kindFromArticleType,
  scoreLabel,
  scoreToStars,
} from "@/lib/content/format";
import { ensureTickerHeadlines } from "@/lib/content/mock-ticker";
import type {
  ArticleCard,
  AuthUser,
  GuidePick,
  GuideSpecs,
  GuideTabId,
  HomepageContent,
  ProductCard,
  TickerHeadline,
  TopFiveGuides,
} from "@/lib/content/types";

export const GUIDE_TAB_IDS: GuideTabId[] = [
  "smart",
  "laptops",
  "wearables",
  "audio",
  "gaming",
];

export const GUIDE_CATEGORY_ALIASES: Record<GuideTabId, string[]> = {
  smart: ["smartphones", "smartphone", "mobile", "phones"],
  laptops: ["laptops", "laptop"],
  wearables: ["wearables", "wearable"],
  audio: ["audio"],
  gaming: ["gaming", "games"],
};

type Nested<T> = T | T[] | null;

function first<T>(value: Nested<T>): T | null {
  if (!value) return null;
  return Array.isArray(value) ? (value[0] ?? null) : value;
}

function ensureMin<T extends { id: string }>(
  real: T[],
  fallback: T[],
  min: number,
): T[] {
  if (real.length === 0) return fallback;
  if (real.length >= min) return real;

  const seen = new Set(real.map((item) => item.id));
  return [...real, ...fallback.filter((item) => !seen.has(item.id))];
}

async function getServerSupabase() {
  if (!readSupabasePublicEnv()) return null;

  try {
    return await createClient();
  } catch {
    return null;
  }
}

function mapArticle(row: {
  id: string;
  title: string;
  slug: string;
  article_type: string;
  excerpt: string | null;
  content?: string | null;
  featured_image: string | null;
  published_at: string | null;
  category?: Nested<{ name: string; slug: string }>;
  author?: Nested<{ full_name: string | null; avatar_url: string | null }>;
  product?: Nested<{ overall_rating: number | null; verdict: string | null }>;
}, index: number): ArticleCard {
  const category = first(row.category);
  const author = first(row.author);
  const product = first(row.product);
  const kind = kindFromArticleType(row.article_type, row.title);
  const score = product?.overall_rating ?? undefined;

  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt:
      row.excerpt ??
      "The latest from the TechToReview lab — full story inside.",
    featuredImage:
      row.featured_image ??
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    badge: badgeFromKind(kind, index),
    kind,
    category: category?.name ?? "News",
    categorySlug: category?.slug ?? "news",
    author: {
      name: author?.full_name ?? "TechToReview Staff",
      avatarUrl:
        author?.avatar_url ??
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=80",
    },
    publishedAt: row.published_at ?? new Date().toISOString(),
    readingTime: estimateReadingTime(row.content ?? row.excerpt),
    score: score == null ? undefined : Number(score),
  };
}

function mapProduct(row: {
  id: string;
  name: string;
  slug: string;
  image_url: string | null;
  overall_rating: number | null;
  verdict: string | null;
  pros: string[] | null;
  cons?: string[] | null;
  specs?: unknown;
  verdict_long?: string | null;
  category?: Nested<{ name: string; slug: string }>;
}): ProductCard {
  const category = first(row.category);
  const score = Number(row.overall_rating ?? 8);
  const verdict = row.verdict?.trim() || scoreLabel(score);
  const specRecord = asRecord(row.specs);

  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    imageUrl:
      row.image_url ??
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1600&q=80",
    category: category?.name ?? "Tech",
    categorySlug: category?.slug ?? "news",
    rating: scoreToStars(score),
    score,
    verdict,
    verdictLong: row.verdict_long?.trim() || undefined,
    pros: (row.pros ?? []).filter(Boolean).slice(0, 5),
    cons: (row.cons ?? []).filter(Boolean).slice(0, 5),
    specs: Object.fromEntries(
      Object.entries(specRecord)
        .filter(([, value]) => typeof value === "string" || typeof value === "number")
        .map(([key, value]) => [key, String(value)]),
    ),
  };
}

export const getPublishedArticles = cache(async (): Promise<ArticleCard[]> => {
  const supabase = await getServerSupabase();
  if (!supabase) return mockArticles;

  try {
    const { data, error } = await supabase
      .from("articles")
      .select(
        `
        id,
        title,
        slug,
        article_type,
        excerpt,
        content,
        featured_image,
        published_at,
        category:categories(name, slug),
        author:profiles(full_name, avatar_url),
        product:products(overall_rating, verdict)
      `,
      )
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(24);

    if (error || !data?.length) return mockArticles;
    return data.map((row, index) => mapArticle(row, index));
  } catch {
    return mockArticles;
  }
});

export const getPublishedProducts = cache(async (): Promise<ProductCard[]> => {
  const supabase = await getServerSupabase();
  if (!supabase) return mockProducts;

  try {
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        id,
        name,
        slug,
        image_url,
        overall_rating,
        verdict,
        pros,
        cons,
        specs,
        category:categories(name, slug)
      `,
      )
      .eq("status", "published")
      .order("overall_rating", { ascending: false })
      .limit(16);

    if (error || !data?.length) return mockProducts;
    return data.map(mapProduct);
  } catch {
    return mockProducts;
  }
});

export const getOptionalUser = cache(async (): Promise<AuthUser | null> => {
  const supabase = await getServerSupabase();
  if (!supabase) return null;

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return null;

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, avatar_url")
      .eq("id", user.id)
      .maybeSingle();

    return {
      id: user.id,
      email: user.email ?? null,
      fullName: profile?.full_name ?? user.user_metadata?.full_name ?? null,
      avatarUrl: profile?.avatar_url ?? user.user_metadata?.avatar_url ?? null,
    };
  } catch {
    return null;
  }
});

export const getTickerHeadlines = cache(async (): Promise<TickerHeadline[]> => {
  try {
    const articles = await getPublishedArticles();
    return ensureTickerHeadlines(articles.map(headlineFromArticle), 10);
  } catch {
    return ensureTickerHeadlines([], 10);
  }
});

export const getHomepageContent = cache(async (): Promise<HomepageContent> => {
  const [articles, products] = await Promise.all([
    getPublishedArticles(),
    getPublishedProducts(),
  ]);

  const phones = products.filter((product) => product.categorySlug === "mobile");
  const trending = articles.slice(0, 5).map((article) => ({
    label: article.title.split(":")[0]?.trim() || article.title,
    href: article.kind === "review" || article.kind === "comparison"
      ? `/reviews/${article.slug}`
      : `/articles/${article.slug}`,
  }));

  return {
    hero: ensureMin(articles, mockArticles, 4).slice(0, 4),
    reviews: ensureMin(products, mockProducts, 6).slice(0, 8),
    feed: ensureMin(articles, mockArticles, 8).slice(0, 14),
    topPhones: ensureMin(phones, mockProducts.filter((p) => p.categorySlug === "mobile"), 5).slice(0, 5),
    trending: trending.length ? trending : mockTrending,
  };
});

export async function getArticleBySlug(slug: string) {
  const articles = await getPublishedArticles();
  return articles.find((article) => article.slug === slug) ?? null;
}

export async function getProductBySlug(slug: string) {
  const products = await getPublishedProducts();
  const published = products.find((product) => product.slug === slug);
  if (published) return published;

  const fromGuides = Object.values(mockTopFive)
    .flat()
    .find((product) => product.slug === slug);
  if (!fromGuides) return null;

  return {
    id: fromGuides.id,
    name: fromGuides.name,
    slug: fromGuides.slug,
    imageUrl: fromGuides.imageUrl,
    category: fromGuides.category,
    categorySlug: fromGuides.categorySlug,
    rating: fromGuides.rating,
    score: fromGuides.score,
    verdict: fromGuides.verdict,
    pros: fromGuides.pros,
    cons: [],
    specs: {
      Processor: fromGuides.specs.processor,
      Display: fromGuides.specs.display,
      Battery: fromGuides.specs.battery,
    },
  };
}

export async function getArticlesByCategory(slug: string) {
  const articles = await getPublishedArticles();
  return articles.filter((article) => article.categorySlug === slug);
}

function asRecord(value: unknown): Record<string, unknown> {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return {};
}

function specString(specs: Record<string, unknown>, keys: string[], fallback: string) {
  for (const key of keys) {
    const value = specs[key];
    if (typeof value === "string" && value.trim()) return value.trim();
    if (typeof value === "number") return String(value);
  }
  return fallback;
}

function specsFromJson(raw: unknown, name: string): GuideSpecs {
  const specs = asRecord(raw);
  return {
    processor: specString(
      specs,
      ["processor", "chipset", "chip", "cpu", "soc"],
      `${name} processor`,
    ),
    display: specString(
      specs,
      ["display", "screen", "panel"],
      "Lab-tested display",
    ),
    battery: specString(
      specs,
      ["battery", "battery_life", "endurance"],
      "All-day battery",
    ),
  };
}

function applyGuideRank(pick: GuidePick, tab: GuideTabId, index: number): GuidePick {
  return {
    ...pick,
    rank: index + 1,
    rankLabel: pick.rankLabel || GUIDE_RANK_LABELS[tab][index] || `#${index + 1}`,
  };
}

function mapGuidePick(row: {
  id: string;
  name: string;
  slug: string;
  image_url: string | null;
  overall_rating: number | null;
  verdict: string | null;
  pros: string[] | null;
  specs?: unknown;
  category?: Nested<{ name: string; slug: string }>;
}): GuidePick {
  const category = first(row.category);
  const score = Number(row.overall_rating ?? 8);
  const verdict = row.verdict?.trim() || scoreLabel(score);

  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    imageUrl:
      row.image_url ??
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1600&q=80",
    category: category?.name ?? "Tech",
    categorySlug: category?.slug ?? "news",
    subCategory: category?.name ?? "Guide pick",
    rank: 0,
    rankLabel: "",
    rating: scoreToStars(score),
    score,
    verdict,
    pros: (row.pros ?? []).filter(Boolean).slice(0, 3),
    specs: specsFromJson(row.specs, row.name),
  };
}

async function fetchPublishedGuideProducts(): Promise<GuidePick[]> {
  const supabase = await getServerSupabase();
  if (!supabase) return [];

  try {
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        id,
        name,
        slug,
        image_url,
        overall_rating,
        verdict,
        pros,
        specs,
        category:categories(name, slug)
      `,
      )
      .eq("status", "published")
      .order("overall_rating", { ascending: false })
      .limit(80);

    if (error || !data?.length) return [];
    return data.map(mapGuidePick);
  } catch {
    return [];
  }
}

export async function getTopFiveByCategory(tab: GuideTabId): Promise<GuidePick[]> {
  const guides = await getTopFiveGuides();
  return guides[tab];
}

export const getTopFiveGuides = cache(async (): Promise<TopFiveGuides> => {
  const published = await fetchPublishedGuideProducts();

  return GUIDE_TAB_IDS.reduce((acc, tab) => {
    const aliases = new Set(GUIDE_CATEGORY_ALIASES[tab]);
    const matched = published.filter((product) =>
      aliases.has(product.categorySlug.toLowerCase()),
    );
    acc[tab] = ensureMin(matched, mockTopFive[tab], 5)
      .slice(0, 5)
      .map((item, index) => applyGuideRank(item, tab, index));
    return acc;
  }, {} as TopFiveGuides);
});
