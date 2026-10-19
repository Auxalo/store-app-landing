import type { Metadata } from "next";
import { APP_URL, BRAND, PRICES, SITE_URL } from "@/config/site";
import type { Content } from "@/content/types";

const pathFor = (c: Content) => (c.locale === "bn" ? "/" : "/en");

/** Title, description, canonical, language alternates and share cards for one language. */
export function buildMetadata(c: Content): Metadata {
  const path = pathFor(c);
  const image = `/og/og-${c.locale}.png`;
  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: c.meta.title },
    description: c.meta.description,
    keywords: c.meta.keywords,
    applicationName: BRAND.en,
    authors: [{ name: BRAND.en, url: SITE_URL }],
    creator: BRAND.en,
    publisher: BRAND.en,
    alternates: {
      canonical: path,
      languages: { "bn-BD": "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: c.locale === "bn" ? BRAND.bn : BRAND.en,
      title: c.meta.title,
      description: c.meta.description,
      locale: c.ogLocale,
      alternateLocale: c.locale === "bn" ? ["en_US"] : ["bn_BD"],
      images: [{ url: image, width: 1200, height: 630, alt: c.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
      images: [{ url: image, alt: c.meta.ogAlt }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { telephone: false },
    category: "business",
  };
}

/** Structured data: what the page is, who makes it, what it costs, and its questions and answers. */
export function buildJsonLd(c: Content) {
  const url = `${SITE_URL}${pathFor(c)}`;
  const plans = [
    { id: "m1", price: PRICES.m1 },
    { id: "m6", price: PRICES.m6 },
    { id: "m12", price: PRICES.m12 },
  ] as const;
  const names = Object.fromEntries(c.pricing.plans.map((p) => [p.id, p.name]));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: BRAND.en,
        alternateName: BRAND.bn,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/brand/icon-512.png`,
          width: 512,
          height: 512,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND.en,
        alternateName: BRAND.bn,
        inLanguage: ["bn-BD", "en"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: c.meta.title,
        description: c.meta.description,
        inLanguage: c.locale === "bn" ? "bn-BD" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#app` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: BRAND.en,
        alternateName: BRAND.bn,
        description: c.schema.appDescription,
        url: APP_URL,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Point of sale and inventory",
        operatingSystem: "Web, Android, iOS, Windows, macOS",
        browserRequirements: "Requires a modern browser (Chrome, Edge, Safari)",
        inLanguage: ["bn-BD", "en"],
        featureList: c.schema.featureList,
        image: `${SITE_URL}/brand/icon-512.png`,
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: plans.map((p) => ({
          "@type": "Offer",
          name: names[p.id],
          price: p.price,
          priceCurrency: "BDT",
          url: `${url}#pricing`,
          availability: "https://schema.org/InStock",
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: c.locale === "bn" ? "bn-BD" : "en",
        mainEntity: c.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}
