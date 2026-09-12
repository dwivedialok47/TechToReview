import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import { readSupabasePublicEnv } from "@/lib/supabase/env";
import { resolveReviewGallery } from "@/lib/content/gallery";
import { mockArticles } from "@/lib/content/mock";
import { DEFAULT_REVIEW_TOC, mockLongformReviews } from "@/lib/content/mock-reviews";
import { estimateReadingTime, reviewMetaTitle, reviewReadingTime } from "@/lib/content/format";
import type { ArticleCard, ReviewFaq, ReviewLongform } from "@/lib/content/types";

type Nested<T> = T | T[] | null;

function first<T>(value: Nested<T>): T | null {
  if (!value) return null;
  return Array.isArray(value) ? (value[0] ?? null) : value;
}

async function getServerSupabase() {
  if (!readSupabasePublicEnv()) return null;
  try {
    return await createClient();
  } catch {
    return null;
  }
}

function categoryLabel(name: string, slug: string) {
  if (slug === "mobile" || /phone/i.test(name)) return "Mobiles";
  return name;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return null;
}

function parseStructuredContent(raw: string | null | undefined): Partial<ReviewLongform> | null {
  if (!raw?.trim()) return null;
  try {
    const parsed = asRecord(JSON.parse(raw));
    if (!parsed?.hook && !parsed?.faqs && !parsed?.gallery) return null;
    return parsed as Partial<ReviewLongform>;
  } catch {
    return null;
  }
}

