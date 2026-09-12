import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Editorial Guidelines" };

export default function EditorialGuidelinesPage() {
  return (
    <PageShell eyebrow="Standards" title="Editorial Guidelines">
      <div className="max-w-2xl space-y-4 text-sm leading-7 text-zinc-700">
        <p>
          Scores are assigned by the reviewing editor after a lab checklist.
          Brands do not see scores before publication. Review units are
          purchased when possible; loans are disclosed in the story.
        </p>
        <p>
          News and hands-on pieces are labeled separately from scored reviews.
          We correct factual errors in-line and note the update at the top of
          the story.
        </p>
      </div>
    </PageShell>
  );
}
