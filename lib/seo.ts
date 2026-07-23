import type { Metadata } from "next";
import { siteConfig } from "./site";

const baseUrl = siteConfig.url;

interface PageMetaOptions {
  title: string;
  description: string;
  /** Path beginning with "/" — used for the canonical URL. */
  path: string;
}

/**
 * Build consistent, SEO-friendly metadata for a page.
 * Includes canonical URL, Open Graph, and Twitter tags.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetaOptions): Metadata {
  const url = `${baseUrl}${path}`;
  const fullTitle = `${title} | ${siteConfig.companyName}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.companyName,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
