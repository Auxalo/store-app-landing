import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

const languages = {
  "bn-BD": `${SITE_URL}/`,
  en: `${SITE_URL}/en`,
  "x-default": `${SITE_URL}/`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
