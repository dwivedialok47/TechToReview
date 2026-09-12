import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageShell eyebrow="The newsroom" title="About TechToReview">
      <div className="max-w-2xl space-y-4 text-sm leading-7 text-zinc-700">
        <p>
          TechToReview is an independent gadget newsroom. We review phones,
          laptops, audio, wearables, and games the way a buyer would: after
          days of real use, not a press-event demo.
        </p>
        <p id="contact">
          Tips and corrections: <a className="text-brand underline" href="mailto:hello@techtoreview.com">hello@techtoreview.com</a>
        </p>
        <p id="careers">
          Careers: we hire editors and lab testers on a rolling basis. Send a
          short note and two clips to the same inbox.
        </p>
      </div>
    </PageShell>
  );
}
