import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.companyName,
    short_name: "Walk-In Baths",
    description: siteConfig.shortDescription,
    start_url: "/",
    display: "browser",
    background_color: "#f5efe6",
    theme_color: "#1f3a5f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
