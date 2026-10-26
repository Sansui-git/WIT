"use client";

import { useRef, useState } from "react";
import { phoneLink, phoneDisplay } from "@/lib/site";
import Icon from "./Icon";
import styles from "./ConsultationForm.module.css";

type Errors = Record<string, string>;

const bestTimes = ["Morning", "Afternoon", "Evening", "No preference"];
const interests = [
  "Walk-in bathtub",
  "Walk-in shower",
  "Tub-to-shower conversion",
  "Not sure yet — help me choose",
];
const whoFor = [
  "Myself",
  "My parent or relative",
  "Someone I care for",
  "Other",
];

export default function ConsultationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const summaryRef = useRef<HTMLDivElement>(null);

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const postal = (data.get("postal") as string)?.trim();
    const consent = data.get("consent");

    if (!name) next.name = "Please enter your name.";
    if (!phone) {
      next.phone = "Please enter a phone number we can reach you at.";
    } else if (phone.replace(/[^0-9]/g, "").length < 7) {
      next.phone = "Please enter a phone number we can reach you at.";
    }
    // Email is optional: many of our customers prefer a phone call.
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (postal && !/^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/.test(postal)) {
      next.postal = "Please enter a valid postal code (e.g. T5A 1B2).";
    }
    if (!consent) {
      next.consent = "Please confirm we may contact you about your request.";
    }
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: if filled, silently succeed (likely a bot).
    if ((data.get("company") as string)?.length) {
      setStatus("success");
      return;
    }

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      window.requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    try {
      const payload = Object.fromEntries(data.entries());
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon} aria-hidden="true">
          <Icon name="check" width={34} height={34} />
        </span>
        <h3>Thank you — your request has been received.</h3>
        <p>
          We will be in touch soon to arrange your free in-home consultation.
          If you would like to reach us sooner, please call{" "}
          <a href={phoneLink}>{phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  const errorList = Object.entries(errors);

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {errorList.length > 0 && (
        <div
          className={styles.errorSummary}
          role="alert"
          tabIndex={-1}
          ref={summaryRef}
        >
          <p className={styles.errorSummaryTitle}>
            Please check the following:
          </p>
          <ul>
            {errorList.map(([field, msg]) => (
              <li key={field}>
                <a href={`#field-${field}`}>{msg}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === "error" && (
        <div className={styles.errorSummary} role="alert">
          <p className={styles.errorSummaryTitle}>
            Something went wrong sending your request.
          </p>
          <p>
            Please try again, or call us directly at{" "}
            <a href={phoneLink}>{phoneDisplay}</a>.
          </p>
        </div>
      )}

      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="field-name">
            Your name <span className={styles.req}>*</span>
          </label>
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "err-name" : undefined}
          />
          {errors.name && (
            <p className={styles.fieldError} id="err-name">
              {errors.name}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="field-phone">
            Phone number <span className={styles.req}>*</span>
          </label>
          <input
            id="field-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            aria-required="true"
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? "err-phone" : undefined}
          />
          {errors.phone && (
            <p className={styles.fieldError} id="err-phone">
              {errors.phone}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="field-email">
            Email address <span className={styles.optional}>(optional)</span>
          </label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          {errors.email && (
            <p className={styles.fieldError} id="err-email">
              {errors.email}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="field-postal">Postal code</label>
          <input
            id="field-postal"
            name="postal"
            type="text"
            autoComplete="postal-code"
            placeholder="e.g. T5A 1B2"
            maxLength={7}
            aria-invalid={errors.postal ? "true" : undefined}
            aria-describedby={errors.postal ? "err-postal" : undefined}
          />
          {errors.postal && (
            <p className={styles.fieldError} id="err-postal">
              {errors.postal}
            </p>
          )}
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="field-interest">What are you interested in?</label>
          <select id="field-interest" name="interest" defaultValue="">
            <option value="" disabled>
              Please choose…
            </option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="field-who">Who is this for?</label>
          <select id="field-who" name="who" defaultValue="">
            <option value="" disabled>
              Please choose…
            </option>
            {whoFor.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="field-time">Best time to reach you</label>
          <select id="field-time" name="time" defaultValue="">
            <option value="" disabled>
              Please choose…
            </option>
            {bestTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="field-message">
            How can we help? <span className={styles.optional}>(optional)</span>
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={4}
            placeholder="Tell us a little about your bathroom or what you are looking for."
          />
        </div>
      </div>

      {/* Honeypot field — hidden from people, visible to bots */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="field-company">Company</label>
        <input id="field-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`${styles.field} ${styles.consent}`}>
        <input
          id="field-consent"
          name="consent"
          type="checkbox"
          aria-invalid={errors.consent ? "true" : undefined}
          aria-describedby={errors.consent ? "err-consent" : undefined}
        />
        <label htmlFor="field-consent">
          I agree to be contacted about my consultation request.{" "}
          <span className={styles.req}>*</span>
        </label>
      </div>
      {errors.consent && (
        <p className={styles.fieldError} id="err-consent">
          {errors.consent}
        </p>
      )}

      <button
        type="submit"
        className="btn btn--primary btn--lg btn--block"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Request My Free Consultation"}
      </button>

      <p className={styles.privacyNote}>
        Prefer to talk? Call us at <a href={phoneLink}>{phoneDisplay}</a>. We
        respect your privacy and will only use your details to respond to your
        request.
      </p>
    </form>
  );
}
