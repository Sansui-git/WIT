"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { phoneLink } from "@/lib/site";
import Icon from "./Icon";
import styles from "./MobileActionBar.module.css";

/**
 * Phone-only bar pinned to the bottom of the screen, so calling or booking
 * is always one tap away no matter how far down the page someone scrolls.
 */
export default function MobileActionBar() {
  const pathname = usePathname();
  const onRequestPage = pathname.startsWith("/request-a-consultation");

  return (
    <div className={styles.bar} aria-label="Quick contact">
      <a href={phoneLink} className={`btn btn--navy ${styles.btn}`}>
        <Icon name="phone" width={22} height={22} />
        Call now
      </a>
      {!onRequestPage && (
        <Link href="/request-a-consultation" className={`btn btn--primary ${styles.btn}`}>
          <Icon name="free-assessment" width={22} height={22} />
          Free consultation
        </Link>
      )}
    </div>
  );
}
