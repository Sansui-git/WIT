import Link from "next/link";
import {
  siteConfig,
  footerNav,
  serviceAreas,
  phoneLink,
  phoneDisplay,
  emailLink,
} from "@/lib/site";
import Icon from "./Icon";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand + contact */}
          <div>
            <p className={styles.brandName}>{siteConfig.companyName}</p>
            <p className={styles.brandDesc}>{siteConfig.shortDescription}</p>
            <ul className={styles.contact}>
              <li>
                <Icon name="phone" width={20} height={20} />
                <a href={phoneLink}>{phoneDisplay}</a>
              </li>
              <li>
                <Icon name="email" width={20} height={20} />
                <a href={emailLink}>{siteConfig.email}</a>
              </li>
              <li>
                <Icon name="location" width={20} height={20} />
                <span>{siteConfig.serviceAreaLabel}</span>
              </li>
            </ul>
          </div>

          {/* Site links */}
          <nav aria-label="Footer">
            <p className={styles.colTitle}>Explore</p>
            <ul className={styles.links}>
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service areas */}
          <div>
            <p className={styles.colTitle}>Areas we serve</p>
            <ul className={styles.areas}>
              {serviceAreas.slice(0, 12).map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <Link href="/service-areas" className={styles.areasLink}>
              See all service areas
            </Link>
          </div>

          {/* CTA */}
          <div className={styles.ctaCol}>
            <p className={styles.colTitle}>Ready to talk?</p>
            <p className={styles.ctaText}>
              Request a free, no-obligation in-home consultation.
            </p>
            <Link href="/request-a-consultation" className="btn btn--primary btn--block">
              Request a Consultation
            </Link>
            <a href={phoneLink} className={`btn btn--ghost-dark btn--block ${styles.ctaCall}`}>
              <Icon name="phone" width={20} height={20} />
              Call {phoneDisplay}
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {year} {siteConfig.legalName} All rights reserved.
            <span className={styles.dot}>&middot;</span>
            {siteConfig.companyName} is operated by {siteConfig.legalName}
          </p>
          <p className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.dot}>&middot;</span>
            <Link href="/request-a-consultation">Request a Consultation</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
