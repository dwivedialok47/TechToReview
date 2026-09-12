import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <PageShell eyebrow="Legal" title="Privacy Policy">
      <div className="max-w-2xl space-y-4 text-sm leading-7 text-zinc-700">
        <p>
          We collect the email you submit for newsletters and the account
          details you create with Supabase Auth. We do not sell personal data.
        </p>
        <p id="terms">
          Terms of use: do not scrape the site in a way that degrades the
          service. Quotes of reviews should credit TechToReview and link back.
        </p>
        <p id="cookies">
          Cookie settings: essential cookies keep you signed in. Analytics
          cookies are optional and can be refused in your browser.
        </p>
      </div>
    </PageShell>
  );
}
