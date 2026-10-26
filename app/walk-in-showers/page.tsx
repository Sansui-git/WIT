import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import {
  showerProducts,
  showerFeatures,
  pricing,
  showerPriceLabel,
  siteImages,
  phoneLink,
  phoneDisplay,
} from "@/lib/site";
import Icon from "@/components/Icon";
import ImageSlot from "@/components/ImageSlot";
import PageHero from "@/components/PageHero";
import ConsultationCTA from "@/components/ConsultationCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";
import styles from "./showers.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Walk-In Showers & Tub-to-Shower Conversions",
  description:
    "Walk-in showers for seniors in Edmonton — tub-to-shower conversions, low-threshold and curbless roll-in showers, with seats, grab bars, and slip-resistant floors. Alberta funding may help.",
  path: "/walk-in-showers",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Walk-In Showers", href: "/walk-in-showers" },
];

export default function WalkInShowersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Walk-in showers"
        title="Walk-in showers and tub-to-shower conversions"
        intro="Swap a hard-to-use bathtub for a shower you can simply walk into — with a low or level entry, a seat, grab bars, and a handheld shower, all professionally installed."
        breadcrumbs={crumbs}
      />

      {/* Why a walk-in shower */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The basics</span>
            <h2>Why choose a walk-in shower?</h2>
            <div className="rule" />
          </div>
          <div className="grid grid--2">
            <div className="prose">
              <p>
                For many people the hardest part of bathing is the tub wall:
                lifting a leg high over the side while standing on a wet,
                slippery surface. A walk-in shower takes that wall away.
              </p>
              <p>
                Instead, you step over a <strong>low threshold</strong> — or,
                with a <strong>curbless shower</strong>, walk or roll straight
                in. A <strong>shower seat</strong>,{" "}
                <strong>grab bars</strong>, a <strong>handheld shower</strong>,
                and a <strong>slip-resistant floor</strong> make it safe to
                shower sitting or standing.
              </p>
              <p>
                Most of our shower projects are{" "}
                <strong>tub-to-shower conversions</strong>: we take out the old
                bathtub and build the new shower in the same space, so the rest
                of your bathroom stays as it is.
              </p>
            </div>
            <ul className="checklist" aria-label="Key walk-in shower features">
              <li>Low step-in or curbless, zero-threshold entry</li>
              <li>Built-in bench or fold-down shower seat</li>
              <li>Securely mounted grab bars</li>
              <li>Slip-resistant shower floor</li>
              <li>Handheld shower on an adjustable slide bar</li>
              <li>Anti-scald temperature control</li>
              <li>Room for a walker, wheelchair, or caregiver</li>
              <li>Easy-to-clean, grout-free walls</li>
            </ul>
          </div>

          <div className="grid grid--2 mt-3">
            <ImageSlot
              src={siteImages.showerConversion}
              alt="A tub-to-shower conversion with a low entry, seat, and grab bars"
              label="Photo: tub-to-shower conversion"
              icon="tub-to-shower"
              aspect="16 / 10"
            />
            <ImageSlot
              src={siteImages.showerLowThreshold}
              alt="A walk-in shower with a low threshold and a fold-down seat"
              label="Photo: low-threshold walk-in shower"
              icon="walk-in-shower"
              aspect="16 / 10"
            />
          </div>
        </div>
      </section>

      {/* Shower options */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Choose what fits</span>
            <h2>Walk-in shower options</h2>
            <div className="rule" />
            <p className="lead">
              We match the entry, the seat, and the safety features to how you
              move today and how you may need to move in the years ahead.
            </p>
          </div>
          <div className="grid grid--2">
            {showerProducts.map((p) => (
              <div key={p.name} className="card card--accent">
                <span className="icon-badge" aria-hidden="true">
                  <Icon name={p.icon} />
                </span>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <ul className="checklist mt-1">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety features */}
      <section className="section section--band">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Built-in safety</span>
            <h2>Safety features in every shower we install</h2>
            <div className="rule" />
          </div>
          <div className="grid grid--2">
            {showerFeatures.map((f) => (
              <div key={f.title} className={`card ${styles.feature}`}>
                <span className="icon-badge" aria-hidden="true">
                  <Icon name={f.icon} />
                </span>
                <div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tub or shower? */}
      <section className="section section--cream" aria-labelledby="choose-heading">
        <div className="container">
          <div className={styles.chooseCard}>
            <span className={styles.chooseIcon} aria-hidden="true">
              <Icon name="tub-to-shower" width={44} height={44} />
            </span>
            <div className={styles.chooseCopy}>
              <h2 id="choose-heading">Not sure if a tub or a shower is right?</h2>
              <p className="lead">
                A walk-in tub is wonderful for a warm soak. A walk-in shower is
                often better with a walker, a wheelchair, or a caregiver. Our
                short guide compares them side by side.
              </p>
            </div>
            <div className={styles.chooseActions}>
              <Link href="/tub-or-shower" className="btn btn--navy">
                Compare tubs &amp; showers
                <Icon name="arrow-right" width={20} height={20} />
              </Link>
              <Link href="/walk-in-bathtubs" className="btn btn--outline">
                See walk-in tubs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & funding */}
      <section className="section section--sand" aria-labelledby="shower-price-heading">
        <div className="container">
          <div className="grid grid--2">
            <div>
              <span className="eyebrow">Pricing &amp; funding</span>
              <h2 id="shower-price-heading">Clear pricing, and help with funding</h2>
              <div className="rule" />
              <p className="lead mt-1">{pricing.showerNote}</p>
              <ul className="checklist mt-2">
                <li>Written, no-obligation quote before any work begins</li>
                <li>No hidden fees or surprise charges</li>
                <li>Options to spread the cost over time</li>
              </ul>
            </div>
            <div className={`card card--accent ${styles.fundCard}`}>
              <p className={styles.priceLine}>
                <strong>Walk-in showers &amp; conversions:</strong>{" "}
                {showerPriceLabel}
              </p>
              <h3>Alberta funding may lower the cost</h3>
              <ul className="checklist mt-1">
                <li>
                  <strong>SHARP</strong> — a low-interest Alberta home-equity
                  loan with no monthly payments; bathroom projects are among
                  its listed examples
                </li>
                <li>
                  <strong>Home Accessibility Tax Credit</strong> — up to $3,000
                  back for renovations that make your home safer
                </li>
                <li>
                  <strong>RAMP</strong> — a grant for some lower-income
                  Albertans with significant mobility needs
                </li>
              </ul>
              <p className={styles.fundNote}>
                Each program decides its own eligibility. We help you check
                which may apply.
              </p>
              <div className="btn-row mt-2">
                <Link href="/financing" className="btn btn--primary">
                  See funding programs
                </Link>
                <a href={phoneLink} className="btn btn--outline">
                  <Icon name="phone" width={20} height={20} />
                  {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading="Find out what shower fits your bathroom"
        text="Book a free, no-obligation in-home consultation. We will measure your space, check your floor and plumbing, and recommend the safest option for you."
      />
    </>
  );
}
