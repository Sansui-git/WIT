import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import {
  financingPoints,
  fundingPrograms,
  fundingCheckedDate,
  pricing,
  showerPriceLabel,
  phoneLink,
  phoneDisplay,
} from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ConsultationCTA from "@/components/ConsultationCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";
import styles from "./financing.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Financing & Funding",
  description:
    "Ways to pay for a walk-in bathtub or walk-in shower in Alberta: a clear written quote, options to spread the cost, and help with SHARP, the Home Accessibility Tax Credit, and RAMP.",
  path: "/financing",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Financing & Funding", href: "/financing" },
];

export default function FinancingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Financing & funding"
        title="Making a safer bathroom fit your budget"
        intro="A walk-in bathtub or shower is an investment in safety and independence. We keep pricing clear, talk through ways to spread the cost, and help you find out which Alberta and federal programs may lower it."
        breadcrumbs={crumbs}
      />

      <section className="section section--sand">
        <div className="container">
          <div className="grid grid--2">
            {financingPoints.map((p) => (
              <div key={p.title} className={`card card--accent ${styles.point}`}>
                <span className="icon-badge" aria-hidden="true">
                  <Icon name={p.icon} />
                </span>
                <div>
                  <h2 className={styles.pointTitle}>{p.title}</h2>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding programs */}
      <section className="section section--cream" aria-labelledby="programs-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Programs that can help</span>
            <h2 id="programs-heading">Alberta and federal funding for walk-in tubs and showers</h2>
            <div className="rule" />
            <p className="lead">
              Many Alberta seniors combine these programs. We are glad to help
              you work out which ones may apply and what paperwork you need.
            </p>
          </div>

          <div className={styles.programs}>
            {fundingPrograms.map((prog) => (
              <article key={prog.short} className={`card ${styles.program}`}>
                <div className={styles.programHead}>
                  <span className="icon-badge" aria-hidden="true">
                    <Icon name={prog.icon} />
                  </span>
                  <div>
                    <p className={styles.kind}>{prog.kind}</p>
                    <h3 className={styles.programName}>
                      {prog.name} <span className={styles.abbr}>({prog.short})</span>
                    </h3>
                  </div>
                </div>
                <p>{prog.summary}</p>
                <ul className="checklist mt-1">
                  {prog.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <a
                  href={prog.url}
                  className={styles.official}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official {prog.short} details
                  <Icon name="arrow-right" width={18} height={18} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </article>
            ))}
          </div>

          <p className={styles.disclaimer}>
            Program details were checked against the official government pages
            in {fundingCheckedDate}. Rules, rates, and income limits can change,
            and each program makes its own eligibility decisions, so please
            confirm with the program directly. We are not tax advisors; for the
            tax credit, ask your accountant or tax preparer.
          </p>
        </div>
      </section>

      {/* Pricing, plainly */}
      <section className="section section--band">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <span className="eyebrow">Honest and clear</span>
            <h2>No surprises, no pressure</h2>
            <div className="rule" />
          </div>
          <div className="prose">
            <p>
              Complete, professionally installed walk-in tub projects start
              from <strong>{pricing.startingPrice}</strong>. Because every
              bathroom and every tub is different, your final price depends on
              the model you choose, the options you add, and the work your
              bathroom needs.
            </p>
            <p>
              Walk-in showers and tub-to-shower conversions are{" "}
              <strong>{showerPriceLabel}</strong>. The size of the space, the
              type of entry, and the work your bathroom needs all make a
              difference.
            </p>
            <p>
              After a free in-home consultation, we give you a clear, written
              quote for your specific situation, so you know exactly what you
              are getting and what it costs before you decide anything. There is
              no obligation, and you are welcome to take your time and talk it
              over with family.
            </p>
          </div>
          <div className="btn-row mt-3" style={{ justifyContent: "center" }}>
            <a href={phoneLink} className="btn btn--navy btn--lg">
              <Icon name="phone" width={22} height={22} />
              Call {phoneDisplay}
            </a>
            <Link href="/request-a-consultation" className="btn btn--outline btn--lg">
              Request a free quote
            </Link>
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading="Get a clear quote for your home"
        text="Request a free consultation and we will prepare a written quote with no obligation, and help you look into funding programs."
      />
    </>
  );
}
