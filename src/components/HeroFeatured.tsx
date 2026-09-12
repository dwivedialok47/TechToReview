import Link from "next/link";
import { Clock } from "lucide-react";
import { Badge } from "@/components/Badge";
import { CoverImage } from "@/components/CoverImage";
import { ScoreBadge } from "@/components/ScoreBadge";
import { articleHref, formatDate } from "@/lib/content/format";
import type { ArticleCard } from "@/lib/content/types";

function HeroMeta({
  article,
  tone = "light",
}: {
  article: ArticleCard;
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-zinc-300" : "text-zinc-500";
  const name = tone === "dark" ? "text-white" : "text-zinc-800";

  return (
    <div className={`mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs ${muted}`}>
      <span className={`font-semibold ${name}`}>{article.author.name}</span>
      <span className="inline-flex items-center gap-1">
        <Clock className="h-3 w-3" aria-hidden />
        {article.readingTime}
      </span>
      <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
    </div>
  );
}

function LeadStory({ article }: { article: ArticleCard }) {
  return (
    <article className="group relative min-h-[320px] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 sm:min-h-[420px] lg:min-h-full">
      <Link href={articleHref(article.slug, article.kind)} className="absolute inset-0">
        <CoverImage
          src={article.featuredImage}
          alt=""
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
      </Link>
      <div className="relative flex h-full min-h-[320px] flex-col justify-end p-5 sm:min-h-[420px] sm:p-7 lg:min-h-full">
        <div className="flex items-center gap-2">
          <Badge label={article.badge} />
          {article.score != null ? <ScoreBadge score={article.score} compact /> : null}
        </div>
        <h2 className="mt-3 max-w-3xl text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl">
          <Link href={articleHref(article.slug, article.kind)} className="hover:underline">
            {article.title}
          </Link>
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-200 sm:text-base">
          {article.excerpt}
        </p>
        <HeroMeta article={article} tone="dark" />
      </div>
    </article>
  );
}

function SideStory({ article }: { article: ArticleCard }) {
  return (
    <article className="group flex min-h-[128px] overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:scale-[1.01]">
      <Link
        href={articleHref(article.slug, article.kind)}
        className="relative block w-[38%] shrink-0 overflow-hidden bg-zinc-200"
      >
        <CoverImage
          src={article.featuredImage}
          alt=""
          sizes="(min-width: 1024px) 15vw, 40vw"
        />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col justify-center p-3 sm:p-4">
        <div className="flex items-center gap-2">
          <Badge label={article.badge} />
          {article.score != null ? <ScoreBadge score={article.score} compact /> : null}
        </div>
        <h3 className="mt-1.5 line-clamp-3 text-sm font-bold leading-snug text-zinc-950 sm:text-base">
          <Link href={articleHref(article.slug, article.kind)} className="hover:text-brand">
            {article.title}
          </Link>
        </h3>
        <HeroMeta article={article} />
      </div>
    </article>
  );
}

export function HeroFeatured({ articles }: { articles: ArticleCard[] }) {
  const [lead, ...rest] = articles;
  if (!lead) return null;

  return (
    <section aria-labelledby="hero-heading" className="grid gap-4 lg:grid-cols-5 lg:gap-5">
      <h2 id="hero-heading" className="sr-only">
        Featured stories
      </h2>
      <div className="lg:col-span-3">{<LeadStory article={lead} />}</div>
      <div className="flex flex-col gap-4 lg:col-span-2">
        {rest.slice(0, 3).map((article) => (
          <SideStory key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
