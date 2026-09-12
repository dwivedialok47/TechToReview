import { HeroFeatured } from "@/components/HeroFeatured";
import { LatestReviews } from "@/components/LatestReviews";
import { NewsFeed } from "@/components/NewsFeed";
import { Sidebar } from "@/components/Sidebar";
import { TopFiveHub } from "@/components/TopFiveHub";
import { getHomepageContent, getTopFiveGuides } from "@/lib/content/queries";

export const revalidate = 60;

export default async function Home({
  searchParams,
}: {
  searchParams?: { type?: string };
}) {
  const [{ hero, reviews, feed, topPhones }, guides] = await Promise.all([
    getHomepageContent(),
    getTopFiveGuides(),
  ]);

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-6 font-sans sm:px-6">
      <HeroFeatured articles={hero} />
      <LatestReviews products={reviews} />
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-10">
        <div className="lg:col-span-7">
          <NewsFeed articles={feed} initialType={searchParams?.type} />
        </div>
        <div className="lg:col-span-3">
          <Sidebar phones={topPhones} />
        </div>
      </div>
      <TopFiveHub guides={guides} />
    </main>
  );
}
