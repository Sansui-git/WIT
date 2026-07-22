import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { localBusinessSchema, websiteSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.companyName} | Walk-In Bathtubs in Edmonton`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.companyName,
  authors: [{ name: siteConfig.legalName }],
  keywords: [
    "walk-in bathtubs Edmonton",
    "walk-in tubs for seniors",
    "accessible bathtub Edmonton",
    "senior bathroom safety",
    "walk-in tub installation Alberta",
    "mobility bathtub",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.companyName,
    title: `${siteConfig.companyName} | Walk-In Bathtubs in Edmonton`,
    description: siteConfig.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#1f3a5f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <body>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
