import Image from "next/image";
import Icon, { type IconName } from "./Icon";
import styles from "./ImageSlot.module.css";

/**
 * Photo slot with a graceful placeholder.
 *
 * Wire real photos in lib/site.ts → siteImages:
 *   1. Put the file in /public/images (e.g. /public/images/hero.jpg)
 *   2. Set the entry, e.g. hero: "/images/hero.jpg"
 * Until then, a branded illustration panel (one of our custom icons on a
 * soft gradient) renders in its place, so the page never looks unfinished.
 */
interface ImageSlotProps {
  src?: string;
  alt: string;
  /** Note for whoever adds photos later, e.g. "Photo: walk-in tub". Not shown. */
  label?: string;
  /** Icon drawn on the panel while there is no photo. */
  icon?: IconName;
  /** CSS aspect ratio, e.g. "4 / 3", "16 / 10", "1 / 1" */
  aspect?: string;
  /** Rounded corners */
  rounded?: boolean;
  priority?: boolean;
  sizes?: string;
}

export default function ImageSlot({
  src,
  alt,
  icon = "walk-in-tub",
  aspect = "4 / 3",
  rounded = true,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
}: ImageSlotProps) {
  return (
    <div
      className={`${styles.slot} ${rounded ? styles.rounded : ""}`}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={styles.img}
        />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={alt}>
          <span className={styles.bubbles} aria-hidden="true" />
          <span className={styles.badge} aria-hidden="true">
            <Icon name={icon} width={64} height={64} strokeWidth={2.4} />
          </span>
        </div>
      )}
    </div>
  );
}
