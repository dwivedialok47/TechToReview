import { Navbar } from "@/components/Navbar";
import { mockTrending } from "@/lib/content/mock";
import { formatLongDate } from "@/lib/content/format";
import { ensureTickerHeadlines } from "@/lib/content/mock-ticker";
import { getTickerHeadlines } from "@/lib/content/queries";

export async function SiteHeader() {
  const headlines = await getTickerHeadlines().catch(() =>
    ensureTickerHeadlines([], 10),
  );

  return (
    <Navbar
      headlines={headlines}
      trending={mockTrending}
      dateLabel={formatLongDate()}
    />
  );
}
