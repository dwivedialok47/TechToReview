import Link from "next/link";
import { AtSign, Play, Rss, Share2, Users } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navCategories } from "@/lib/content/mock";

const aboutLinks = [
  { label: "About TechToReview", href: "/about" },
  { label: "Editorial Guidelines", href: "/editorial-guidelines" },
  { label: "Contact", href: "/about#contact" },
  { label: "Careers", href: "/about#careers" },
];

const legalLinks = [
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/privacy#terms" },
  { label: "Cookie Settings", href: "/privacy#cookies" },
];

const social = [
  { label: "X / Twitter", href: "https://x.com", icon: Share2 },
  { label: "YouTube", href: "https://youtube.com", icon: Play },
  { label: "Instagram", href: "https://instagram.com", icon: AtSign },
  { label: "Facebook", href: "https://facebook.com", icon: Users },
  { label: "RSS", href: "/rss.xml", icon: Rss },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-header font-sans text-zinc-300">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Independent reviews, breaking gadget news, and buying guides from
            the TechToReview lab. We buy the products we test.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-white">
            Categories
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {navCategories.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-white">
            About TechToReview
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {aboutLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-white">
            Policies
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-3">
            {social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="rounded-full border border-zinc-700 p-2 text-zinc-300 transition-all hover:border-brand hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-4 py-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} TechToReview. All rights reserved.</p>
          <p>Scores are out of 10. Stars are out of 5.</p>
        </div>
      </div>
    </footer>
  );
}
