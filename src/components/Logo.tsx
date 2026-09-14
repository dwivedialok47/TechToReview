import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-[3px] text-white"
      aria-label="TechToReview home"
    >
      <span className="font-sans text-lg font-black leading-none tracking-tight sm:text-xl">
        TECH
      </span>
      <span className="inline-flex items-center rounded-[4px] bg-brand px-1.5 py-[3px] font-sans text-[11px] font-black leading-none tracking-wider text-white sm:text-xs">
        TO
      </span>
      <span className="font-sans text-lg font-black leading-none tracking-tight sm:text-xl">
        REVIEW
      </span>
    </Link>
  );
}
