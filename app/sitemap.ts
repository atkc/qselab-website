import type { MetadataRoute } from "next";
import { researchThemes } from "@/content/research";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qselab.com";
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/news/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/publications/`, changeFrequency: "monthly", priority: 0.9 },
    ...researchThemes.map((theme) => ({
      url: `${baseUrl}/research/${theme.slug}/`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
