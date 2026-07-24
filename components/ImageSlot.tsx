import Image from "next/image";
import Icon from "./Icon";
import styles from "./ImageSlot.module.css";

/**
 * Photo slot with a graceful placeholder.
 *
 * Wire real photos in lib/site.ts → siteImages:
 *   1. Put the file in /public/images (e.g. /public/images/hero.jpg)
 *   2. Set the entry, e.g. hero: "/images/hero.jpg"
 * Until then, a clean labelled placeholder renders in its place.
 */
interface ImageSlotProps {
  src?: string;
  alt: string;
  /** Short label shown on the placeholder, e.g. "Photo: walk-in tub" */
  label?: string;
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
  label,
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
          <span className={styles.badge} aria-hidden="true">
            <Icon name="camera" width={26} height={26} />
          </span>
          {label && <span className={styles.label}>{label}</span>}
        </div>
      )}
    </div>
  );
}
