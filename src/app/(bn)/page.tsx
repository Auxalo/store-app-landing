import { Landing } from "@/components/landing/landing";
import { bn } from "@/content/bn";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(bn);

export default function Page() {
  return <Landing c={bn} />;
}
