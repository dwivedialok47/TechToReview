"use client";

import { useEffect, useState } from "react";
import type { ReviewTocItem } from "@/lib/content/types";

export function ArticleToc({ items }: { items: ReviewTocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.6] },
    );

    headings.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page">
      <p className="mb-2 text-[11px] font-extrabold uppercase tracking-wider text-zinc-500">
        On this page
      </p>
      <ol className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:block lg:space-y-1 lg:overflow-visible">
        {items.map((item) => {
          const current = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-semibold transition-colors lg:whitespace-normal ${
                  current
                    ? "bg-zinc-950 text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
