"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Gauge, Mail } from "lucide-react";
import { CoverImage } from "@/components/CoverImage";
import { ScoreBadge } from "@/components/ScoreBadge";
import { productHref } from "@/lib/content/format";
import type { ProductCard } from "@/lib/content/types";

function TopPhones({ phones }: { phones: ProductCard[] }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-4">
      <h2 className="text-sm font-black uppercase tracking-wide text-zinc-950">
        Top 5 Smartphones of 2026
      </h2>
      <ol className="mt-4 space-y-3">
        {phones.map((phone, index) => (
          <li key={phone.id}>
            <Link
              href={productHref(phone.slug)}
              className="group flex items-center gap-3 transition-all hover:scale-[1.01]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-black text-white">
                {index + 1}
              </span>
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-zinc-100">
                <CoverImage src={phone.imageUrl} alt="" sizes="48px" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold text-zinc-950 group-hover:text-brand">
                  {phone.name}
                </span>
                <span className="text-xs text-zinc-500">{phone.verdict}</span>
              </span>
              <ScoreBadge score={phone.score} compact />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      id="newsletter"
      className="scroll-mt-32 rounded-lg border border-zinc-800 bg-zinc-950 p-5 text-white"
    >
      <div className="mb-3 inline-flex rounded-full bg-brand/15 p-2 text-brand">
        <Mail className="h-4 w-4" aria-hidden />
      </div>
      <h2 className="text-base font-black tracking-tight">
        Get daily tech news directly to your inbox
      </h2>
      <p className="mt-2 text-sm text-zinc-400">
        Reviews, deals, and lab scores — no fluff. Unsubscribe anytime.
      </p>
      {done ? (
        <p className="mt-4 text-sm font-semibold text-emerald-400">
          You&apos;re on the list. Watch for the next briefing.
        </p>
      ) : (
        <form
          className="mt-4 space-y-2"
          onSubmit={(event) => {
            event.preventDefault();
            if (email.includes("@")) setDone(true);
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@email.com"
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-brand"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-brand px-3 py-2 text-xs font-extrabold uppercase tracking-wider transition-all hover:bg-brand-hover"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}

function SpecsCompareCta() {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-4">
      <div className="mb-2 inline-flex rounded-full bg-zinc-100 p-2 text-brand">
        <Gauge className="h-4 w-4" aria-hidden />
      </div>
      <h2 className="text-sm font-black uppercase tracking-wide text-zinc-950">
        Quick specs comparison
      </h2>
      <p className="mt-2 text-sm text-zinc-600">
        Stack iPhone 16 Pro Max, Galaxy S24 Ultra, and Pixel 10 Pro side by
        side — cameras, battery, and charging.
      </p>
      <Link
        href="/compare"
        className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-brand hover:underline"
      >
        Open compare
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    </section>
  );
}

export function Sidebar({ phones }: { phones: ProductCard[] }) {
  return (
    <aside className="flex flex-col gap-4">
      <TopPhones phones={phones} />
      <NewsletterCard />
      <SpecsCompareCta />
    </aside>
  );
}
