export type ArticleBadge =
  | "REVIEW"
  | "HANDS ON"
  | "BREAKING"
  | "GUIDE"
  | "NEWS"
  | "DEAL";

export type TickerCategory =
  | "reviews"
  | "hands-on"
  | "guides"
  | "breaking"
  | "deals"
  | "news";

export type FeedTab = "all" | TickerCategory;

export type TickerHeadline = {
  id: string;
  title: string;
  href: string;
  category: TickerCategory;
};

export type ArticleKind = "review" | "news" | "guide" | "deal" | "comparison";

export type AuthUser = {
  id: string;
  email: string | null;
  fullName: string | null;
  avatarUrl: string | null;
};

export type Author = {
  name: string;
  avatarUrl: string;
};

export type ArticleCard = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  badge: ArticleBadge;
  kind: ArticleKind;
  category: string;
  categorySlug: string;
  author: Author;
  publishedAt: string;
  readingTime: string;
  score?: number;
};

export type ProductSpecs = Record<string, string>;

export type ProductCard = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  category: string;
  categorySlug: string;
  rating: number;
  score: number;
  verdict: string;
  verdictLong?: string;
  reviewSlug?: string;
  pros: string[];
  cons: string[];
  specs: ProductSpecs;
};

export type TrendingTopic = {
  label: string;
  href: string;
};

export type HomepageContent = {
  hero: ArticleCard[];
  reviews: ProductCard[];
  feed: ArticleCard[];
  topPhones: ProductCard[];
  trending: TrendingTopic[];
};

export type GuideTabId =
  | "smart"
  | "laptops"
  | "wearables"
  | "audio"
  | "gaming";

export type GuideSpecs = {
  processor: string;
  display: string;
  battery: string;
};

export type GuidePick = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  category: string;
  categorySlug: string;
  subCategory: string;
  rank: number;
  rankLabel: string;
  rating: number;
  score: number;
  verdict: string;
  pros: string[];
  specs: GuideSpecs;
};

export type TopFiveGuides = Record<GuideTabId, GuidePick[]>;

export type ReviewTocItem = {
  id: string;
  label: string;
};

export type ReviewFaq = {
  question: string;
  answer: string;
};

export type ReviewGotcha = {
  title: string;
  problem: string;
  workaround: string;
};

export type ReviewBattery = {
  claimed: string;
  realWorld: string;
  screenOn: string;
  drainers: { label: string; penalty: string }[];
  tips: string[];
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tag: string;
};

export type ReviewLongform = {
  slug: string;
  productName: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  categoryLabel: string;
  breadcrumbProduct: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  editorialNote: string;
  featuredImage: string;
  imageCaption: string;
  imageCredit: string;
  hook: string;
  featureHeading: string;
  featureIntro: string;
  featureParagraphs: string[];
  useWhen: string[];
  avoidWhen: string[];
  hiddenHeading: string;
  hiddenIntro: string;
  hiddenParagraphs: string[];
  workflowTitle: string;
  workflowSteps: string[];
  workflowWarning: string;
  batteryIntro: string;
  battery: ReviewBattery;
  gotchas: ReviewGotcha[];
  buyerChecklist: string[];
  faqs: ReviewFaq[];
  closing: string;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  gallery: GalleryImage[];
  toc: ReviewTocItem[];
  score?: number;
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type ArticleLongform = {
  slug: string;
  lede: string;
  sections: ArticleSection[];
};
