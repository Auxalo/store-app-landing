import type { Locale } from "@/config/site";

/** Names of the icons the page uses (see components/landing/icon.tsx). */
export type IconName =
  | "cart"
  | "book"
  | "box"
  | "truck"
  | "wallet"
  | "chart"
  | "printer"
  | "share"
  | "users"
  | "shield"
  | "wifi-off"
  | "download"
  | "smartphone"
  | "store"
  | "pill"
  | "shirt"
  | "plug"
  | "wrench"
  | "sparkles"
  | "wheat"
  | "layers"
  | "scan"
  | "refresh"
  | "zap";

export interface Shot {
  src: string;
  alt: string;
  caption: string;
}

export interface Plan {
  id: "m1" | "m6" | "m12";
  name: string;
  period: string;
  /** e.g. "প্রতি মাসে প্রায় ৳৫০০". Empty for the monthly plan. */
  per: string;
  badge?: string;
  save?: string;
  featured?: boolean;
}

/** Every word on the page, for one language. */
export interface Content {
  locale: Locale;
  ogLocale: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  nav: {
    features: string;
    how: string;
    pricing: string;
    faq: string;
    login: string;
    cta: string;
    ctaShort: string;
    switchLabel: string;
    switchTo: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    sub: string;
    cta: string;
    ctaSecondary: string;
    note: string;
    chips: { icon: IconName; label: string }[];
    shotAlt: { pos: string; dashboard: string };
  };
  install: {
    title: string;
    sub: string;
    steps: { title: string; body: string }[];
    platforms: { name: string; how: string }[];
    perks: { icon: IconName; label: string }[];
  };
  features: {
    title: string;
    sub: string;
    items: { icon: IconName; title: string; body: string }[];
  };
  showcase: {
    title: string;
    sub: string;
    desktopTitle: string;
    mobileTitle: string;
    desktop: Shot[];
    shots: Shot[];
  };
  offline: { title: string; body: string; points: string[] };
  who: {
    title: string;
    sub: string;
    items: { icon: IconName; name: string }[];
  };
  pricing: {
    title: string;
    sub: string;
    freeBanner: string;
    freeBannerSub: string;
    plans: Plan[];
    includesTitle: string;
    includes: string[];
    pay: string;
    cta: string;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  final: { title: string; sub: string; cta: string };
  footer: {
    tagline: string;
    product: string;
    contact: string;
    whatsapp: string;
    email: string;
    rights: string;
  };
  schema: { appDescription: string; featureList: string[] };
}
