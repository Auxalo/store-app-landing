import { Landing } from "@/components/landing/landing";
import { en } from "@/content/en";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(en);

export default function Page() {
  return <Landing c={en} />;
}
