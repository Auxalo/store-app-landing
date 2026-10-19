import Image from "next/image";

/** A browser window around a desktop screenshot (1280 x 800 CSS px, captured at 1.5x). */
export function BrowserFrame({
  src,
  alt,
  sizes = "(min-width: 1024px) 560px, 92vw",
  className = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-card shadow-2xl shadow-green-900/15 dark:shadow-black/50 ${className}`}
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-3 border-b border-line bg-tint px-4 py-2.5"
      >
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-green-500" />
        </span>
        <span className="flex-1 truncate rounded-md bg-bg px-3 py-1 text-center text-xs text-muted">
          app.hishab.trade
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1200}
        sizes={sizes}
        quality={85}
        className="block h-auto w-full"
      />
    </div>
  );
}
