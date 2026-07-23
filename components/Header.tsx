"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, siteConfig, phoneLink, phoneDisplay } from "@/lib/site";
import Icon from "./Icon";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      {/* Top contact bar */}
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <span className={styles.topbarText}>
            Serving {siteConfig.serviceAreaLabel}
          </span>
          <a className={styles.topbarPhone} href={phoneLink}>
            <Icon name="phone" width={18} height={18} />
            <span>
              Call <strong>{phoneDisplay}</strong>
            </span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <Link href="/" className={styles.brand} aria-label={`${siteConfig.companyName} — home`}>
            <span className={styles.brandMark} aria-hidden="true">
              <Icon name="water" width={26} height={26} />
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>{siteConfig.companyName}</span>
              <span className={styles.brandSub}>Walk-in bathtubs, professionally installed</span>
            </span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul>
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={isActive(item.href) ? styles.active : ""}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/request-a-consultation" className={`btn btn--primary ${styles.headerCta}`}>
            Free Consultation
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} width={28} height={28} />
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ""}`}
        hidden={!open}
      >
        <nav aria-label="Primary mobile">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? styles.active : ""}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileActions}>
          <a href={phoneLink} className="btn btn--navy btn--block">
            <Icon name="phone" width={20} height={20} />
            Call {phoneDisplay}
          </a>
          <Link href="/request-a-consultation" className="btn btn--primary btn--block">
            Request a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
