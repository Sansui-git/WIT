import Link from "next/link";
import {
  siteConfig,
  installationSteps,
  serviceAreas,
  faqs,
  pricing,
  siteImages,
  phoneLink,
  phoneDisplay,
} from "@/lib/site";
import Icon, { type IconName } from "@/components/Icon";
import ImageSlot from "@/components/ImageSlot";
import FaqAccordion from "@/components/FaqAccordion";
import ConsultationForm from "@/components/ConsultationForm";
import styles from "./home.module.css";

/* Hero trust strip — factual only */
const heroTrust: { icon: IconName; label: string }[] = [
  { icon: "map-pin", label: "Local Edmonton service" },
  { icon: "wrench", label: "Professional installation" },
  { icon: "dollar", label: "Financing options" },
  { icon: "home", label: "Free in-home assessments" },
];

/* Safer bathing feature cards */
const saferFeatures: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "door",
    title: "Easy-entry door",
    text: "Step in at nearly floor level through a watertight door — no climbing over a high tub wall.",
  },
  {
    icon: "chair",
    title: "Built-in comfort seat",
    text: "Bathe seated at a natural height on a comfortable, contoured seat.",
  },
  {
    icon: "support",
    title: "Safety grab bars",
    text: "Securely mounted bars give you something sturdy to hold at every step.",
  },
  {
    icon: "check",
    title: "Low step-in access",
    text: "A low threshold and slip-resistant surfaces make getting in and out easier.",
  },
];

/* Audience cards */
const audiences: {
  imgKey: string;
  icon: IconName;
  title: string;
  text: string;
  imgLabel: string;
}[] = [
  {
    imgKey: "forSeniors",
    icon: "independence",
    title: "For Seniors",
    text: "Stay independent and enjoy the comfort of a safe, easy bath in the home you love.",
    imgLabel: "Photo: senior enjoying a safe bath",
  },
  {
    imgKey: "forAdultChildren",
    icon: "heart",
    title: "For Adult Children",
    text: "Give yourself peace of mind knowing Mom or Dad can bathe safely at home.",
    imgLabel: "Photo: adult child with parent",
  },
  {
    imgKey: "forCaregivers",
    icon: "chat",
    title: "For Caregivers",
    text: "Make bathing assistance easier, safer, and more comfortable for everyone.",
    imgLabel: "Photo: caregiver with client",
  },
];

/* Installation gallery slots */
const gallerySlots = [
  { before: "install1Before", after: "install1After" },
  { before: "install2Before", after: "install2After" },
  { before: "install3Before", after: "install3After" },
];

