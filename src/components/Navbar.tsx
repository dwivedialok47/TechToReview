"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { Mail, Menu, Search, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopTicker, TopTickerFallback } from "@/components/TopTicker";
import { navCategories } from "@/lib/content/mock";
import type { TickerHeadline, TrendingTopic } from "@/lib/content/types";

function Logo() {
  return (
    <Link href="/" className="shrink-0 font-sans text-lg font-black tracking-tight sm:text-xl">
      TECH
      <span className="text-brand">TO</span>
      REVIEW
    </Link>
  );
}

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.userAgent));

    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (event.key === "/" && !typing) {
        event.preventDefault();
        inputRef.current?.focus();
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <form
      action="/search"
      className="relative hidden min-w-0 flex-1 md:block"
      role="search"
    >
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
        aria-hidden
      />
      <input
        ref={inputRef}
        type="search"
        name="q"
        placeholder="Search reviews, news, deals…"
        className="w-full rounded-full border border-zinc-700 bg-zinc-900 py-2 pl-10 pr-20 text-sm text-white outline-none transition-all placeholder:text-zinc-500 focus:border-brand focus:ring-2 focus:ring-brand/30"
      />
      <kbd className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-full border border-zinc-700 bg-zinc-800 px-2 py-0.5 text-[10px] font-semibold text-zinc-300 sm:inline-flex">
        {isMac ? "⌘K" : "Ctrl+K"}
        <span className="text-zinc-500">/</span>
      </kbd>
    </form>
  );
}

function TrendingBar({
  trending,
  dateLabel,
}: {
  trending: TrendingTopic[];
  dateLabel: string;
}) {
  return (
    <div className="border-b border-zinc-800 bg-zinc-900">
      <div className="mx-auto flex max-w-[1280px] items-center gap-3 px-4 py-1.5 text-[11px] sm:px-6">
        <nav
          aria-label="Trending topics"
          className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <span className="shrink-0 font-extrabold uppercase tracking-wider text-brand">
            Trending Topics:
          </span>
          <ul className="flex min-w-0 items-center gap-2">
            {trending.map((topic, index) => (
              <li key={topic.href} className="flex shrink-0 items-center gap-2">
                {index > 0 ? (
                  <span className="text-zinc-600" aria-hidden>
                    |
                  </span>
                ) : null}
                <Link
                  href={topic.href}
                  className="whitespace-nowrap font-medium text-zinc-200 transition-colors hover:text-white"
                >
                  {topic.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 sm:flex">
          <time className="whitespace-nowrap font-semibold text-zinc-400" dateTime={dateLabel}>
            {dateLabel}
          </time>
          <ThemeToggle />
          <Link
            href="/#newsletter"
            className="inline-flex items-center gap-1 rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-zinc-300 transition-colors hover:border-brand hover:text-white"
          >
            <Mail className="h-3 w-3" aria-hidden />
            Newsletter
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Navbar({
  headlines,
  trending,
  dateLabel,
}: {
  headlines: TickerHeadline[];
  trending: TrendingTopic[];
  dateLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 font-sans text-white">
      <div className="border-b border-zinc-800 bg-header">
        <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-4 py-3 sm:px-6">
          <Logo />

          <nav className="hidden items-center gap-4 lg:flex" aria-label="Categories">
            {navCategories.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-3">
            <SearchBar />
            <button
              type="button"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-zinc-700 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open ? (
          <div id="mobile-nav" className="border-t border-zinc-800 px-4 py-4 lg:hidden">
            <form action="/search" className="relative mb-4 md:hidden">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="search"
                name="q"
                placeholder="Search reviews, news…"
                className="w-full rounded-full border border-zinc-700 bg-zinc-900 py-2 pl-10 pr-4 text-sm outline-none focus:border-brand"
              />
            </form>
            <nav className="grid grid-cols-2 gap-2" aria-label="Mobile categories">
              {navCategories.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-zinc-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>

      <TrendingBar trending={trending} dateLabel={dateLabel} />

      <Suspense fallback={<TopTickerFallback />}>
        <TopTicker headlines={headlines} />
      </Suspense>
    </header>
  );
}
