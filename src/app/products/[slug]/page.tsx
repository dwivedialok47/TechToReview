import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScoreBadge, StarRatingBadge } from "@/components/ScoreBadge";
import { getProductBySlug } from "@/lib/content/queries";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  return {
    title: product ? `${product.name} review` : "Product",
    description: product?.verdictLong ?? product?.verdict,
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const specEntries = Object.entries(product.specs ?? {});

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 font-sans sm:px-6">
      <p className="text-xs font-extrabold uppercase tracking-wider text-brand">
        {product.category}
      </p>
      <h1 className="mt-1 text-3xl font-black tracking-tight text-zinc-950">
        {product.name}
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <StarRatingBadge rating={product.rating} />
        <ScoreBadge score={product.score} />
      </div>
      <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-lg bg-zinc-200">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 768px) 768px, 100vw"
        />
      </div>

      <p className="mt-5 text-base leading-7 text-zinc-700">
        {product.verdictLong ??
          `Verdict: ${product.score.toFixed(1)} — ${product.verdict}.`}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {product.pros.length ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
              Pros
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-800">
              {product.pros.map((item) => (
                <li key={item}>+ {item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {product.cons.length ? (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
              Cons
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-800">
              {product.cons.map((item) => (
                <li key={item}>− {item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {specEntries.length ? (
        <section className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white">
          <h2 className="border-b border-zinc-200 px-4 py-3 text-sm font-black uppercase tracking-wide">
            Specs we actually used
          </h2>
          <dl className="divide-y divide-zinc-100">
            {specEntries.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[8rem_1fr] gap-3 px-4 py-2.5 text-sm"
              >
                <dt className="font-semibold text-zinc-500">{label}</dt>
                <dd className="font-medium text-zinc-900">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {product.reviewSlug ? (
        <p className="mt-6 text-sm font-semibold">
          <Link href={`/reviews/${product.reviewSlug}`} className="text-brand hover:underline">
            Read the full real-world review: quirks, hidden features, and the buyer checklist
          </Link>
        </p>
      ) : null}
    </main>
  );
}
