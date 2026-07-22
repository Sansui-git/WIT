import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig, serviceAreas, phoneLink, phoneDisplay } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ConsultationCTA from "@/components/ConsultationCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";
import styles from "./areas.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas",
  description:
    "We install walk-in bathtubs in Edmonton and surrounding communities including St. Albert, Sherwood Park, Spruce Grove, Leduc, Beaumont, Fort Saskatchewan, and more.",
  path: "/service-areas",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Service Areas", href: "/service-areas" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Service areas"
        title={`Serving ${siteConfig.city} and surrounding communities`}
        intro="We install walk-in bathtubs throughout the Edmonton area. If your community is on this list — or nearby — we would be glad to help."
        breadcrumbs={crumbs}
      />

      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Where we work</span>
            <h2>Communities we serve</h2>
            <div className="rule" />
          </div>
          <ul className={styles.areaGrid} aria-label="Service area communities">
            {serviceAreas.map((area) => (
              <li key={area} className={styles.area}>
                <Icon name="map-pin" width={20} height={20} aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>

          <div className={styles.note}>
            <span className="icon-badge" aria-hidden="true">
              <Icon name="phone" />
            </span>
            <div>
              <h3>Don&apos;t see your community?</h3>
              <p>
                This list isn&apos;t exhaustive. We serve many communities across
                the greater {siteConfig.city} region. If you are nearby, please
                call us at <a href={phoneLink}>{phoneDisplay}</a> and we will let
                you know right away whether we can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading="Serving your community with care"
        text="Request a free in-home consultation, or call to confirm we cover your area."
      />
    </>
  );
}
