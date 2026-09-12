import { createClient } from "@/lib/supabase/server";
import { readSupabasePublicEnv } from "@/lib/supabase/env";
import { fallbackPressGallery } from "@/lib/content/mock-gallery";
import type { GalleryImage } from "@/lib/content/types";

function asRecord(value: unknown): Record<string, unknown> | null {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return null;
}

function asString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

export function normalizeGalleryImages(raw: unknown, prefix = "cms"): GalleryImage[] {
  if (!Array.isArray(raw)) return [];

  return raw.flatMap((item, index) => {
    if (typeof item === "string") {
      const src = item.trim();
      if (!src) return [];
      return [
        {
          id: `${prefix}-${index}`,
          src,
          alt: "Official product press image",
          caption: "Official press asset",
          tag: "Official Press Gallery",
        },
      ];
    }

    const record = asRecord(item);
    if (!record) return [];
    const src =
      asString(record.src) ??
      asString(record.url) ??
      asString(record.image_url) ??
      asString(record.imageUrl);
    if (!src) return [];

    return [
      {
        id: asString(record.id) ?? `${prefix}-${index}`,
        src,
        alt: asString(record.alt) ?? "Official product press image",
        caption: asString(record.caption) ?? "Official press asset",
        tag:
          asString(record.tag) ??
          asString(record.visual_tag) ??
          asString(record.visualTag) ??
          "Official Press Gallery",
      },
    ];
  });
}

function productSlugFromReview(slug: string) {
  return slug.replace(/-review$/, "").replace(/-hands-on$/, "");
}

function specsGallery(specs: unknown): GalleryImage[] {
  const record = asRecord(specs);
  if (!record) return [];
  return normalizeGalleryImages(
    record.gallery ?? record.press_images ?? record.pressImages ?? record.media,
    "product",
  );
}

/** Known Apple Newsroom CDN stills for shipping Apple products. */
const APPLE_NEWSROOM_CDN: Record<string, GalleryImage[]> = {
  "iphone-16-pro-max": [
    {
      id: "apple-16pm-hero",
      src: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_big.jpg.large.jpg",
      alt: "Apple Newsroom hero of iPhone 16 Pro and iPhone 16 Pro Max",
      caption: "Apple Newsroom: iPhone 16 Pro lineup in Desert and Natural Titanium.",
      tag: "Official Press Gallery",
    },
    {
      id: "apple-16pm-camera",
      src: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-camera-system-240909_big.jpg.large.jpg",
      alt: "Apple Newsroom camera system still for iPhone 16 Pro",
      caption: "Apple Newsroom: Fusion camera system and Camera Control.",
      tag: "Camera Module",
    },
  ],
  "apple-watch-ultra-3": [
    {
      id: "apple-ultra-hero",
      src: "https://www.apple.com/newsroom/images/2024/09/introducing-apple-watch-series-10/article/Apple-Watch-Series-10-hero-240909_big.jpg.large.jpg",
      alt: "Apple Newsroom wearable hero still used as an Ultra-class press reference",
      caption: "Apple Newsroom wearable still — titanium, Action button, trail strap.",
      tag: "Official Press Gallery",
    },
  ],
};

async function probeCdnUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(1500),
      next: { revalidate: 86400 },
    });
    if (response.ok) return true;

    const fallback = await fetch(url, {
      method: "GET",
      headers: { Range: "bytes=0-0" },
      redirect: "follow",
      signal: AbortSignal.timeout(1500),
      next: { revalidate: 86400 },
    });
    return fallback.ok;
  } catch {
    return false;
  }
}

async function fetchAppleNewsroomAssets(slug: string): Promise<GalleryImage[]> {
  const candidates = APPLE_NEWSROOM_CDN[productSlugFromReview(slug)] ?? [];
  if (!candidates.length) return [];

  const live = await Promise.all(
    candidates.map(async (item) => ((await probeCdnUrl(item.src)) ? item : null)),
  );
  return live.filter((item): item is GalleryImage => item != null);
}

async function fetchSupabasePressAssets(
  slug: string,
  productName: string,
): Promise<GalleryImage[]> {
  if (!readSupabasePublicEnv()) return [];

  try {
    const supabase = await createClient();
    const productSlug = productSlugFromReview(slug);
    const { data, error } = await supabase
      .from("products")
      .select("slug, name, image_url, specs")
      .eq("status", "published")
      .in("slug", [productSlug, slug])
      .limit(1)
      .maybeSingle();

    if (error || !data) return [];

    const fromSpecs = specsGallery(data.specs);
    if (fromSpecs.length) return fromSpecs;

    if (data.image_url) {
      return [
        {
          id: "product-hero",
          src: data.image_url,
          alt: `${data.name || productName} official product image`,
          caption: `${data.name || productName} — official product asset.`,
          tag: "Official Press Gallery",
        },
      ];
    }
  } catch {
    return [];
  }

  return [];
}

export async function resolveReviewGallery(input: {
  slug: string;
  productName: string;
  featuredImage: string;
  cmsGallery?: unknown;
}): Promise<GalleryImage[]> {
  const cms = normalizeGalleryImages(input.cmsGallery, "article");
  if (cms.length >= 3) return cms;

  const [supabaseAssets, appleAssets] = await Promise.all([
    fetchSupabasePressAssets(input.slug, input.productName),
    fetchAppleNewsroomAssets(input.slug),
  ]);

  const fallback = fallbackPressGallery(
    input.productName,
    input.featuredImage,
    input.slug,
  );

  const merged = [...cms, ...supabaseAssets, ...appleAssets, ...fallback];
  const seen = new Set<string>();
  return merged.filter((item) => {
    if (seen.has(item.src)) return false;
    seen.add(item.src);
    return true;
  });
}
