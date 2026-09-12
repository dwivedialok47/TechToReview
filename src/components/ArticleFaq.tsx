"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ReviewFaq, ReviewGotcha } from "@/lib/content/types";

export function FaqAccordion({ faqs }: { faqs: ReviewFaq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 bg-white">
      {faqs.map((faq, index) => {
        const expanded = open === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              aria-expanded={expanded}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-bold text-zinc-950"
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              {faq.question}
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
            {expanded ? (
              <p className="px-4 pb-4 text-sm leading-6 text-zinc-600">{faq.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function GotchaAccordion({ items }: { items: ReviewGotcha[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 bg-white">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.title}>
            <button
              type="button"
              aria-expanded={expanded}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-bold text-zinc-950"
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              {item.title}
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
            {expanded ? (
              <div className="space-y-2 px-4 pb-4 text-sm leading-6 text-zinc-600">
                <p>{item.problem}</p>
                <p>
                  <span className="font-bold text-zinc-950">Workaround: </span>
                  {item.workaround}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
