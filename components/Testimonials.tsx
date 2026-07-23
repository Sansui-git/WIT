import styles from "./Testimonials.module.css";

/**
 * Testimonials placeholder.
 *
 * IMPORTANT: These are neutral placeholders — NOT fabricated reviews.
 * When you have genuine, permission-granted customer feedback, replace the
 * items in `placeholders` below with real quotes and names (or initials).
 * Do not invent testimonials.
 */
const placeholders = [
  "Your customers' own words will go here once you have reviews to share.",
  "A short quote about feeling safer and more independent at home.",
  "A family member's note about the installation experience.",
];

export default function Testimonials() {
  return (
    <section className="section section--sand">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">In their words</span>
          <h2>What customers say</h2>
          <div className="rule" />
          <p className="lead">
            We are collecting feedback from the people we serve. Real, verified
            reviews will appear here.
          </p>
        </div>

        <div className="grid grid--3">
          {placeholders.map((text, i) => (
            <figure key={i} className={`card ${styles.quoteCard}`}>
              <div className={styles.marks} aria-hidden="true">
                &ldquo;
              </div>
              <blockquote className={styles.quote}>{text}</blockquote>
              <figcaption className={styles.cite}>
                <span className={styles.dash} aria-hidden="true" />
                Customer review coming soon
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
