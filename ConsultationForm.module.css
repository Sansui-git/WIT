import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { financingPoints, phoneLink, phoneDisplay } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ConsultationCTA from "@/components/ConsultationCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "Financing",
  description:
    "Ways to make a walk-in bathtub fit your budget. We provide a clear, written quote with no obligation and can discuss options to spread the cost over time.",
  path: "/financing",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Financing", href: "/financing" },
];

export default function FinancingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Financing"
        title="Making a safer bathroom fit your budget"
        intro="A walk-in bathtub is an investment in safety and independence. We keep pricing clear and can talk through options to help it fit comfortably within your budget."
        breadcrumbs={crumbs}
      />

      <section className="section section--sand">
        <div className="container">
          <div className="grid grid--2">
            {financingPoints.map((p) => (
              <div key={p.title} className="card card--accent">
                <h2 style={{ fontSize: "var(--fs-h4)", fontFamily: "var(--font-serif)" }}>
                  {p.title}
                </h2>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency note */}
      <section className="section section--band">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <span className="eyebrow">Honest and clear</span>
            <h2>No surprises, no pressure</h2>
            <div className="rule" />
          </div>
          <div className="prose">
            <p>
              Because every bathroom and every walk-in tub is different, we do not
              publish one-size-fits-all prices — that would not be fair or
              accurate. Instead, after a free in-home consultation, we give you a
              clear, written quote for your specific situation, so you know
              exactly what you are getting and what it costs before you decide
              anything.
            </p>
            <p>
              Depending on your circumstances, other funding or assistance
              programs may help with accessibility improvements. We are glad to
              point you toward what to look into, and we always recommend
              confirming the details directly with the relevant program.
            </p>
          </div>
          <div className="text-center mt-3">
            <a href={phoneLink} className="btn btn--navy btn--lg">
              <Icon name="phone" width={22} height={22} />
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading="Get a clear quote for your home"
        text="Request a free consultation and we will prepare a written quote with no obligation."
      />
    </>
  );
}
