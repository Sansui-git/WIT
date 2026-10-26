import type { Metadata } from "next";
import { siteConfig } from "./site";

const baseUrl = siteConfig.url;

/** Social share image (1200×630) shown when a page is posted on Facebook, texted, etc. */
export const shareImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${siteConfig.companyName} — walk-in bathtubs installed in Edmonton`,
};

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
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage.url],
    },
  };
}
