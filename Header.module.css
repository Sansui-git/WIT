import Link from "next/link";
import { phoneLink, phoneDisplay } from "@/lib/site";
import Icon from "./Icon";
import styles from "./ConsultationCTA.module.css";

interface ConsultationCTAProps {
  heading?: string;
  text?: string;
}

export default function ConsultationCTA({
  heading = "Ready for safer, more comfortable bathing?",
  text = "Book a free, no-obligation in-home consultation. We will visit your home, answer your questions, and help you choose what fits best.",
}: ConsultationCTAProps) {
  return (
    <section className="section section--navy">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h2>{heading}</h2>
          <p className="lead">{text}</p>
        </div>
        <div className={styles.actions}>
          <Link href="/request-a-consultation" className="btn btn--primary btn--lg">
            Request a Consultation
          </Link>
          <a href={phoneLink} className="btn btn--ghost-dark btn--lg">
            <Icon name="phone" width={22} height={22} />
            Call {phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
