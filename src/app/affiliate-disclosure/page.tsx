import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Affiliate Disclosure" };

export default function AffiliateDisclosurePage() {
  return (
    <PageShell eyebrow="Transparency" title="Affiliate Disclosure">
      <p className="max-w-2xl text-sm leading-7 text-zinc-700">
        Some product links may earn TechToReview a commission. That never
        changes a score, ranking, or verdict. If a deal post includes a
        partner link, we say so in the story.
      </p>
    </PageShell>
  );
}
