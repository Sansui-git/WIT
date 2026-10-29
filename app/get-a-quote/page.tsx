import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import QuoteFlow from "@/components/QuoteFlow";

export const metadata: Metadata = pageMetadata({
  title: "Get an Instant Quote",
  description:
    "Answer a few quick questions to get an instant walk-in bathtub estimate for your Edmonton-area bathroom, sent straight to your inbox.",
  path: "/get-a-quote",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Get an Instant Quote", href: "/get-a-quote" },
];

export default function GetAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Instant quote"
        title="Get your instant quote"
        intro="Answer a few quick questions, see your estimate right away, and get a copy by email. Your price is confirmed at a free in-home visit."
        breadcrumbs={crumbs}
      />
      <section className="section section--sand">
        <div className="container">
          <QuoteFlow />
        </div>
      </section>
    </>
  );
}
