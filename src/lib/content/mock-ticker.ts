import { mockArticles } from "@/lib/content/mock";
import { headlineFromArticle } from "@/lib/content/format";
import type { TickerCategory, TickerHeadline } from "@/lib/content/types";

const extraHeadlines: TickerHeadline[] = [
  {
    id: "t-hands-1",
    title: "Galaxy S24 Ultra hands-on: S Pen on a moving train tray",
    href: "/reviews/galaxy-s24-ultra-hands-on",
    category: "hands-on",
  },
  {
    id: "t-hands-2",
    title: "ROG Ally X 2 first flight: 17W TDP vs Windows sleep",
    href: "/reviews/rog-ally-x-2-review",
    category: "hands-on",
  },
  {
    id: "t-break-1",
    title: "Breaking: Snapdragon 8 Gen 4 laptop slides claim 22-hour battery",
    href: "/articles/snapdragon-8-gen-4-laptop-leak",
    category: "breaking",
  },
  {
    id: "t-break-2",
    title: "Breaking: Windows 12 lock screen leak adds live activities",
    href: "/articles/windows-12-lock-screen-leak",
    category: "breaking",
  },
  {
    id: "t-review-0",
    title: "iPhone Duo: weeks with Apple’s foldable, Touch ID, and Split View",
    href: "/reviews/iphone-duo-review",
    category: "reviews",
  },
  {
    id: "t-review-1",
    title: "iPhone 16 Pro Max: Camera Control after months as a daily driver",
    href: "/reviews/iphone-16-pro-max-review",
    category: "reviews",
  },
  {
    id: "t-review-2",
    title: "Pixel 10 Pro review: Night Sight vs Tensor heat on the commute",
    href: "/reviews/pixel-10-pro-review",
    category: "reviews",
  },
  {
    id: "t-guide-1",
    title: "Best laptops 2026: the 12 machines we’d still pack",
    href: "/articles/best-laptops-2026",
    category: "guides",
  },
  {
    id: "t-guide-2",
    title: "Best ANC earbuds under $200: the bus-plus-call shortlist",
    href: "/articles/best-anc-earbuds-under-200",
    category: "guides",
  },
  {
    id: "t-deal-1",
    title: "PS5 Pro restock: $80 off the Disc bundle at Amazon",
    href: "/articles/ps5-pro-restock-deal",
    category: "deals",
  },
  {
    id: "t-deal-2",
    title: "65-inch QD-OLED drops below $1,200 this weekend",
    href: "/articles/oled-tv-weekend-deal",
    category: "deals",
  },
  {
    id: "t-news-1",
    title: "On-device AI in 2026: what actually works in airplane mode",
    href: "/articles/on-device-ai-phones-2026",
    category: "news",
  },
  {
    id: "t-news-2",
    title: "How to dump a full iPhone camera roll without iCloud",
    href: "/articles/how-to-transfer-iphone-photos-without-icloud",
    category: "guides",
  },
];

export const mockTickerHeadlines: TickerHeadline[] = [
  ...mockArticles.map(headlineFromArticle),
  ...extraHeadlines,
];

const CATEGORIES: TickerCategory[] = [
  "reviews",
  "hands-on",
  "guides",
  "breaking",
  "deals",
  "news",
];

export function ensureTickerHeadlines(
  incoming: TickerHeadline[],
  min = 10,
): TickerHeadline[] {
  const merged: TickerHeadline[] = [];
  const seen = new Set<string>();

  for (const item of [...incoming, ...mockTickerHeadlines]) {
    const key = `${item.href}:${item.category}:${item.title}`;
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(item);
  }

  const picked: TickerHeadline[] = [];
  const used = new Set<string>();

  for (const category of CATEGORIES) {
    const match = merged.find((item) => item.category === category);
    if (!match) continue;
    picked.push(match);
    used.add(`${match.href}:${match.title}`);
  }

  for (const item of merged) {
    if (picked.length >= min) break;
    const key = `${item.href}:${item.title}`;
    if (used.has(key)) continue;
    picked.push(item);
    used.add(key);
  }

  return picked.slice(0, Math.max(min, 10));
}
