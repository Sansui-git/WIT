import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig, phoneLink, phoneDisplay, emailLink } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ConsultationForm from "@/components/ConsultationForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";
import styles from "./request.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Request a Consultation",
  description:
    "Request a free, no-obligation in-home consultation for a walk-in bathtub in Edmonton and surrounding communities. Call 780-289-2393 or fill out our simple form.",
  path: "/request-a-consultation",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Request a Consultation", href: "/request-a-consultation" },
];

export default function RequestPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="Free in-home consultation"
        title="Request your free consultation"
        intro="Tell us a little about what you're looking for, and we'll get in touch to arrange a free, no-obligation visit at a time that suits you."
        breadcrumbs={crumbs}
      />

      <section className="section section--sand">
        <div className="container">
          <div className={styles.layout}>
            {/* Supporting info */}
            <aside className={styles.aside}>
              <div className={styles.callCard}>
                <h2>Prefer to call?</h2>
                <p>We&apos;re happy to answer questions over the phone.</p>
                <a href={phoneLink} className={styles.bigPhone}>
                  <Icon name="phone" width={26} height={26} aria-hidden="true" />
                  {phoneDisplay}
                </a>
                <a href={emailLink} className={styles.emailLink}>
                  <Icon name="mail" width={20} height={20} aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </div>

              <div className={styles.infoCard}>
                <h3>What to expect</h3>
                <ul className="checklist">
                  <li>A friendly, no-pressure conversation</li>
                  <li>We measure your bathroom and assess the space</li>
                  <li>Clear answers to all of your questions</li>
                  <li>A written quote for your specific situation</li>
                  <li>No cost and no obligation</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3>Hours</h3>
                <ul className={styles.hours}>
                  {siteConfig.hours.map((h) => (
                    <li key={h.days}>
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className={styles.serving}>
                  <Icon name="map-pin" width={18} height={18} aria-hidden="true" />
                  Serving {siteConfig.serviceAreaLabel}
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className={styles.formCol}>
              <h2 className={styles.formHeading}>Send us your details</h2>
              <p className={styles.formSub}>
                Fields marked with <span className={styles.req}>*</span> are
                required. We only need enough to get in touch.
              </p>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
