import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { tubVsShower, tubChoosers, showerChoosers } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ConsultationCTA from "@/components/ConsultationCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";
import styles from "./compare.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Walk-In Tub or Walk-In Shower? How to Choose",
  description:
    "Walk-in tub or walk-in shower? A plain-language comparison for Edmonton seniors and families — getting in, bathing, walkers and wheelchairs, caregiver help, and space.",
  path: "/tub-or-shower",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Tub or Shower?", href: "/tub-or-shower" },
];

export default function TubOrShowerPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Tub or shower?"
        title="Walk-in tub or walk-in shower: which is right for you?"
        intro="Both make bathing far safer than a standard bathtub. The right choice comes down to how you like to bathe and how you move — today and in the years ahead."
        breadcrumbs={crumbs}
      />

      {/* Quick answer */}
      <section className="section section--sand" aria-labelledby="quick-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">The short answer</span>
            <h2 id="quick-heading">A quick way to decide</h2>
            <div className="rule" />
          </div>
          <div className="grid grid--2">
            <div className={`card card--accent ${styles.choice}`}>
              <div className={styles.choiceHead}>
                <span className="icon-badge" aria-hidden="true">
                  <Icon name="walk-in-tub" />
                </span>
                <h3>A walk-in tub may suit you if…</h3>
              </div>
              <ul className="checklist">
                {tubChoosers.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <Link href="/walk-in-bathtubs" className="btn btn--outline btn--block mt-2">
                Explore walk-in tubs
                <Icon name="arrow-right" width={20} height={20} />
              </Link>
            </div>
            <div className={`card card--accent ${styles.choice}`}>
              <div className={styles.choiceHead}>
                <span className="icon-badge" aria-hidden="true">
                  <Icon name="walk-in-shower" />
                </span>
                <h3>A walk-in shower may suit you if…</h3>
              </div>
              <ul className="checklist">
                {showerChoosers.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <Link href="/walk-in-showers" className="btn btn--outline btn--block mt-2">
                Explore walk-in showers
                <Icon name="arrow-right" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-side comparison */}
      <section className="section section--cream" aria-labelledby="compare-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Side by side</span>
            <h2 id="compare-heading">How they compare</h2>
            <div className="rule" />
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <caption className="sr-only">
                Walk-in tub compared with walk-in shower
              </caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Topic</span>
                  </th>
                  <th scope="col">
                    <span className={styles.colHead}>
                      <Icon name="walk-in-tub" width={28} height={28} aria-hidden="true" />
                      Walk-in tub
                    </span>
                  </th>
                  <th scope="col">
                    <span className={styles.colHead}>
                      <Icon name="walk-in-shower" width={28} height={28} aria-hidden="true" />
                      Walk-in shower
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tubVsShower.map((row) => (
                  <tr key={row.topic}>
                    <th scope="row">{row.topic}</th>
                    <td data-label="Walk-in tub">{row.tub}</td>
                    <td data-label="Walk-in shower">{row.shower}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What both have in common */}
      <section className="section section--band">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <span className="eyebrow">Either way</span>
            <h2>What you get with both</h2>
            <div className="rule" />
          </div>
          <div className="prose">
            <p>
              Whichever you choose, you get a low or level entry instead of a
              high tub wall, a place to sit, grab bars, a slip-resistant floor,
              a handheld shower, and anti-scald protection — installed by our
              own team.
            </p>
            <p>
              The same Alberta and federal programs may help with either one,
              including SHARP&apos;s no-monthly-payment loan and the Home
              Accessibility Tax Credit.{" "}
              <Link href="/financing">See funding programs</Link>.
            </p>
            <p>
              Still not sure? That is completely normal. At your free in-home
              consultation we look at your bathroom, talk about how you bathe
              now, and recommend what fits — with no pressure either way.
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading="Let us help you choose"
        text="Book a free, no-obligation in-home consultation. We will look at your bathroom and help you decide between a walk-in tub and a walk-in shower."
      />
    </>
  );
}
