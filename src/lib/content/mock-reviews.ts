import { appleWatchUltra3Review } from "@/lib/content/longform/apple-watch-ultra-3";
import { DEFAULT_REVIEW_TOC } from "@/lib/content/longform/build";
import { galaxyS24UltraReview } from "@/lib/content/longform/galaxy-s24-ultra";
import { iphone16ProMaxReview } from "@/lib/content/longform/iphone-16-pro-max";
import { iphoneDuoReview } from "@/lib/content/longform/iphone-duo";
import { pixel10ProReview } from "@/lib/content/longform/pixel-10-pro";
import { rogAllyX2Review } from "@/lib/content/longform/rog-ally-x-2";
import { sonyWh1000xm6Review } from "@/lib/content/longform/sony-wh-1000xm6";
import type { ReviewLongform } from "@/lib/content/types";

export { DEFAULT_REVIEW_TOC, iphone16ProMaxReview, iphoneDuoReview };

export const mockLongformReviews: Record<string, ReviewLongform> = {
  "iphone-duo-review": iphoneDuoReview,
  "iphone-duo": iphoneDuoReview,
  "iphone-16-pro-max-review": iphone16ProMaxReview,
  "iphone-16-pro-max": iphone16ProMaxReview,
  "galaxy-s24-ultra-hands-on": galaxyS24UltraReview,
  "galaxy-s24-ultra": galaxyS24UltraReview,
  "pixel-10-pro-review": pixel10ProReview,
  "pixel-10-pro": pixel10ProReview,
  "sony-wh-1000xm6-review": sonyWh1000xm6Review,
  "sony-wh-1000xm6": sonyWh1000xm6Review,
  "apple-watch-ultra-3-review": appleWatchUltra3Review,
  "apple-watch-ultra-3": appleWatchUltra3Review,
  "rog-ally-x-2-review": rogAllyX2Review,
  "rog-ally-x-2": rogAllyX2Review,
};
