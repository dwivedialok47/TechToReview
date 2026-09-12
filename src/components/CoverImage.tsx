import Image from "next/image";

export function CoverImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "100vw"}
      priority={priority}
      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
    />
  );
}
