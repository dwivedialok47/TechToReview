import type { ArticleBadge } from "@/lib/content/types";

const styles: Record<ArticleBadge, string> = {
  REVIEW: "bg-brand text-white",
  "HANDS ON": "bg-amber-500 text-zinc-950",
  BREAKING: "bg-rose-600 text-white",
  GUIDE: "bg-sky-600 text-white",
  NEWS: "bg-zinc-800 text-white",
  DEAL: "bg-emerald-600 text-white",
};

export function Badge({
  label,
  className = "",
}: {
  label: ArticleBadge;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${styles[label]} ${className}`}
    >
      {label}
    </span>
  );
}
