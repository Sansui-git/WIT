import type { MetadataRoute } from "next";
import { siteConfig, primaryNav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  // Build from the navigation, plus the pages not in the primary nav.
  const paths = [
    ...primaryNav.map((n) => n.href),
    "/request-a-consultation",
    "/privacy-policy",
  ];

  // Date of the last real content update. Bump it when pages change.
  const lastModified = new Date("2026-10-26");

  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/request-a-consultation"
          ? 0.9
          : 0.7,
  }));
}