export default function HomePage() {
  return (
    <>
      {/* ---- Hero ---------------------------------------------------------- */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              Safe, comfortable bathing at home
            </h1>
            <p className={styles.heroLead}>
              Edmonton walk-in bathtub specialists for seniors, caregivers, and
              families who want safer bathing without leaving home.
            </p>
            <div className="btn-row">
              <Link href="/request-a-consultation" className="btn btn--navy btn--lg">
                Request a Free In-Home Assessment
              </Link>
              <a href={phoneLink} className="btn btn--outline btn--lg">
                <Icon name="phone" width={22} height={22} />
                Call Now
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <ImageSlot
              src={siteImages.hero}
              alt="A walk-in bathtub installed in a bright, modern bathroom"
              label="Photo: your walk-in tub in a bright bathroom"
              aspect="5 / 4"
              priority
            />
          </div>
        </div>

        {/* Trust strip */}
        <div className="container">
          <ul className={styles.trustStrip} aria-label="Why choose us">
            {heroTrust.map((t) => (
              <li key={t.label}>
                <span className={styles.trustIcon} aria-hidden="true">
                  <Icon name={t.icon} width={24} height={24} />
                </span>
                <span>{t.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- A safer bathing solution -------------------------------------- */}
      <section className="section section--cream" aria-labelledby="safer-heading">
        <div className="container">
          <div className={styles.saferLayout}>
            <div className={styles.saferIntro}>
              <h2 id="safer-heading">A safer bathing solution</h2>
              <div className="rule" />
              <p className="lead mt-1">
                Our walk-in bathtubs are designed to help seniors maintain their
                independence and confidence while making bathing easier and
                safer every day.
              </p>
              <Link href="/walk-in-bathtubs" className={`btn btn--outline ${styles.saferBtn}`}>
                Explore our tubs
                <Icon name="arrow-right" width={20} height={20} />
              </Link>
            </div>
            <div className={styles.saferGrid}>
              {saferFeatures.map((f) => (
                <div key={f.title} className={`card ${styles.saferCard}`}>
                  <span className="icon-badge" aria-hidden="true">
                    <Icon name={f.icon} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Designed for real families ------------------------------------ */}
      <section className="section section--band" aria-labelledby="families-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <h2 id="families-heading">Designed for real families</h2>
            <div className="rule" />
          </div>
          <div className="grid grid--3">
            {audiences.map((a) => (
              <div key={a.title} className={`card ${styles.audienceCard}`}>
                <ImageSlot
                  src={siteImages[a.imgKey]}
                  alt={a.imgLabel.replace("Photo: ", "")}
                  label={a.imgLabel}
                  aspect="16 / 10"
                  sizes="(max-width: 620px) 100vw, 33vw"
                />
                <div className={styles.audienceBody}>
                  <span className={styles.audienceIcon} aria-hidden="true">
                    <Icon name={a.icon} width={22} height={22} />
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- How it works --------------------------------------------------- */}
      <section className="section section--cream" aria-labelledby="how-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <h2 id="how-heading">How it works</h2>
            <div className="rule" />
          </div>
          <ol className={styles.howRow}>
            {[
              {
                n: 1,
                title: "Free in-home assessment",
                text: "We visit your home to understand your needs and answer your questions.",
              },
              {
                n: 2,
                title: "Measurement & recommendation",
                text: "We take precise measurements and recommend the best options for your space.",
              },
              {
                n: 3,
                title: "Clear written quote",
                text: "You receive a detailed, no-obligation quote with clear, transparent pricing.",
              },
              {
                n: 4,
                title: "Professional installation",
                text: "Our installers complete your project with care and respect for your home.",
              },
            ].map((s) => (
              <li key={s.n} className={styles.howStep}>
                <span className={styles.howNum} aria-hidden="true">
                  {s.n}
                </span>
                <h3 className={styles.howTitle}>{s.title}</h3>
                <p>{s.text}</p>
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

      {/* ---- Installations gallery ------------------------------------------ */}
      <section className="section section--sand" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <h2 id="gallery-heading">Our walk-in bath installations</h2>
            <div className="rule" />
            <p className="lead">
              Before-and-after photos from our Edmonton-area projects will
              appear here as we complete them.
            </p>
          </div>
          <div className="grid grid--3">
            {gallerySlots.map((g, i) => (
              <div key={i} className={`card ${styles.galleryCard}`}>
                <div className={styles.beforeAfter}>
                  <div className={styles.baHalf}>
                    <span className={styles.baTag}>Before</span>
                    <ImageSlot
                      src={siteImages[g.before]}
                      alt={`Bathroom before walk-in tub installation — project ${i + 1}`}
                      label="Before photo"
                      aspect="1 / 1"
                      rounded={false}
                      sizes="(max-width: 620px) 50vw, 16vw"
                    />
                  </div>
                  <div className={styles.baHalf}>
                    <span className={`${styles.baTag} ${styles.baTagAfter}`}>After</span>
                    <ImageSlot
                      src={siteImages[g.after]}
                      alt={`Walk-in bathtub after installation — project ${i + 1}`}
                      label="After photo"
                      aspect="1 / 1"
                      rounded={false}
                      sizes="(max-width: 620px) 50vw, 16vw"
                    />
                  </div>
                </div>
                <p className={styles.galleryCaption}>
                  <Icon name="map-pin" width={17} height={17} aria-hidden="true" />
                  Edmonton area
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Reviews (honest, ready-state) ----------------------------------- */}
      <section className="section section--cream" aria-labelledby="reviews-heading">
        <div className="container">
          <div className={styles.reviewsLayout}>
            <div>
              <h2 id="reviews-heading">What customers are saying</h2>
              <div className="rule" />
              <ul className={`checklist ${styles.reviewPoints}`}>
                <li>Clear communication and no-pressure advice</li>
                <li>Professional, respectful installers</li>
                <li>Quality products and workmanship</li>
              </ul>
              <p className={styles.reviewNote}>
                We share verified customer reviews as we receive them — ask us
                for references any time.
              </p>
            </div>
            <div className={styles.reviewCards}>
              {[
                "Your neighbours' reviews will appear here after our first installations.",
                "Every review we publish is from a real, verified customer.",
              ].map((text, i) => (
                <figure key={i} className={`card ${styles.reviewCard}`}>
                  <div className={styles.reviewMarks} aria-hidden="true">
                    &ldquo;
                  </div>
                  <blockquote>{text}</blockquote>
                  <figcaption>Verified reviews — coming soon</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Clear pricing ---------------------------------------------------- */}
      <section className="section section--band" aria-labelledby="pricing-heading">
        <div className="container">
          <div className={styles.pricingLayout}>
            <div>
              <h2 id="pricing-heading">Clear pricing guidance</h2>
              <div className="rule" />
              <p className="lead mt-1">{pricing.note}</p>
              <ul className="checklist mt-2">
                <li>Written, no-obligation quote before any work begins</li>
                <li>No hidden fees or surprise charges</li>
                <li>Financing options to spread the cost</li>
              </ul>
            </div>
            <div className={styles.priceCard}>
              <p className={styles.priceLabel}>Complete installed projects</p>
              <p className={styles.priceValue}>
                <span className={styles.priceFrom}>starting from</span>
                {pricing.startingPrice}
              </p>
              <Link href="/financing" className="btn btn--primary btn--block">
                Ask About Financing
              </Link>
              <a href={phoneLink} className={`btn btn--outline btn--block ${styles.priceCall}`}>
                <Icon name="phone" width={20} height={20} />
                {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Service coverage ------------------------------------------------- */}
      <section className="section section--cream" aria-labelledby="areas-heading">
        <div className="container">
          <div className={styles.areasLayout}>
            <div>
              <h2 id="areas-heading">Proudly serving the Edmonton area</h2>
              <div className="rule" />
              <p className="lead mt-1">
                We install walk-in bathtubs throughout {siteConfig.city} and many
                surrounding communities. Nearby? Call us — we are happy to
                confirm we cover your area.
              </p>
              <div className="btn-row mt-2">
                <Link href="/service-areas" className="btn btn--navy">
                  View all service areas
                </Link>
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

      {/* ---- FAQ ---------------------------------------------------------------- */}
      <section className="section section--sand" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-head section-head--center">
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

      {/* ---- Final consultation form -------------------------------------------- */}
      <section className="section section--navy" id="consultation" aria-labelledby="form-heading">
        <div className="container">
          <div className={styles.formLayout}>
            <div className={styles.formCopy}>
              <h2 id="form-heading">
                Find out if a walk-in bathtub is right for your home
              </h2>
              <p className="lead">
                Book your free in-home assessment and get clear
                recommendations, measurements, and written pricing.
              </p>
              <ul className={styles.formPoints}>
                <li>
                  <Icon name="check" width={22} height={22} aria-hidden="true" />
                  No cost and no obligation
                </li>
                <li>
                  <Icon name="check" width={22} height={22} aria-hidden="true" />
                  No-pressure consultation
                </li>
                <li>
                  <Icon name="check" width={22} height={22} aria-hidden="true" />
                  Clear guidance in plain language
                </li>
              </ul>
              <p className={styles.formCall}>
                Prefer to talk now? <a href={phoneLink}>Call {phoneDisplay}</a>
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
