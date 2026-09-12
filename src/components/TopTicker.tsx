"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import {
  BookOpen,
  Hand,
  Newspaper,
  ScanSearch,
  Siren,
  Tag,
} from "lucide-react";
import { isTickerCategory } from "@/lib/content/format";
import type { TickerCategory, TickerHeadline } from "@/lib/content/types";

const CATEGORY_ORDER: TickerCategory[] = [
  "reviews",
  "hands-on",
  "guides",
  "breaking",
  "deals",
  "news",
];

const CATEGORIES: Record<
  TickerCategory,
  {
    label: string;
    icon: typeof ScanSearch;
    badge: string;
  }
> = {
  reviews: {
    label: "Reviews",
    icon: ScanSearch,
    badge: "bg-sky-500 text-white",
  },
  "hands-on": {
    label: "Hands-on",
    icon: Hand,
    badge: "bg-amber-400 text-zinc-950",
  },
  guides: {
    label: "Guides",
    icon: BookOpen,
    badge: "bg-violet-500 text-white",
  },
  breaking: {
    label: "Breaking",
    icon: Siren,
    badge: "bg-brand text-white",
  },
  deals: {
    label: "Deals",
    icon: Tag,
    badge: "bg-emerald-500 text-white",
  },
  news: {
    label: "News",
    icon: Newspaper,
    badge: "bg-zinc-300 text-zinc-950",
  },
};

function interleaveByCategory(headlines: TickerHeadline[]): TickerHeadline[] {
  const buckets = new Map<TickerCategory, TickerHeadline[]>();
  for (const category of CATEGORY_ORDER) buckets.set(category, []);
  for (const item of headlines) {
    buckets.get(item.category)?.push(item);
  }

  const mixed: TickerHeadline[] = [];
  let added = true;
  let index = 0;
  while (added) {
    added = false;
    for (const category of CATEGORY_ORDER) {
      const next = buckets.get(category)?.[index];
      if (!next) continue;
      mixed.push(next);
      added = true;
    }
    index += 1;
  }

  return mixed.length ? mixed : headlines;
}

export function TopTicker({ headlines }: { headlines: TickerHeadline[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const active = isTickerCategory(typeParam ?? undefined) ? typeParam : null;

  const tickerItems = useMemo(() => interleaveByCategory(headlines), [headlines]);
  const loop = [...tickerItems, ...tickerItems];

  function selectCategory(id: TickerCategory) {
    const params = new URLSearchParams(searchParams.toString());
    if (active === id) {
      params.delete("type");
    } else {
      params.set("type", id);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div className="border-b border-brand/40 bg-zinc-950">
      <div className="mx-auto flex max-w-[1280px] items-center gap-3 px-4 py-1.5 sm:px-6">
        <span className="hidden shrink-0 items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand sm:inline-flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          Live
        </span>

        <div className="ticker-track-wrap min-w-0 flex-1 overflow-hidden">
          <ul className="animate-marquee items-center gap-7 py-0.5 text-[11px] text-zinc-200 sm:text-xs">
            {loop.map((item, index) => {
              const category = CATEGORIES[item.category];
              const Icon = category.icon;
              const selected = active === item.category;

              return (
                <li
                  key={`${item.id}-${index}`}
                  className="flex shrink-0 items-center gap-2 whitespace-nowrap"
                >
                  <button
                    type="button"
                    onClick={() => selectCategory(item.category)}
                    aria-pressed={selected}
                    className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider sm:text-[10px] ${category.badge} ${
                      selected ? "ring-2 ring-white/80" : ""
                    } ${item.category === "breaking" ? "relative" : ""}`}
                  >
                    {item.category === "breaking" ? (
                      <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 animate-ping rounded-full bg-white/90" />
                    ) : null}
                    <Icon className="h-3 w-3" aria-hidden />
                    {category.label}
                  </button>
                  <Link
                    href={item.href}
                    className="font-medium text-zinc-100 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                  <span className="text-zinc-600" aria-hidden>
                    |
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function TopTickerFallback() {
  return (
    <div className="border-b border-brand/40 bg-zinc-950">
      <div className="mx-auto h-9 max-w-[1280px] px-4 sm:px-6" />
    </div>
  );
}
