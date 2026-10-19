import {
  BookOpenText,
  Boxes,
  ChartNoAxesCombined,
  Download,
  Layers,
  Pill,
  Plug,
  Printer,
  RefreshCw,
  ScanBarcode,
  Share2,
  ShieldCheck,
  Shirt,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Truck,
  Users,
  Wallet,
  Wheat,
  WifiOff,
  Wrench,
  Zap,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { IconName } from "@/content/types";

const ICONS: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  cart: ShoppingCart,
  book: BookOpenText,
  box: Boxes,
  truck: Truck,
  wallet: Wallet,
  chart: ChartNoAxesCombined,
  printer: Printer,
  share: Share2,
  users: Users,
  shield: ShieldCheck,
  "wifi-off": WifiOff,
  download: Download,
  smartphone: Smartphone,
  store: Store,
  pill: Pill,
  shirt: Shirt,
  plug: Plug,
  wrench: Wrench,
  sparkles: Sparkles,
  wheat: Wheat,
  layers: Layers,
  scan: ScanBarcode,
  refresh: RefreshCw,
  zap: Zap,
};

/** Decorative: every icon sits next to text, so it is hidden from screen readers. */
export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Glyph = ICONS[name];
  return <Glyph aria-hidden="true" className={className} strokeWidth={1.75} />;
}
