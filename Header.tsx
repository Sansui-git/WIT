import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig, phoneLink, phoneDisplay, emailLink } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import TrustBar from "@/components/TrustBar";
import ConsultationCTA from "@/components/ConsultationCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Edmonton Walk-In Bath Experts, operated by Senior Safety Solutions Inc., supplies and installs walk-in bathtubs for seniors and people with mobility challenges across the Edmonton area.",
  path: "/about",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow="About us"
        title="A local company helping neighbours stay safe at home"
        intro={`${siteConfig.companyName} is operated by ${siteConfig.legalName}. We supply and professionally install walk-in bathtubs across the Edmonton area.`}
        breadcrumbs={crumbs}
      />

      <section className="section section--sand">
        <div className="container">
          <div className="grid grid--2">
            <div className="prose">
              <h2>Who we are</h2>
              <p>
                We are a local company focused on one thing: helping seniors and
                people with mobility challenges bathe safely and comfortably in
                their own homes. We supply quality walk-in bathtubs and install
                them ourselves, so the people who plan your project are the same
                people who stand behind it.
              </p>
              <p>
                For many families, a walk-in tub is about more than a bathroom —
                it is about a parent keeping their independence, a spouse bathing
                without help, or simply everyone worrying a little less. We take
                that responsibility seriously.
              </p>
            </div>
            <div className="prose">
              <h2>How we work</h2>
              <p>
                We believe in clear, calm, no-pressure guidance. When you contact
                us, we start with a free in-home consultation, listen to your
                needs, and explain your options in plain language. If a walk-in
                tub is the right fit, we take care of the installation from start
                to finish. If it isn&apos;t, we will tell you that too.
              </p>
              <p>
                Our goal is for you to feel informed and comfortable at every
                step — never rushed, and never sold to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Values */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">What we value</span>
            <h2>The way we like to do business</h2>
            <div className="rule" />
          </div>
          <div className="grid grid--3">
            <div className="card">
              <span className="icon-badge" aria-hidden="true">
                <Icon name="heart" />
              </span>
              <h3>People first</h3>
              <p>
                We treat every customer the way we would want our own parents and
                grandparents to be treated.
              </p>
            </div>
            <div className="card">
              <span className="icon-badge" aria-hidden="true">
                <Icon name="chat" />
              </span>
              <h3>Clear and honest</h3>
              <p>
                Straightforward advice and clear quotes, with no pressure and no
                confusing sales tactics.
              </p>
            </div>
            <div className="card">
              <span className="icon-badge" aria-hidden="true">
                <Icon name="shield" />
              </span>
              <h3>Quality that lasts</h3>
              <p>
                Careful installation and support you can count on, because this is
                your home and your safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section className="section section--band">
        <div className="container container--narrow text-center">
          <h2>Get in touch</h2>
          <p className="lead">
            We are always happy to answer questions — there is never any
            obligation.
          </p>
          <div className="btn-row mt-2" style={{ justifyContent: "center" }}>
            <a href={phoneLink} className="btn btn--navy btn--lg">
              <Icon name="phone" width={22} height={22} />
              {phoneDisplay}
            </a>
            <a href={emailLink} className="btn btn--outline btn--lg">
              <Icon name="mail" width={22} height={22} />
              Email us
            </a>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
