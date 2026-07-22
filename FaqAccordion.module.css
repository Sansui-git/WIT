import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { faqs, phoneLink, phoneDisplay } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import ConsultationCTA from "@/components/ConsultationCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about walk-in bathtubs — how they work, who they are for, fit, installation, cost, financing, and getting started in the Edmonton area.",
  path: "/faq",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Frequently Asked Questions", href: "/faq" },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema()} />
      <PageHero
        eyebrow="Frequently asked questions"
        title="Your questions, answered clearly"
        intro="Here are the questions we hear most often. If yours isn't here, please call us — we are always happy to help."
        breadcrumbs={crumbs}
      />

      <section className="section section--sand">
        <div className="container">
          <FaqAccordion items={faqs} defaultOpen={-1} />

          <div className="text-center mt-3">
            <p className="lead">Still have a question?</p>
            <div className="btn-row mt-1" style={{ justifyContent: "center" }}>
              <a href={phoneLink} className="btn btn--navy btn--lg">
                <Icon name="phone" width={22} height={22} />
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
