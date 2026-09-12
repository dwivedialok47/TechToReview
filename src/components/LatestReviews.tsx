import Link from "next/link";
import { CoverImage } from "@/components/CoverImage";
import { ScoreBadge, StarRatingBadge } from "@/components/ScoreBadge";
import { productHref } from "@/lib/content/format";
import type { ProductCard } from "@/lib/content/types";

export function LatestReviews({ products }: { products: ProductCard[] }) {
  return (
    <section aria-labelledby="reviews-heading" className="mt-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-brand">
            Lab scores
          </p>
          <h2 id="reviews-heading" className="text-xl font-black tracking-tight text-zinc-950">
            Latest Reviews
          </h2>
        </div>
        <Link
          href="/category/mobile"
          className="text-xs font-bold uppercase tracking-wider text-zinc-500 transition-colors hover:text-brand"
        >
          View all
        </Link>
      </div>

      <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory [scrollbar-width:thin] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="group w-[240px] shrink-0 snap-start overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:scale-[1.01] hover:shadow-md sm:w-auto"
          >
            <Link
              href={productHref(product.slug)}
              className="relative block aspect-[4/3] overflow-hidden bg-zinc-100"
            >
              <CoverImage
                src={product.imageUrl}
                alt=""
                sizes="(min-width: 1024px) 25vw, 240px"
              />
              <div className="absolute right-2 top-2">
                <ScoreBadge score={product.score} />
              </div>
            </Link>
            <div className="p-3">
              <h3 className="line-clamp-2 text-sm font-bold text-zinc-950">
                <Link href={productHref(product.slug)} className="hover:text-brand">
                  {product.name}
                </Link>
              </h3>
              <div className="mt-2">
                <StarRatingBadge rating={product.rating} />
              </div>
              {product.pros.length ? (
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-600">
                  <span className="font-bold text-emerald-700">Pros:</span>{" "}
                  {product.pros.join(", ")}
                </p>
              ) : null}
              <p className="mt-2 text-xs font-semibold text-zinc-500">
                {product.score.toFixed(1)} — {product.verdict}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
