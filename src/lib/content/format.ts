import type {
  ArticleBadge,
  ArticleCard,
  ArticleKind,
  FeedTab,
  ReviewLongform,
  TickerCategory,
  TickerHeadline,
} from "@/lib/content/types";

export function scoreLabel(score: number): string {
  if (score >= 9) return "Excellent";
  if (score >= 8) return "Great";
  if (score >= 7) return "Good";
  if (score >= 6) return "Average";
  return "Mixed";
}

export function scoreHeadline(score: number, verdict?: string): string {
  const suffix = score >= 9 ? "Editor's Choice" : (verdict || scoreLabel(score));
  return `${score.toFixed(1)} / 10 — ${suffix}`;
}

export function scoreToStars(score: number): number {
  return Math.round((score / 2) * 10) / 10;
}

export function formatLongDate(value: Date | string = new Date()): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function estimateReadingTime(content: string | null | undefined): string {
  const words = (content ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(3, Math.round(words / 220) || 4);
  return `${minutes} min read`;
}

export function reviewPlainText(review: ReviewLongform): string {
  return [
    review.hook,
    review.featureIntro,
    ...(review.featureParagraphs ?? []),
    ...review.useWhen,
    ...review.avoidWhen,
    review.hiddenIntro,
    ...(review.hiddenParagraphs ?? []),
    review.workflowTitle,
    ...review.workflowSteps,
    review.workflowWarning,
    review.batteryIntro,
    review.battery.claimed,
    review.battery.realWorld,
    review.battery.screenOn,
    ...review.battery.drainers.map((item) => `${item.label} ${item.penalty}`),
    ...review.battery.tips,
    ...review.gotchas.flatMap((item) => [item.title, item.problem, item.workaround]),
    ...review.buyerChecklist,
    ...review.faqs.flatMap((item) => [item.question, item.answer]),
    review.closing,
    ...(review.pros ?? []),
    ...(review.cons ?? []),
  ]
    .filter(Boolean)
    .join(" ");
}

export function reviewReadingTime(review: ReviewLongform): string {
  return estimateReadingTime(reviewPlainText(review));
}

export function kindFromArticleType(
  articleType: string,
  title: string,
): ArticleKind {
  const haystack = title.toLowerCase();
  if (/(deal|discount|price drop|lowest price)/.test(haystack)) {
    return "deal";
  }

  switch (articleType) {
    case "review":
      return "review";
    case "buying_guide":
      return "guide";
    case "comparison":
      return "comparison";
    default:
      return "news";
  }
}

export function badgeFromKind(
  kind: ArticleKind,
  index: number,
): ArticleBadge {
  if (kind === "review") return "REVIEW";
  if (kind === "guide") return "GUIDE";
  if (kind === "deal") return "DEAL";
  if (kind === "comparison") return "HANDS ON";
  return index === 0 ? "BREAKING" : "NEWS";
}

export function ctaLabel(kind: ArticleKind): string {
  if (kind === "review") return "Read Review";
  if (kind === "guide") return "Read Guide";
  if (kind === "deal") return "View Deal";
  if (kind === "comparison") return "Compare";
  return "Read Story";
}

export function matchesFeedTab(kind: ArticleKind, tab: FeedTab): boolean {
  if (tab === "all") return true;
  if (tab === "reviews") return kind === "review";
  if (tab === "hands-on") return kind === "comparison";
  if (tab === "guides") return kind === "guide";
  if (tab === "deals") return kind === "deal";
  if (tab === "breaking") return kind === "news";
  if (tab === "news") return kind === "news";
  return false;
}

export function tickerCategoryFromArticle(article: ArticleCard): TickerCategory {
  if (article.badge === "BREAKING") return "breaking";
  if (article.badge === "HANDS ON" || article.kind === "comparison") {
    return "hands-on";
  }
  if (article.kind === "review") return "reviews";
  if (article.kind === "guide") return "guides";
  if (article.kind === "deal") return "deals";
  return "news";
}

export function matchesTickerCategory(
  article: ArticleCard,
  tab: FeedTab,
): boolean {
  if (tab === "all") return true;
  return tickerCategoryFromArticle(article) === tab;
}

export function headlineFromArticle(article: ArticleCard): TickerHeadline {
  return {
    id: article.id,
    title: article.title,
    href: articleHref(article.slug, article.kind),
    category: tickerCategoryFromArticle(article),
  };
}

export function isTickerCategory(value: string | undefined): value is TickerCategory {
  return (
    value === "reviews" ||
    value === "hands-on" ||
    value === "guides" ||
    value === "breaking" ||
    value === "deals" ||
    value === "news"
  );
}

export function articleHref(slug: string, kind?: ArticleKind): string {
  if (kind === "review" || kind === "comparison") {
    return `/reviews/${slug}`;
  }
  if (!kind && /review|hands-on|hands_on/i.test(slug)) {
    return `/reviews/${slug}`;
  }
  return `/articles/${slug}`;
}

export function reviewHref(slug: string): string {
  return `/reviews/${slug}`;
}

export function reviewMetaTitle(productName: string): string {
  return `${productName} Real-World Review: Quirks & Hidden Features`;
}

export function productHref(slug: string): string {
  return `/products/${slug}`;
}

export function categoryHref(slug: string): string {
  return `/category/${slug}`;
}
