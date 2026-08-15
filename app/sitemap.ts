import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "features/",
    "pricing/",
    "buy/",
    "download/",
    "contact/",
    "about/",
    "privacy/",
    "terms/",
  ];
  return paths.map((path) => ({
    url: `${SITE.url}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
