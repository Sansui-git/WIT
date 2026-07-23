import { siteConfig, serviceAreas, faqs } from "./site";

/**
 * Builders for schema.org JSON-LD structured data.
 * Only factual business information is included — no ratings, review counts,
 * awards, or other claims that cannot be substantiated.
 */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.companyName,
    legalName: siteConfig.legalName,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    areaServed: serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.regionCode,
      addressCountry: siteConfig.countryCode,
    },
    openingHoursSpecification: siteConfig.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    knowsAbout: [
      "Walk-in bathtubs",
      "Accessible bathing",
      "Bathroom safety for seniors",
      "Mobility and aging in place",
    ],
    slogan: siteConfig.tagline,
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  crumbs: { label: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${siteConfig.url}${c.href}`,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.companyName,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#business` },
  };
}