function genericFromArticle(article: ArticleCard): ReviewLongform {
  const productName = article.title.split(":")[0]?.replace(/ review$/i, "").trim() || article.title;
  return {
    slug: article.slug,
    productName,
    title: reviewMetaTitle(productName),
    subtitle: article.excerpt,
    excerpt: article.excerpt,
    category: article.category,
    categorySlug: article.categorySlug,
    categoryLabel: categoryLabel(article.category, article.categorySlug),
    breadcrumbProduct: `${productName} Review`,
    author: article.author,
    publishedAt: article.publishedAt,
    readingTime: article.readingTime,
    editorialNote: "Daily Driver Addendum: Months of Real-World Use",
    featuredImage: article.featuredImage,
    imageCaption: `${productName} on the TechToReview desk.`,
    imageCredit: "TechToReview lab",
    hook: `${article.excerpt} The first week on the TechToReview desk is rarely the week the spec sheet promised. We start with the friction a store demo hides — a default toggle, a grip, a cable, a thermal wall — and only then decide whether the headline feature survives a Tuesday. If this slug later ships structured JSON in Supabase, those lab notes replace this generated scaffold. Until then, treat every section below as the editorial checklist we actually run, seeded from the published excerpt so the page never collapses into a spec sheet.`,
    featureHeading: "Headline hardware in daily use",
    featureIntro: `${article.excerpt} We break the pitch into the two or three jobs a real owner will hire this product for, then we write down the ambient limits: heat, light, network, and the accessory that quietly ruins the demo. A 20-minute store visit will not show those limits. A week of mixed use usually will.`,
    featureParagraphs: [
      "Operational limits are the review. We note the temperature, the radio, and the charge percentage when a feature starts to lie — preview versus saved file, claimed hours versus the hour you actually needed, a sensor that wants a snug fit. If a number appears in marketing, we try to break it in the same conditions a reader will use.",
      "Practical workflows beat feature lists. We keep the default if it is honest, and we document the first Saturday of settings if it is not. That is the difference between a launch recap and a daily-driver addendum.",
    ],
    useWhen: [
      "The headline feature matches the job you actually have today — not the job in the keynote.",
      "You can give the device a full charge, a clean software build, and 48 hours after a major update before you judge battery or heat.",
      "You are willing to turn off demo defaults (always-on, adaptive helpers, retail brightness).",
    ],
    avoidWhen: [
      "You are evaluating from a spec sheet or a 20-minute store demo.",
      "A case, cable, or dock is blocking the control or the wattage the review is built around.",
      "You need console-simple resume or jewelry-small carry and this product is a tool-slab.",
    ],
    hiddenHeading: "The setting spec sheets skip",
    hiddenIntro:
      "Every flagship hides a toggle that changes the product. We look for the pairing — two buttons, a mode, a limiter — that launch copy lists as separate toys. Used together, they are usually the reason a reviewer sounds happier than a week-one owner.",
    hiddenParagraphs: [
      "The common setup error is leaving every assistant, adaptive mode, and auto-enhance on because the wizard sounded optional. Those features run after you think you are done and they spend battery, heat, and sometimes the original file.",
    ],
    workflowTitle: "Set the device up the way we test it",
    workflowSteps: [
      "Update to the current public OS build and restart once. Pause extra AI or launcher downloads if you are about to travel.",
      "Turn off demo / retail modes and sign in with your own account so cloud and photos behave like a real week.",
      "Map the physical extra button or key to the job you miss, not the siren or mute the box advertises.",
      "Run one full charge cycle and a day of mixed radios before you trust the battery gauge.",
    ],
    workflowWarning:
      "First-week software indexing and cloud photo uploads will lie about battery life. Wait 48 hours. If a “style” or “immersive” toggle persists, check it before a job you cannot reshoot.",
    batteryIntro:
      "Manufacturer playback hours are a climate-chamber story. We compare them to a mixed weekday: real radios, real brightness, and the feature you actually bought. The useful number is screen-on or hours-to-empty on that weekday, plus the three toggles that steal the surplus.",
    battery: {
      claimed: "Manufacturer lab playback figure",
      realWorld: "Mixed daily use, measured on our desk",
      screenOn: article.readingTime,
      drainers: [
        { label: "Always-on displays and raise-to-wake", penalty: "Overnight idle drain" },
        { label: "High refresh + 5G", penalty: "Noticeable by late afternoon" },
      ],
      tips: [
        "Cap the charge if you leave it on a wireless stand overnight.",
        "Limit frame rate when traveling.",
        "Use a proper PD charger, not a laptop port.",
      ],
    },
    gotchas: [
      {
        title: "Launch defaults are not reviewer defaults",
        problem: "Out of the box, the device is tuned for demos, not months of use.",
        workaround: "Walk the first-week settings before you blame the hardware.",
      },
    ],
    buyerChecklist: [
      "Inspect ports, buttons, and cameras under a bright light.",
      "Check battery health and a five-minute PD charge.",
      "Confirm biometric unlock and that all radios associate.",
    ],
    faqs: [
      {
        question: "Is this the long-form review or a stub?",
        answer:
          "You are on the review template. Structured sections fill from Supabase JSON when present, otherwise from the TechToReview mock for this slug.",
      },
    ],
    closing: `${article.excerpt} That line is the published stub. The long-form verdict we stand behind is whether the headline feature still works after you tame defaults, heat, and the accessory the box pretends is optional. If you only need a spec sheet, you are on the wrong page — and we will keep replacing this scaffold whenever a full desk test lands for this slug.`,
    pros: [
      "Headline feature is worth testing in the conditions you actually live in",
      "Physical extras (buttons, pens, cups) can become real tools after setup",
      "Battery is usually all-day if you murder the demo defaults",
    ],
    cons: [
      "Out-of-box defaults are tuned for a keynote, not a Tuesday",
      "Heat, cables, and cases create failures that look like software bugs",
      "A short excerpt is not a substitute for the structured JSON we prefer in Supabase",
    ],
    specs: {
      Category: article.category,
      Status: "Generated scaffold until structured JSON is published",
      Source: "Published excerpt + TechToReview daily-driver checklist",
    },
    gallery: [],
    toc: DEFAULT_REVIEW_TOC,
    score: article.score,
  };
}

