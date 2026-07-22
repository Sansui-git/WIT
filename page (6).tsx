import Link from "next/link";
import {
  siteConfig,
  benefits,
  products,
  installationSteps,
  serviceAreas,
  faqs,
  phoneLink,
  phoneDisplay,
} from "@/lib/site";
import Icon, { type IconName } from "@/components/Icon";
import TrustBar from "@/components/TrustBar";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import ConsultationForm from "@/components/ConsultationForm";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      {/* ---- Hero ---------------------------------------------------------- */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">Serving {siteConfig.serviceAreaLabel}</span>
            <h1 className={styles.heroTitle}>
              Walk-in bathtubs for safer, more comfortable bathing in Edmonton
            </h1>
            <p className={styles.heroLead}>
              We supply and professionally install walk-in bathtubs for seniors
              and people with mobility challenges — helping you stay independent
              and comfortable in the home you love.
            </p>
            <div className="btn-row">
              <Link href="/request-a-consultation" className="btn btn--primary btn--lg">
                Request a Free Consultation
              </Link>
              <a href={phoneLink} className="btn btn--outline btn--lg">
                <Icon name="phone" width={22} height={22} />
                Call {phoneDisplay}
              </a>
            </div>
            <ul className={styles.heroPoints}>
              <li>
                <Icon name="check" width={22} height={22} aria-hidden="true" />
                Free, no-obligation in-home visit
              </li>
              <li>
                <Icon name="check" width={22} height={22} aria-hidden="true" />
                Professional local installation
              </li>
              <li>
                <Icon name="check" width={22} height={22} aria-hidden="true" />
                Clear, no-pressure advice
              </li>
            </ul>
          </div>

          <aside className={styles.heroCard} aria-label="Contact us">
            <h2 className={styles.heroCardTitle}>Talk to a local expert</h2>
            <p className={styles.heroCardText}>
              Have a question or ready to book your free consultation? We are
              here to help.
            </p>
            <a href={phoneLink} className={styles.heroPhone}>
              <span className="icon-badge" aria-hidden="true">
                <Icon name="phone" />
              </span>
              <span>
                <span className={styles.heroPhoneLabel}>Call us today</span>
                <span className={styles.heroPhoneNumber}>{phoneDisplay}</span>
              </span>
            </a>
            <Link href="/request-a-consultation" className="btn btn--navy btn--block">
              Request a Consultation
            </Link>
            <p className={styles.heroCardHours}>
              {siteConfig.hours[0].days}: {siteConfig.hours[0].time}
            </p>
          </aside>
        </div>
      </section>

      {/* ---- Trust indicators --------------------------------------------- */}
      <TrustBar />

      {/* ---- Benefits ----------------------------------------------------- */}
      <section className="section section--sand" aria-labelledby="benefits-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Why a walk-in bathtub</span>
            <h2 id="benefits-heading">The comfort of bathing, without the worry</h2>
            <div className="rule" />
            <p className="lead">
              A walk-in bathtub removes the biggest risks of a standard tub, so
              bathing feels safe and relaxing again.
            </p>
          </div>
          <div className="grid grid--3">
            {benefits.map((b) => (
              <div key={b.title} className="card card--accent">
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

      {/* ---- Product options ---------------------------------------------- */}
      <section className="section section--cream" aria-labelledby="products-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Product options</span>
            <h2 id="products-heading">Walk-in tubs to suit your needs</h2>
            <div className="rule" />
            <p className="lead">
              From a simple warm soak to soothing hydrotherapy, we help you
              choose the tub and features that fit your bathroom and your
              comfort.
            </p>
          </div>
          <div className="grid grid--2">
            {products.map((p) => (
              <div key={p.name} className="card">
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
          <div className="text-center mt-3">
            <Link href="/walk-in-bathtubs" className="btn btn--outline">
              Explore walk-in bathtubs
              <Icon name="arrow-right" width={20} height={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---- How installation works --------------------------------------- */}
      <section className="section section--band" aria-labelledby="install-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Simple from start to finish</span>
            <h2 id="install-heading">How installation works</h2>
            <div className="rule" />
            <p className="lead">
              We make the whole process clear and easy — most of the work is
              ours, not yours.
            </p>
          </div>
          <ol className={styles.steps}>
            {installationSteps.slice(0, 4).map((s) => (
              <li key={s.step} className={styles.step}>
                <span className={styles.stepNum} aria-hidden="true">
                  {s.step}
                </span>
                <div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="text-center mt-3">
            <Link href="/installation-process" className="btn btn--outline">
              See the full installation process
              <Icon name="arrow-right" width={20} height={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Service coverage --------------------------------------------- */}
      <section className="section section--sand" aria-labelledby="areas-heading">
        <div className="container">
          <div className={styles.areasLayout}>
            <div>
              <span className="eyebrow">Local coverage</span>
              <h2 id="areas-heading">Proudly serving the Edmonton area</h2>
              <div className="rule" />
              <p className="lead mt-1">
                We install walk-in bathtubs throughout {siteConfig.city} and many
                surrounding communities. If you are nearby, give us a call — we
                are happy to confirm we cover your area.
              </p>
              <div className="btn-row mt-2">
                <Link href="/service-areas" className="btn btn--navy">
                  View all service areas
                </Link>
                <a href={phoneLink} className="btn btn--outline">
                  <Icon name="phone" width={20} height={20} />
                  {phoneDisplay}
                </a>
              </div>
            </div>
            <ul className={styles.areaChips} aria-label="Communities we serve">
              {serviceAreas.slice(0, 12).map((area) => (
                <li key={area}>
                  <Icon name="map-pin" width={18} height={18} aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Testimonials placeholder ------------------------------------- */}
      <Testimonials />

      {/* ---- FAQ ----------------------------------------------------------- */}
      <section className="section section--cream" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Good to know</span>
            <h2 id="faq-heading">Frequently asked questions</h2>
            <div className="rule" />
          </div>
          <FaqAccordion items={faqs.slice(0, 6)} />
          <div className="text-center mt-3">
            <Link href="/faq" className="btn btn--outline">
              See all questions
              <Icon name="arrow-right" width={20} height={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Final consultation form -------------------------------------- */}
      <section className="section section--navy" id="consultation" aria-labelledby="form-heading">
        <div className="container">
          <div className={styles.formLayout}>
            <div className={styles.formCopy}>
              <span className="eyebrow">Free in-home consultation</span>
              <h2 id="form-heading">Request your consultation</h2>
              <p className="lead">
                Tell us a little about what you are looking for and we will get
                in touch to arrange a free, no-obligation visit at a time that
                suits you.
              </p>
              <ul className={styles.formPoints}>
                <li>
                  <Icon name="check" width={22} height={22} aria-hidden="true" />
                  No cost and no obligation
                </li>
                <li>
                  <Icon name="check" width={22} height={22} aria-hidden="true" />
                  We measure and answer your questions
                </li>
                <li>
                  <Icon name="check" width={22} height={22} aria-hidden="true" />
                  Clear guidance in plain language
                </li>
              </ul>
              <p className={styles.formCall}>
                Prefer to talk now?{" "}
                <a href={phoneLink}>Call {phoneDisplay}</a>
              </p>
            </div>
            <div className={styles.formWrap}>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
