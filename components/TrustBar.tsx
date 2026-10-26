import { trustIndicators } from "@/lib/site";
import Icon from "./Icon";
import styles from "./TrustBar.module.css";

export default function TrustBar() {
  return (
    <section className={`section section--band ${styles.wrap}`} aria-label="Why choose us">
      <div className="container">
        <ul className={styles.grid}>
          {trustIndicators.map((item) => (
            <li key={item.title} className={styles.item}>
              <span className="icon-badge" aria-hidden="true">
                <Icon name={item.icon} />
              </span>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
