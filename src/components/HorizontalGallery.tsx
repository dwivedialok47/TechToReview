"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/lib/content/types";

type HorizontalGalleryProps = {
  images: GalleryImage[];
  productName?: string;
};

export function HorizontalGallery({ images, productName }: HorizontalGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const updateActive = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll<HTMLElement>("[data-gallery-card]"));
    if (!cards.length) return;

    const viewportCenter = scroller.scrollLeft + scroller.clientWidth / 2;
    let nearest = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const mid = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(mid - viewportCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });

    setActive(nearest);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    updateActive();
    scroller.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      scroller.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive, images.length]);

  const scrollByViewport = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollBy({
      left: direction * scroller.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelectorAll<HTMLElement>("[data-gallery-card]")[index];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  if (!images.length) return null;

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1"
        style={{ scrollSnapType: "x mandatory" }}
        role="region"
        aria-roledescription="carousel"
        aria-label={
          productName
            ? `Official press gallery for ${productName}`
            : "Official press gallery"
        }
      >
        {images.map((image, index) => (
          <figure
            key={image.id}
            data-gallery-card
            className="relative h-[340px] w-[min(88vw,40rem)] shrink-0 snap-center overflow-hidden rounded-2xl bg-zinc-200 sm:h-[380px] lg:h-[400px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              sizes="(min-width: 1024px) 640px, 88vw"
              priority={index === 0}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
              aria-hidden
            />
            <figcaption className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
              <span className="inline-flex max-w-full rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md sm:text-[11px]">
                {image.tag}
              </span>
              <p className="mt-1.5 line-clamp-2 text-sm font-medium leading-5 text-white sm:text-[15px]">
                {image.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={() => scrollByViewport(-1)}
            className="absolute left-2 top-[160px] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:bg-black/55 sm:left-3 sm:top-[180px] lg:top-[190px]"
            aria-label="Scroll gallery left"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollByViewport(1)}
            className="absolute right-2 top-[160px] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:bg-black/55 sm:right-3 sm:top-[180px] lg:top-[190px]"
            aria-label="Scroll gallery right"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </>
      ) : null}

      {images.length > 1 ? (
        <div
          className="mt-3 flex items-center justify-center gap-1.5"
          role="tablist"
          aria-label="Gallery pagination"
        >
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show gallery image ${index + 1} of ${images.length}`}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === active
                  ? "w-6 bg-brand"
                  : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
