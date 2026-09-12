import { Navbar } from "@/components/Navbar";
import { mockTrending } from "@/lib/content/mock";
import { formatLongDate } from "@/lib/content/format";
import { ensureTickerHeadlines } from "@/lib/content/mock-ticker";
import { getOptionalUser, getTickerHeadlines } from "@/lib/content/queries";

export async function SiteHeader() {
  const [user, headlines] = await Promise.all([
    getOptionalUser(),
    getTickerHeadlines().catch(() => ensureTickerHeadlines([], 10)),
  ]);

  return (
    <Navbar
      user={user}
      headlines={headlines}
      trending={mockTrending}
      dateLabel={formatLongDate()}
    />
  );
}