function overlayMeta(
  base: ReviewLongform,
  article: Partial<ArticleCard> | null,
): ReviewLongform {
  if (!article) return base;
  return {
    ...base,
    featuredImage: article.featuredImage || base.featuredImage,
    author: article.author || base.author,
    publishedAt: article.publishedAt || base.publishedAt,
    category: article.category || base.category,
    categorySlug: article.categorySlug || base.categorySlug,
    categoryLabel: article.category
      ? categoryLabel(article.category, article.categorySlug ?? base.categorySlug)
      : base.categoryLabel,
    score: article.score ?? base.score,
  };
}

async function fetchSupabaseArticle(slug: string): Promise<{
  card: ArticleCard;
  content: string | null;
} | null> {
  const supabase = await getServerSupabase();
  if (!supabase) return null;

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
        product:products(overall_rating, name)
      `,
      )
      .eq("status", "published")
      .eq("slug", slug)
      .maybeSingle();

    if (error || !data) return null;

    const category = first(data.category);
    const author = first(data.author);
    const product = first(data.product);

    return {
      content: data.content ?? null,
      card: {
        id: data.id,
        title: data.title,
        slug: data.slug,
        excerpt:
          data.excerpt ??
          "Long-term notes from the TechToReview desk.",
        featuredImage:
          data.featured_image ??
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1600&q=80",
        badge: "REVIEW",
        kind: "review",
        category: category?.name ?? "Mobile",
        categorySlug: category?.slug ?? "mobile",
        author: {
          name: author?.full_name ?? "TechToReview Staff",
          avatarUrl:
            author?.avatar_url ??
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=80",
        },
        publishedAt: data.published_at ?? new Date().toISOString(),
        readingTime: estimateReadingTime(data.content ?? data.excerpt),
        score:
          product?.overall_rating == null
            ? undefined
            : Number(product.overall_rating),
      },
    };
  } catch {
    return null;
  }
}

export const getLongformReview = cache(
  async (slug: string): Promise<ReviewLongform | null> => {
    const candidates = [slug];
    if (!slug.endsWith("-review")) candidates.push(`${slug}-review`);

    let supabaseHit: { card: ArticleCard; content: string | null } | null = null;
    for (const key of candidates) {
      supabaseHit = await fetchSupabaseArticle(key);
      if (supabaseHit) break;
    }

    const structured = parseStructuredContent(supabaseHit?.content);
    const mock =
      mockLongformReviews[slug] ??
      candidates.map((key) => mockLongformReviews[key]).find(Boolean) ??
      null;

    if (structured && supabaseHit) {
      return attachGallery(
        overlayMeta(
          {
            ...(mock ?? genericFromArticle(supabaseHit.card)),
            ...structured,
            slug: supabaseHit.card.slug,
            toc: structured.toc?.length ? structured.toc : DEFAULT_REVIEW_TOC,
            faqs: (structured.faqs as ReviewFaq[] | undefined) ?? mock?.faqs ?? [],
            gallery: structured.gallery ?? mock?.gallery ?? [],
          },
          supabaseHit.card,
        ),
        structured.gallery,
      );
    }

    if (mock) {
      return attachGallery(
        overlayMeta(
          { ...mock, readingTime: reviewReadingTime(mock) },
          supabaseHit?.card ?? mockArticles.find((a) => a.slug === mock.slug) ?? null,
        ),
        mock.gallery,
      );
    }

    if (supabaseHit) {
      return attachGallery(genericFromArticle(supabaseHit.card));
    }

    const card = mockArticles.find((article) => candidates.includes(article.slug));
    return card ? attachGallery(genericFromArticle(card)) : null;
  },
);

async function attachGallery(
  review: ReviewLongform,
  cmsGallery?: unknown,
): Promise<ReviewLongform> {
  const gallery = await resolveReviewGallery({
    slug: review.slug,
    productName: review.productName,
    featuredImage: review.featuredImage,
    cmsGallery: cmsGallery ?? review.gallery,
  });

  return { ...review, gallery };
}

export function getKnownReviewSlugs() {
  return Object.keys(mockLongformReviews);
}
