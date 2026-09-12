import Image from "next/image";
import Link from "next/link";
import { Check, Clock, NotebookPen, X } from "lucide-react";
import { ArticleToc } from "@/components/ArticleToc";
import { FaqAccordion, GotchaAccordion } from "@/components/ArticleFaq";
import { HorizontalGallery } from "@/components/HorizontalGallery";
import { ScoreBadge } from "@/components/ScoreBadge";
import { formatDate } from "@/lib/content/format";
import type { ReviewLongform, ReviewTocItem } from "@/lib/content/types";

function faqJsonLd(review: ReviewLongform) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: review.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function sectionId(review: ReviewLongform, index: number, fallback: string) {
  return review.toc[index]?.id ?? fallback;
}

function Paragraphs({ items }: { items: string[] }) {
  return items.map((paragraph, index) => (
    <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
  ));
}

export function ArticleLayout({ review }: { review: ReviewLongform }) {
  const hookId = sectionId(review, 0, "real-world-hook");
  const featureId = sectionId(review, 1, "headline-features");
  const hiddenId = sectionId(review, 2, "hidden-features");
  const batteryId = sectionId(review, 3, "battery-reality");
  const gotchasId = sectionId(review, 4, "gotchas");
  const checklistId = sectionId(review, 5, "buyer-checklist");
  const faqId = sectionId(review, 6, "faq");
  const specEntries = Object.entries(review.specs ?? {});
  const displayToc: ReviewTocItem[] = [
    review.toc[0] ?? { id: hookId, label: "Real-World Hook" },
    { id: "official-gallery", label: "Official Gallery" },
    ...review.toc.slice(1),
  ];

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-8 font-sans sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(review)) }}
      />

      <nav aria-label="Breadcrumb" className="text-xs font-semibold text-zinc-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link
              href={`/category/${review.categorySlug}`}
              className="hover:text-brand"
            >
              {review.categoryLabel}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-zinc-950">{review.breadcrumbProduct}</li>
        </ol>
      </nav>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
          {review.title}
        </h1>
        <p className="mt-3 text-lg text-zinc-600">{review.subtitle}</p>
      </header>

      <section className="mt-5 flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.author.avatarUrl}
          alt=""
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="font-bold text-zinc-950">{review.author.name}</p>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
            <time dateTime={review.publishedAt}>{formatDate(review.publishedAt)}</time>
            {review.updatedAt ? (
              <span>Updated {formatDate(review.updatedAt)}</span>
            ) : null}
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden />
              {review.readingTime}
            </span>
            {review.score != null ? <ScoreBadge score={review.score} compact /> : null}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white">
          <NotebookPen className="h-3.5 w-3.5" aria-hidden />
          {review.editorialNote}
        </span>
      </section>

      <figure className="relative mt-6 overflow-hidden rounded-xl bg-zinc-200">
        <div className="relative aspect-[16/9]">
          <Image
            src={review.featuredImage}
            alt={review.imageCaption}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1280px) 1280px, 100vw"
          />
        </div>
        <figcaption className="border-t border-zinc-200 bg-white px-4 py-2 text-xs text-zinc-500">
          {review.imageCaption}{" "}
          <span className="font-semibold text-zinc-700">Credit: {review.imageCredit}</span>
        </figcaption>
      </figure>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <div className="sticky top-[7rem] z-10 rounded-xl border border-zinc-200 bg-white/95 p-3 backdrop-blur">
            <ArticleToc items={displayToc} />
          </div>
        </aside>

        <article className="prose prose-lg prose-review max-w-none lg:col-span-9">
          {specEntries.length || review.pros.length ? (
            <aside className="not-prose mb-8 grid gap-4 rounded-xl border border-zinc-200 bg-white p-4 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-zinc-500">
                  Lab score
                </p>
                <p className="mt-1 text-2xl font-black text-zinc-950">
                  {review.score != null ? `${review.score.toFixed(1)} / 10` : "In testing"}
                </p>
                {review.pros.length ? (
                  <ul className="mt-3 space-y-1 text-sm text-emerald-800">
                    {review.pros.map((item) => (
                      <li key={item}>+ {item}</li>
                    ))}
                  </ul>
                ) : null}
                {review.cons.length ? (
                  <ul className="mt-2 space-y-1 text-sm text-rose-800">
                    {review.cons.map((item) => (
                      <li key={item}>− {item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              {specEntries.length ? (
                <dl className="grid grid-cols-[7.5rem_1fr] gap-x-3 gap-y-2 text-sm">
                  {specEntries.map(([label, value]) => (
                    <div key={label} className="contents">
                      <dt className="font-semibold text-zinc-500">{label}</dt>
                      <dd className="font-medium text-zinc-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </aside>
          ) : null}

          <section id={hookId} className="scroll-mt-32">
            <h2>Real-World Hook</h2>
            <blockquote className="not-italic">
              <p className="mb-0 text-base leading-7">{review.hook}</p>
            </blockquote>
          </section>

          {review.gallery.length ? (
            <section id="official-gallery" className="not-prose scroll-mt-32">
              <h2 className="text-2xl font-black tracking-tight text-zinc-950">
                Official Gallery & Hardware Close-Ups
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                Swipe or scroll horizontally to inspect design angles and camera
                samples
              </p>
              <div className="mt-5">
                <HorizontalGallery
                  images={review.gallery}
                  productName={review.productName}
                />
              </div>
            </section>
          ) : null}

          <section id={featureId} className="scroll-mt-32">
            <h2>{review.featureHeading}</h2>
            <p>{review.featureIntro}</p>
            <Paragraphs items={review.featureParagraphs ?? []} />
            <div className="not-prose mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  When to use
                </p>
                <ul className="mt-3 space-y-2">
                  {review.useWhen.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-800">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
                  Avoid when
                </p>
                <ul className="mt-3 space-y-2">
                  {review.avoidWhen.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-800">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id={hiddenId} className="scroll-mt-32">
            <h2>{review.hiddenHeading}</h2>
            <p>{review.hiddenIntro}</p>
            <Paragraphs items={review.hiddenParagraphs ?? []} />
            <div className="not-prose mt-4 rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-brand">
                Step-by-step
              </p>
              <h3 className="mt-1 text-base font-black text-zinc-950">
                {review.workflowTitle}
              </h3>
              <ol className="mt-3 space-y-2">
                {review.workflowSteps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm leading-6 text-zinc-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-4 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-950">
                <span className="font-bold">Watch this: </span>
                {review.workflowWarning}
              </p>
            </div>
          </section>

          <section id={batteryId} className="scroll-mt-32">
            <h2>Power, Performance & Battery Reality</h2>
            {review.batteryIntro ? <p>{review.batteryIntro}</p> : null}
            <div className="not-prose grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 bg-white p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  Claimed
                </p>
                <p className="mt-1 text-sm font-semibold text-zinc-950">
                  {review.battery.claimed}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  Real-world
                </p>
                <p className="mt-1 text-sm font-semibold text-zinc-950">
                  {review.battery.realWorld}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-950 p-4 text-white">
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Screen-on
                </p>
                <p className="mt-1 text-sm font-semibold">{review.battery.screenOn}</p>
              </div>
            </div>
            <h3>Unexpected drainers</h3>
            <ul>
              {review.battery.drainers.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.penalty}
                </li>
              ))}
            </ul>
            <h3>Three steps that actually help</h3>
            <ol>
              {review.battery.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ol>
          </section>

          <section id={gotchasId} className="scroll-mt-32">
            <h2>Hardware Limits & The Gotchas</h2>
            <div className="not-prose">
              <GotchaAccordion items={review.gotchas} />
            </div>
          </section>

          <section id={checklistId} className="scroll-mt-32">
            <h2>Buyers Checklist / What to Test</h2>
            <div className="not-prose rounded-xl border border-zinc-200 bg-white p-5">
              <ol className="space-y-3">
                {review.buyerChecklist.map((item, index) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section id={faqId} className="scroll-mt-32">
            <h2>Frequently Asked Questions</h2>
            <div className="not-prose">
              <FaqAccordion faqs={review.faqs} />
            </div>
          </section>

          {review.closing ? (
            <section className="scroll-mt-32">
              <h2>The long-term verdict</h2>
              <p>{review.closing}</p>
            </section>
          ) : null}
        </article>
      </div>
    </main>
  );
}
