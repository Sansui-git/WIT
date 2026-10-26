import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig, phoneDisplay, phoneLink, emailLink } from "@/lib/site";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";
import styles from "./privacy.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.legalName} collects, uses, and protects the personal information you share when requesting a walk-in bathtub consultation.`,
  path: "/privacy-policy",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="Privacy Policy"
        intro={`How ${siteConfig.legalName} handles the information you share with us.`}
        breadcrumbs={crumbs}
      />

      <section className="section section--sand">
        <div className="container container--narrow">
          <div className={`prose ${styles.policy}`}>
            <p className={styles.updated}>Last updated: October 2026</p>

            <p>
              {siteConfig.companyName} is operated by {siteConfig.legalName}{" "}
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We
              respect your privacy and are committed to protecting the personal
              information you share with us. This policy explains what we collect,
              why, and how we handle it.
            </p>

            <h2>Information we collect</h2>
            <p>
              We only collect the information you choose to give us. When you
              request a consultation or contact us, this may include your name,
              phone number, email address, community or location, and any details
              you provide about your bathroom or your needs.
            </p>
            <p>
              Our website does not require you to create an account, and we do not
              ask for sensitive financial information through this website.
            </p>

            <h2>How we use your information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Respond to your enquiry and arrange a consultation;</li>
              <li>Prepare a quote and discuss walk-in bathtub options with you;</li>
              <li>Provide the products and installation services you request; and</li>
              <li>Follow up about your request or our services.</li>
            </ul>
            <p>
              We do not sell your personal information, and we do not use it to
              send unrelated marketing without your consent.
            </p>

            <h2>Sharing your information</h2>
            <p>
              We do not sell or rent your personal information. We may share it
              only with trusted people or service providers who help us operate
              our business and serve you — for example, our own installers — and
              only to the extent needed to respond to your request. We may also
              disclose information where required by law.
            </p>
            <p>
              When you send a request through our website form, it is delivered
              to us by a secure email service provider, which may store or
              process it on servers outside Canada. Those providers may only use
              your information to deliver our messages.
            </p>

            <h2>Keeping your information</h2>
            <p>
              We keep your information only as long as reasonably necessary to
              respond to your request, provide our services, and meet legal or
              record-keeping requirements. We take reasonable steps to protect it
              from loss, misuse, and unauthorized access.
            </p>

            <h2>Cookies and website analytics</h2>
            <p>
              This website is designed to be simple and privacy-respecting. If we
              add website analytics or cookies in the future to understand how the
              site is used, we will update this policy to describe what is
              collected and how you can manage your preferences.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask us to update or delete the personal information you have
              shared with us, or ask a question about how we handle it, at any
              time. Just contact us using the details below.
            </p>

            <h2>Contact us</h2>
            <p>
              If you have any questions about this Privacy Policy or your
              information, please reach out:
            </p>
            <ul className={styles.contactList}>
              <li>
                <strong>{siteConfig.legalName}</strong> (operating as{" "}
                {siteConfig.companyName})
              </li>
              <li>
                Phone: <a href={phoneLink}>{phoneDisplay}</a>
              </li>
              <li>
                Email: <a href={emailLink}>{siteConfig.email}</a>
              </li>
              <li>Service area: {siteConfig.serviceAreaLabel}</li>
            </ul>

            <h2>Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we
              will revise the &ldquo;last updated&rdquo; date at the top of this
              page.
            </p>

            <p className={styles.disclaimer}>
              This Privacy Policy is provided for general information and is not
              legal advice. You may wish to have it reviewed to ensure it meets
              the requirements that apply to your business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
