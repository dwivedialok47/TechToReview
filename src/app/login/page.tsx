import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <PageShell eyebrow="Account" title="Sign in">
      <form className="max-w-sm space-y-3 rounded-lg border border-zinc-200 bg-white p-5">
        <label className="block text-sm font-semibold text-zinc-800">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-brand"
          />
        </label>
        <label className="block text-sm font-semibold text-zinc-800">
          Password
          <input
            type="password"
            name="password"
            required
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-brand"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-md bg-zinc-950 px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-brand"
        >
          Continue
        </button>
        <p className="text-xs text-zinc-500">
          Auth is wired through Supabase. This form is the profile entry point
          until the full sign-in flow is enabled.
        </p>
      </form>
    </PageShell>
  );
}
