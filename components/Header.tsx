"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      {/* Main navigation */}
      <div className={styles.bar}>
        <div className={`container container--wide ${styles.barInner}`}>
          <Link href="/" className={styles.brand} aria-label={`${siteConfig.companyName} — home`}>
            <Image
              src="/images/logo.png"
              alt={siteConfig.companyName}
              width={720}
              height={215}
              priority
              className={styles.brandLogo}
            />
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul>
              {/* The logo already links home, so "Home" is left out up here. */}
              {primaryNav.filter((item) => item.href !== "/").map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={isActive(item.href) ? styles.active : ""}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    title={item.short ? item.label : undefined}
                  >
                    {item.short ?? item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={phoneLink}
            className={`btn btn--navy ${styles.headerCta}`}
            aria-label={`Call us at ${phoneDisplay}`}
          >
            <Icon name="phone" width={20} height={20} />
            {phoneDisplay}
          </a>

          {/* Tablet & phone: tap-to-call stays visible next to the menu */}
          <a href={phoneLink} className={styles.mobileCall} aria-label={`Call us at ${phoneDisplay}`}>
            <Icon name="phone" width={24} height={24} />
          </a>

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
