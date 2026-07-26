import type { MetadataRoute } from "next";

import { getReleases } from "@/features/releases/github-releases";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["", "/download", "/changelog", "/docs", "/privacy", "/terms"];
  const staticRoutes: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/changelog" ? "daily" : "monthly",
    priority: path === "" ? 1 : path === "/download" ? 0.9 : 0.7,
  }));
  const { releases } = await getReleases();
  return [
    ...staticRoutes,
    ...releases.map((release) => ({
      url: `${site.url}/changelog/${encodeURIComponent(release.tag)}`,
      lastModified: new Date(release.publishedAt),
      changeFrequency: "never" as const,
      priority: 0.6,
    })),
  ];
}
