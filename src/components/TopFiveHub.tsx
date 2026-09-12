"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Battery,
  Cpu,
  ExternalLink,
  Gamepad2,
  Headphones,
  Laptop,
  Monitor,
  Smartphone,
  Watch,
} from "lucide-react";
import { CoverImage } from "@/components/CoverImage";
import { StarRatingBadge } from "@/components/ScoreBadge";
import { productHref, scoreHeadline } from "@/lib/content/format";
import type { GuidePick, GuideTabId, TopFiveGuides } from "@/lib/content/types";

const tabs: {
  id: GuideTabId;
  label: string;
  hint: string;
  icon: typeof Smartphone;
}[] = [
  { id: "smart", label: "Smart", hint: "Smartphones", icon: Smartphone },
  { id: "laptops", label: "Laptops", hint: "Notebooks", icon: Laptop },
  { id: "wearables", label: "Wearables", hint: "Watches", icon: Watch },
  { id: "audio", label: "Audio", hint: "Headphones", icon: Headphones },
  { id: "gaming", label: "Gaming", hint: "Play", icon: Gamepad2 },
];

function buyHref(name: string) {
  return `/search?q=${encodeURIComponent(name)}`;
}

function SpecChips({ pick }: { pick: GuidePick }) {
  const items = [
    { icon: Cpu, label: pick.specs.processor },
    { icon: Monitor, label: pick.specs.display },
    { icon: Battery, label: pick.specs.battery },
  ];

  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li
            key={item.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-700"
          >
            <Icon className="h-3 w-3 text-brand" aria-hidden />
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}

function CardActions({ pick, compact = false }: { pick: GuidePick; compact?: boolean }) {
  return (
    <div className={`mt-4 flex flex-wrap gap-2 ${compact ? "" : ""}`}>
      <Link
        href={productHref(pick.slug)}
        className="inline-flex items-center rounded-full bg-zinc-950 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white transition-all hover:bg-brand"
      >
        Read Full Review
      </Link>
      <Link
        href={buyHref(pick.name)}
        className="inline-flex items-center gap-1 rounded-full border border-zinc-300 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-zinc-800 transition-all hover:border-brand hover:text-brand"
      >
        Buy / Check Price
        <ExternalLink className="h-3 w-3" aria-hidden />
      </Link>
    </div>
  );
}

function FeaturedPick({ pick }: { pick: GuidePick }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:scale-[1.01] hover:shadow-md">
      <Link
        href={productHref(pick.slug)}
        className="relative block aspect-[16/10] overflow-hidden bg-zinc-100 lg:aspect-[5/4]"
      >
        <CoverImage
          src={pick.imageUrl}
          alt={pick.name}
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-sm">
          {pick.rankLabel}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
          Top Pick · {pick.subCategory}
        </p>
        <h3 className="mt-1 text-2xl font-black tracking-tight text-zinc-950">
          <Link href={productHref(pick.slug)} className="hover:text-brand">
            {pick.name}
          </Link>
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-emerald-600 px-2 py-1 text-xs font-bold text-white">
            {scoreHeadline(pick.score, pick.verdict)}
          </span>
          <StarRatingBadge rating={pick.rating} />
        </div>
        {pick.pros.length ? (
          <ul className="mt-3 space-y-1 text-sm text-zinc-700">
            {pick.pros.map((pro) => (
              <li key={pro} className="flex gap-2">
                <span className="font-black text-emerald-600" aria-hidden>
                  +
                </span>
                {pro}
              </li>
            ))}
          </ul>
        ) : null}
        <SpecChips pick={pick} />
        <div className="mt-auto">
          <CardActions pick={pick} />
        </div>
      </div>
    </article>
  );
}

function GridPick({ pick }: { pick: GuidePick }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:scale-[1.01] hover:shadow-md">
      <Link
        href={productHref(pick.slug)}
        className="relative block aspect-[16/10] overflow-hidden bg-zinc-100"
      >
        <CoverImage
          src={pick.imageUrl}
          alt={pick.name}
          sizes="(min-width: 1024px) 20vw, 50vw"
        />
        <span className="absolute left-2 top-2 rounded-full bg-zinc-950 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
          {pick.rankLabel}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-3.5">
        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
          {pick.subCategory}
        </p>
        <h3 className="mt-0.5 line-clamp-2 text-sm font-black text-zinc-950">
          <Link href={productHref(pick.slug)} className="hover:text-brand">
            {pick.name}
          </Link>
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="rounded bg-zinc-950 px-1.5 py-0.5 text-[10px] font-bold text-white">
            {scoreHeadline(pick.score, pick.verdict)}
          </span>
          <StarRatingBadge rating={pick.rating} />
        </div>
        {pick.pros.length ? (
          <p className="mt-2 line-clamp-2 text-xs text-zinc-600">
            <span className="font-bold text-emerald-700">Pros:</span>{" "}
            {pick.pros.join(" · ")}
          </p>
        ) : null}
        <SpecChips pick={pick} />
        <div className="mt-auto">
          <CardActions pick={pick} compact />
        </div>
      </div>
    </article>
  );
}

export function TopFiveHub({ guides }: { guides: TopFiveGuides }) {
  const [tab, setTab] = useState<GuideTabId>("smart");
  const picks = useMemo(() => guides[tab] ?? [], [guides, tab]);
  const [featured, ...rest] = picks;

  return (
    <section
      aria-labelledby="top-five-heading"
      className="mt-12 border-t border-zinc-200 pt-10"
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-brand">
            Buying guides
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <h2
              id="top-five-heading"
              className="text-xl font-black tracking-tight text-zinc-950 sm:text-2xl"
            >
              TechToReview Recommended: Top 5 Guides
            </h2>
            <span className="rounded-full border border-zinc-300 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-600">
              Updated for 2026
            </span>
          </div>
        </div>
      </div>

      <div className="sticky top-[6.75rem] z-20 -mx-4 mb-5 border-y border-zinc-200 bg-background/95 px-4 py-2 backdrop-blur sm:mx-0 sm:rounded-lg sm:border sm:px-2">
        <div
          className="flex gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Guide categories"
        >
          {tabs.map((item) => {
            const Icon = item.icon;
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(item.id)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-bold uppercase tracking-wide transition-all ${
                  active
                    ? "bg-zinc-950 text-white"
                    : "bg-white text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {item.label}
                <span className="hidden font-medium normal-case tracking-normal text-zinc-400 sm:inline">
                  {item.hint}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {featured ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FeaturedPick pick={featured} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {rest.slice(0, 4).map((pick) => (
              <GridPick key={pick.id} pick={pick} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm text-zinc-500">No picks in this guide yet.</p>
      )}
    </section>
  );
}
