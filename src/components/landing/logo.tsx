import { getImageProps } from "next/image";
import { BRAND } from "@/config/site";

/**
 * The horizontal logo. A <picture> picks the dark-mode file by the visitor's system setting, so
 * only one of the two images is ever downloaded.
 */
export function Logo({ height = 36 }: { height?: number }) {
  const width = Math.round((height * 2000) / 373);
  const common = { alt: BRAND.en, width, height, quality: 85 };
  const { props: light } = getImageProps({
    ...common,
    src: "/brand/logo-horizontal.png",
    fetchPriority: "high",
  });
  const { props: dark } = getImageProps({
    ...common,
    src: "/brand/logo-horizontal-on-dark.png",
  });
  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet={dark.srcSet} />
      <img {...light} alt={BRAND.en} style={{ height, width: "auto" }} />
    </picture>
  );
}
