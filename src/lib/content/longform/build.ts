import { reviewReadingTime } from "@/lib/content/format";
import type { GalleryImage, ReviewLongform, ReviewTocItem } from "@/lib/content/types";

export const DEFAULT_REVIEW_TOC: ReviewTocItem[] = [
  { id: "real-world-hook", label: "Real-World Hook" },
  { id: "headline-features", label: "Headline Features" },
  { id: "hidden-features", label: "Hidden Features" },
  { id: "battery-reality", label: "Battery Reality" },
  { id: "gotchas", label: "Gotchas" },
  { id: "buyer-checklist", label: "Buyer Checklist" },
  { id: "faq", label: "FAQ" },
];

export function reviewToc(featureLabel: string, featureId = "headline-features"): ReviewTocItem[] {
  return DEFAULT_REVIEW_TOC.map((item, index) =>
    index === 1 ? { id: featureId, label: featureLabel } : item,
  );
}

export function buildReview(
  review: Omit<ReviewLongform, "readingTime" | "toc" | "gallery"> & {
    toc?: ReviewTocItem[];
    readingTime?: string;
    gallery?: GalleryImage[];
  },
): ReviewLongform {
  const assembled: ReviewLongform = {
    ...review,
    featureParagraphs: review.featureParagraphs ?? [],
    hiddenParagraphs: review.hiddenParagraphs ?? [],
    batteryIntro: review.batteryIntro ?? "",
    closing: review.closing ?? "",
    pros: review.pros ?? [],
    cons: review.cons ?? [],
    specs: review.specs ?? {},
    gallery: review.gallery ?? [],
    toc: review.toc ?? reviewToc(review.featureHeading),
    readingTime: "12 min read",
  };

  return {
    ...assembled,
    readingTime: review.readingTime ?? reviewReadingTime(assembled),
  };
}
