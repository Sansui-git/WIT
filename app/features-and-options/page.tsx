import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { features } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ConsultationCTA from "@/components/ConsultationCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "Features & Options",
  description:
    "Safety and comfort features available on walk-in bathtubs — low thresholds, watertight doors, built-in seats, grab bars, anti-scald controls, hydrotherapy jets, and more.",
  path: "/features-and-options",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Features & Options", href: "/features-and-options" },
];

// Group features for clearer scanning.
const safetyFeatures = features.slice(0, 6);
const comfortFeatures = features.slice(6);

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Features & options"
        title="Safety features and comforts you can choose from"
        intro="Every walk-in bathtub combines core safety features with comfort options you can add. Here is what is available and what each one does — in plain language."
        breadcrumbs={crumbs}
      />

      {/* Safety features */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Built-in safety</span>
            <h2>Safety features</h2>
            <div className="rule" />
            <p className="lead">
              These features are the reason a walk-in tub is so much safer than a
              standard bathtub.
            </p>
          </div>
          <div className="grid grid--3">
            {safetyFeatures.map((f) => (
              <div key={f.title} className="card card--accent">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort options */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Add-on comforts</span>
            <h2>Comfort &amp; therapy options</h2>
            <div className="rule" />
            <p className="lead">
              Choose the comforts that matter most to you. We will explain each
              option during your consultation so you only pay for what you will
              use.
            </p>
          </div>
          <div className="grid grid--3">
            {comfortFeatures.map((f) => (
              <div key={f.title} className="card">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidance note */}
      <section className="section section--band">
        <div className="container container--narrow text-center">
          <span className="icon-badge" aria-hidden="true" style={{ marginInline: "auto" }}>
            <Icon name="chat" />
          </span>
          <h2>Not sure which options you need?</h2>
          <p className="lead">
            You do not have to figure this out on your own. During a free in-home
            consultation, we look at your bathroom and talk through your needs,
            then recommend the features that make the most sense for you — with no
            pressure and no obligation.
          </p>
        </div>
      </section>

      <ConsultationCTA
        heading="Let's find the right features for you"
        text="Book a free in-home consultation and we will walk you through your options in person."
      />
    </>
  );
}
