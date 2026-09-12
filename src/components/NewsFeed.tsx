"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/Badge";
import { CoverImage } from "@/components/CoverImage";
import {
  articleHref,
  ctaLabel,
  formatDate,
  isTickerCategory,
  matchesTickerCategory,
} from "@/lib/content/format";
import type { ArticleCard, FeedTab } from "@/lib/content/types";

const tabs: { id: FeedTab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "reviews", label: "Reviews" },
  { id: "hands-on", label: "Hands-on" },
  { id: "guides", label: "Guides" },
  { id: "breaking", label: "Breaking" },
  { id: "deals", label: "Deals" },
  { id: "news", label: "News" },
];

export function NewsFeed({
  articles,
  initialType,
}: {
  articles: ArticleCard[];
  initialType?: string;
}) {
  const router = useRouter();
  const [tab, setTab] = useState<FeedTab>(() =>
    isTickerCategory(initialType) ? initialType : "all",
  );

  useEffect(() => {
    setTab(isTickerCategory(initialType) ? initialType : "all");
  }, [initialType]);

  function selectTab(next: FeedTab) {
    setTab(next);
    router.replace(next === "all" ? "/" : `/?type=${next}`, { scroll: false });
  }

  const filtered = useMemo(
    () => articles.filter((article) => matchesTickerCategory(article, tab)),
    [articles, tab],
  );

  return (
    <section aria-labelledby="feed-heading">
      <div className="flex flex-col gap-3 border-b border-zinc-200 pb-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-brand">
            The desk
          </p>
          <h2 id="feed-heading" className="text-xl font-black tracking-tight text-zinc-950">
            Latest News & Deep Dives
          </h2>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter stories">
          {tabs.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => selectTab(item.id)}
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition-all ${
                  active
                    ? "bg-zinc-950 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="divide-y divide-zinc-200">
        {filtered.length ? (
          filtered.map((article) => (
            <article
              key={article.id}
              className="group flex gap-4 py-5 transition-all hover:scale-[1.01]"
            >
              <Link
                href={articleHref(article.slug, article.kind)}
                className="relative hidden h-28 w-40 shrink-0 overflow-hidden rounded-md bg-zinc-100 sm:block"
              >
                <CoverImage
                  src={article.featuredImage}
                  alt=""
                  sizes="160px"
                />
              </Link>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge label={article.badge} />
                  <Link
                    href={`/category/${article.categorySlug}`}
                    className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 hover:text-brand"
                  >
                    {article.category}
                  </Link>
                </div>
                <h3 className="mt-1.5 text-base font-bold leading-snug text-zinc-950 sm:text-lg">
                  <Link href={articleHref(article.slug, article.kind)} className="hover:text-brand">
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-zinc-600">
                  {article.excerpt}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.author.avatarUrl}
                    alt=""
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="font-semibold text-zinc-700">
                    {article.author.name}
                  </span>
                  <time dateTime={article.publishedAt}>
                    {formatDate(article.publishedAt)}
                  </time>
                  <span>{article.readingTime}</span>
                  <Link
                    href={articleHref(article.slug, article.kind)}
                    className="ml-auto inline-flex items-center gap-1 rounded-full bg-zinc-950 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white transition-all hover:bg-brand"
                  >
                    {ctaLabel(article.kind)}
                    <ArrowRight className="h-3 w-3" aria-hidden />
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="py-8 text-sm text-zinc-500">No stories in this filter yet.</p>
        )}
      </div>
    </section>
  );
}
