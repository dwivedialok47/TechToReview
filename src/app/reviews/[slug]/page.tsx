import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { reviewMetaTitle } from "@/lib/content/format";
import { getKnownReviewSlugs, getLongformReview } from "@/lib/content/reviews";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getKnownReviewSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const review = await getLongformReview(params.slug);
  if (!review) {
    return { title: "Review" };
  }

  const title = reviewMetaTitle(review.productName);

  return {
    title,
    description: review.excerpt,
    authors: [{ name: review.author.name }],
    openGraph: {
      title,
      description: review.excerpt,
      type: "article",
      publishedTime: review.publishedAt,
      modifiedTime: review.updatedAt,
      authors: [review.author.name],
      images: [
        {
          url: review.featuredImage,
          alt: review.imageCaption,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: review.excerpt,
      images: [review.featuredImage],
    },
  };
}

export default async function ReviewPage({ params }: Props) {
  const review = await getLongformReview(params.slug);
  if (!review) notFound();

  return <ArticleLayout review={review} />;
}
