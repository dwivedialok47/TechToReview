import { scoreLabel } from "@/lib/content/format";

function scoreTone(score: number): string {
  if (score >= 9) return "bg-emerald-600 text-white";
  if (score >= 8) return "bg-lime-600 text-white";
  if (score >= 7) return "bg-amber-500 text-zinc-950";
  return "bg-orange-600 text-white";
}

export function ScoreBadge({
  score,
  compact = false,
}: {
  score: number;
  compact?: boolean;
}) {
  const value = score.toFixed(1);
  const label = scoreLabel(score);

  if (compact) {
    return (
      <span
        className={`inline-flex min-w-10 items-center justify-center rounded px-1.5 py-0.5 text-xs font-bold tabular-nums ${scoreTone(score)}`}
      >
        {value}
      </span>
    );
  }

  return (
    <div
      className={`flex shrink-0 flex-col items-center justify-center rounded-md px-2.5 py-1.5 text-center shadow-sm ${scoreTone(score)}`}
    >
      <span className="text-lg font-black leading-none tabular-nums">{value}</span>
      <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

export function StarRatingBadge({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-zinc-950 px-2 py-0.5 text-xs font-semibold text-white">
      {rating.toFixed(1)} / 5
      <span className="text-amber-400" aria-hidden>
        ★
      </span>
    </span>
  );
}
