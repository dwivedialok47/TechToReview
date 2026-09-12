import type { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { Badge } from "@/components/Badge";
import { ScoreBadge } from "@/components/ScoreBadge";
import { articleHref, formatDate } from "@/lib/content/format";
import { getArticleLongform } from "@/lib/content/mock-articles-longform";
import { getArticleBySlug, getPublishedArticles } from "@/lib/content/queries";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  const longform = getArticleLongform(params.slug);
  return {
    title: article?.title ?? "Story",
    description: longform?.lede ?? article?.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();
  if (article.kind === "review" || article.kind === "comparison") {
    redirect(`/reviews/${article.slug}`);
  }

  const longform = getArticleLongform(article.slug);
  const more = (await getPublishedArticles())
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 font-sans sm:px-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge label={article.badge} />
        {article.score != null ? <ScoreBadge score={article.score} compact /> : null}
        <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
          {article.category}
        </span>
      </div>
      <h1 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-3 text-lg text-zinc-600">{article.excerpt}</p>
      <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.author.avatarUrl}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="font-semibold text-zinc-800">{article.author.name}</span>
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        <span>{article.readingTime}</span>
      </div>
      <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-lg bg-zinc-200">
        <Image
          src={article.featuredImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="(min-width: 768px) 768px, 100vw"
        />
      </div>
      <article className="prose prose-lg prose-review mt-8 max-w-none">
        {longform ? (
          <>
            <blockquote>
              <p>{longform.lede}</p>
            </blockquote>
            {longform.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </section>
            ))}
          </>
        ) : (
          <p>{article.excerpt}</p>
        )}
      </article>
      {more.length ? (
        <aside className="mt-12 border-t border-zinc-200 pt-6">
          <h2 className="text-sm font-black uppercase tracking-wide">More from the desk</h2>
          <ul className="mt-3 space-y-2 text-sm font-semibold">
            {more.map((item) => (
              <li key={item.id}>
                <a href={articleHref(item.slug, item.kind)} className="hover:text-brand">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </main>
  );
}
