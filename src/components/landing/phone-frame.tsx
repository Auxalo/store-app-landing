import Image from "next/image";

/** A phone around one screenshot (390 x 844 CSS px, captured at 2x). */
export function PhoneFrame({
  src,
  alt,
  preload = false,
  sizes = "(min-width: 1024px) 280px, 62vw",
  className = "",
}: {
  src: string;
  alt: string;
  preload?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.4rem] border-[7px] border-zinc-900 bg-zinc-900 shadow-2xl shadow-green-900/20 ring-1 ring-black/10 dark:border-zinc-700 dark:shadow-black/50 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={780}
        height={1688}
        sizes={sizes}
        quality={85}
        preload={preload}
        className="block h-auto w-full rounded-[1.7rem]"
      />
    </div>
  );
}
