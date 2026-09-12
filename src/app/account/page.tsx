import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { getOptionalUser } from "@/lib/content/queries";

export const metadata: Metadata = { title: "Account" };

export default async function AccountPage() {
  const user = await getOptionalUser();

  return (
    <PageShell eyebrow="Account" title="Your profile">
      {user ? (
        <p className="text-sm text-zinc-700">
          Signed in as <strong>{user.fullName ?? user.email}</strong>.
        </p>
      ) : (
        <p className="text-sm text-zinc-700">
          You are browsing as a guest.{" "}
          <Link href="/login" className="font-semibold text-brand hover:underline">
            Sign in
          </Link>{" "}
          to save reviews and comment.
        </p>
      )}
    </PageShell>
  );
}
