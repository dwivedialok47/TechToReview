import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { PageShell } from "@/components/PageShell";
import { articleHref, formatDate } from "@/lib/content/format";
import { navCategories } from "@/lib/content/mock";
import { getArticlesByCategory } from "@/lib/content/queries";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const category = navCategories.find((item) => item.href.endsWith(params.slug));
  return { title: category?.label ?? "Category" };
}

export default async function CategoryPage({ params }: Props) {
  const category = navCategories.find((item) => item.href.endsWith(params.slug));
  const articles = await getArticlesByCategory(params.slug);

  return (
    <PageShell
      eyebrow="Category"
      title={category?.label ?? params.slug.replace("-", " ")}
    >
      {articles.length ? (
        <ul className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white">
          {articles.map((article) => (
            <li key={article.id} className="p-4">
              <Badge label={article.badge} />
              <h2 className="mt-2 text-lg font-bold">
                <Link href={articleHref(article.slug, article.kind)} className="hover:text-brand">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-1 text-sm text-zinc-600">{article.excerpt}</p>
              <p className="mt-2 text-xs text-zinc-500">
                {article.author.name} · {formatDate(article.publishedAt)}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-zinc-600">
          No stories in this category yet. Seed Supabase or check back soon.
        </p>
      )}
    </PageShell>
  );
}
