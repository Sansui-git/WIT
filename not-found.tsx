import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { installationSteps } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ConsultationCTA from "@/components/ConsultationCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";
import styles from "./installation.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Installation Process",
  description:
    "How walk-in bathtub installation works, step by step — from your free in-home consultation to professional installation, walkthrough, and ongoing support.",
  path: "/installation-process",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Installation Process", href: "/installation-process" },
];

export default function InstallationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Installation process"
        title="A clear, easy process from first call to first bath"
        intro="We handle the work so you don't have to worry. Here is exactly what to expect at every step."
        breadcrumbs={crumbs}
      />

      <section className="section section--sand">
        <div className="container">
          <ol className={styles.timeline}>
            {installationSteps.map((s) => (
              <li key={s.step} className={styles.item}>
                <span className={styles.num} aria-hidden="true">
                  {s.step}
                </span>
                <div className={styles.body}>
                  <h2 className={styles.title}>{s.title}</h2>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Reassurance */}
      <section className="section section--band">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">What to expect</span>
            <h2>We keep it simple and respectful</h2>
            <div className="rule" />
          </div>
          <div className="grid grid--3">
            <div className="card">
              <span className="icon-badge" aria-hidden="true">
                <Icon name="clock" />
              </span>
              <h3>On your schedule</h3>
              <p>
                We arrange visits and installation at times that work for you, and
                let you know clearly what to expect on the day.
              </p>
            </div>
            <div className="card">
              <span className="icon-badge" aria-hidden="true">
                <Icon name="home" />
              </span>
              <h3>Respect for your home</h3>
              <p>
                Our installers treat your home with care and clean up when the
                work is done, so your bathroom is ready to use.
              </p>
            </div>
            <div className="card">
              <span className="icon-badge" aria-hidden="true">
                <Icon name="shield" />
              </span>
              <h3>We stand behind our work</h3>
              <p>
                If you have questions after installation, you can reach us and we
                will help. Your peace of mind matters to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading="Start with a free consultation"
        text="Step one is a no-obligation visit. Request yours and we will take care of the rest."
      />
    </>
  );
}
