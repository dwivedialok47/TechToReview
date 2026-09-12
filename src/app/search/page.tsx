import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { articleHref } from "@/lib/content/format";
import { getPublishedArticles } from "@/lib/content/queries";

export const metadata: Metadata = { title: "Search" };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = (searchParams.q ?? "").trim().toLowerCase();
  const articles = await getPublishedArticles();
  const results = query
    ? articles.filter((article) =>
        `${article.title} ${article.excerpt} ${article.category}`
          .toLowerCase()
          .includes(query),
      )
    : articles.slice(0, 8);

  return (
    <PageShell eyebrow="Search" title={query ? `Results for “${query}”` : "Search the desk"}>
      <ul className="space-y-3">
        {results.map((article) => (
          <li key={article.id}>
            <Link href={articleHref(article.slug, article.kind)} className="font-bold hover:text-brand">
              {article.title}
            </Link>
            <p className="text-sm text-zinc-600">{article.excerpt}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
