import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { products, benefits, siteImages, phoneLink, phoneDisplay } from "@/lib/site";
import Icon, { type IconName } from "@/components/Icon";
import ImageSlot from "@/components/ImageSlot";
import PageHero from "@/components/PageHero";
import ConsultationCTA from "@/components/ConsultationCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "Walk-In Bathtubs",
  description:
    "Explore walk-in bathtub options for seniors and people with mobility challenges in Edmonton — soaker tubs, hydrotherapy tubs, wide-door models, and replacement-fit designs.",
  path: "/walk-in-bathtubs",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Walk-In Bathtubs", href: "/walk-in-bathtubs" },
];

export default function WalkInBathtubsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Walk-in bathtubs"
        title="Walk-in bathtubs designed around safety and comfort"
        intro="A walk-in bathtub lets you step in at nearly floor level, bathe seated, and enjoy a warm, relaxing soak — with safety built into every part of the design."
        breadcrumbs={crumbs}
      />

      {/* What is a walk-in tub */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The basics</span>
            <h2>What makes a bathtub a &ldquo;walk-in&rdquo; tub?</h2>
            <div className="rule" />
          </div>
          <div className="grid grid--2">
            <div className="prose">
              <p>
                A standard bathtub asks you to lift your leg high over the side
                and lower yourself to the bottom — the two moments where most
                bathroom slips and falls happen. A walk-in bathtub is designed to
                remove both risks.
              </p>
              <p>
                Instead of a high wall, it has a <strong>watertight door</strong>{" "}
                and a <strong>low step-in threshold</strong>, so you can walk in
                at nearly floor level. Once inside, a comfortable{" "}
                <strong>built-in seat</strong> lets you bathe sitting down, with{" "}
                <strong>grab bars</strong> and{" "}
                <strong>slip-resistant surfaces</strong> to help you feel steady.
              </p>
              <p>
                The result is a bath you can take confidently and independently —
                and one that turns bathing back into something relaxing rather
                than worrying.
              </p>
            </div>
            <ul className="checklist" aria-label="Key walk-in tub features">
              <li>Watertight, easy-to-latch door</li>
              <li>Low step-in threshold</li>
              <li>Comfortable built-in seat at a natural height</li>
              <li>Securely mounted grab bars</li>
              <li>Slip-resistant floor and seat</li>
              <li>Anti-scald temperature controls</li>
              <li>Handheld shower option</li>
              <li>Optional hydrotherapy jets</li>
            </ul>
          </div>

          <div className="grid grid--2 mt-3">
            <ImageSlot
              src={siteImages.tubOverhead}
              alt="Overhead view of a walk-in bathtub filled with water, hydrotherapy jets running"
              label="Photo: walk-in tub with hydrotherapy jets"
              aspect="16 / 10"
            />
            <ImageSlot
              src={siteImages.tubInstalled}
              alt="Walk-in bathtub installed in a home bathroom with the door closed"
              label="Photo: walk-in tub installed in a bathroom"
              aspect="16 / 10"
            />
          </div>
        </div>
      </section>

      {/* Product options */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Choose what fits</span>
            <h2>Walk-in tub options</h2>
            <div className="rule" />
            <p className="lead">
              Different needs call for different tubs. During your free
              consultation we help you match the right model and features to your
              bathroom, your mobility, and your budget.
            </p>
          </div>
          <div className="grid grid--2">
            {products.map((p) => (
              <div key={p.name} className="card card--accent">
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
          <p className="text-center lead mt-3">
            Not sure which is right for you? That is exactly what a consultation
            is for.
          </p>
          <div className="text-center mt-2">
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link href="/features-and-options" className="btn btn--navy">
                See features &amp; options
              </Link>
              <a href={phoneLink} className="btn btn--outline">
                <Icon name="phone" width={20} height={20} />
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits recap */}
      <section className="section section--band">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Why it matters</span>
            <h2>The difference a walk-in tub makes</h2>
            <div className="rule" />
          </div>
          <div className="grid grid--3">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <span className="icon-badge" aria-hidden="true">
                  <Icon name={b.icon as IconName} />
                </span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
