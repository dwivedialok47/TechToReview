import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ScoreBadge } from "@/components/ScoreBadge";
import { getHomepageContent } from "@/lib/content/queries";

export const metadata: Metadata = { title: "Compare specs" };

export default async function ComparePage() {
  const { topPhones } = await getHomepageContent();

  return (
    <PageShell eyebrow="Tools" title="Quick specs comparison">
      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-zinc-50 text-xs uppercase tracking-wider text-zinc-500">
            <tr>
              <th className="px-4 py-3">Rank</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Score</th>
              <th className="px-4 py-3">Pros</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {topPhones.map((phone, index) => (
              <tr key={phone.id}>
                <td className="px-4 py-3 font-black">{index + 1}</td>
                <td className="px-4 py-3 font-semibold">{phone.name}</td>
                <td className="px-4 py-3">
                  <ScoreBadge score={phone.score} compact />
                </td>
                <td className="px-4 py-3 text-zinc-600">{phone.pros.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
