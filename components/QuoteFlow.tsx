"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { phoneDisplay, phoneLink } from "@/lib/site";
import {
  quoteQuestions,
  totalQuestions,
  calculatePrice,
  formatPrice,
  summarizeAnswers,
  type QuoteAnswers,
} from "@/lib/quote";
import Icon from "./Icon";
import styles from "./QuoteFlow.module.css";

/**
 * Instant quote: the customer answers the questions, tells us where to send
 * the quote, then sees their estimate. Nothing is signed online — the next
 * step is always a free in-home visit, where the price is confirmed and the
 * paperwork is signed.
 */
export default function QuoteFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuoteAnswers>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  // Bring the estimate into view once the quote is sent.
  useEffect(() => {
    if (status === "sent") topRef.current?.scrollIntoView({ block: "start" });
  }, [status]);

  const asking = step < quoteQuestions.length;
  const q = quoteQuestions[step];
  const picked = asking ? answers[q.id] ?? [] : [];

  function choose(value: string) {
    if (q.multiple) {
      setAnswers((a) => {
        const cur = a[q.id] ?? [];
        return {
          ...a,
          [q.id]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value],
        };
      });
      return;
    }
    setAnswers((a) => ({ ...a, [q.id]: [value] }));
    setStep((s) => s + 1);
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("consent")) {
      setError("Please tick the box so we can send your quote and contact you.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(data.entries()), answers }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Request failed");
      setStatus("sent");
      trackQuoteSent();
    } catch (err) {
      setError(
        err instanceof Error && err.message !== "Request failed"
          ? err.message
          : `Something went wrong. Please try again or call us at ${phoneDisplay}.`
      );
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.card} role="status" ref={topRef} style={{ scrollMarginTop: "6rem" }}>
        <span className={styles.estimateTag}>Estimate</span>
        <h2 className={styles.title}>Your quote is on its way</h2>
        <p className={styles.price}>{formatPrice(calculatePrice(answers))}</p>
        <p className={styles.help}>
          This estimate is based on your answers. We have emailed you a copy.
          Your price is confirmed at your free in-home visit.
        </p>

        <div className={styles.nextStep}>
          <h3>Next step: your free in-home visit</h3>
          <p>
            We will call you shortly to book a time. At the visit we measure your
            bathroom, go over your options and funding, and review all of the
            paperwork with you. There is no obligation.
          </p>
          <a href={phoneLink} className="btn btn--primary btn--lg">
            <Icon name="phone" width={22} height={22} />
            Call {phoneDisplay}
          </a>
        </div>

        <ul className={styles.recap}>
          {summarizeAnswers(answers).map((a) => (
            <li key={a.question}>
              <span>{a.question}</span>
              <strong>{a.answer}</strong>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (!asking) {
    return (
      <form className={styles.card} onSubmit={submit}>
        <p className={styles.progress}>Last step</p>
        <h2 className={styles.title}>Where should we send your quote?</h2>
        <p className={styles.help}>
          You will see your estimate on the next screen, and we will email you a
          copy. We only use your details to send your quote and book your free
          in-home visit.
        </p>

        <div className={styles.fields}>
          <label>
            Full name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" required autoComplete="tel" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Town or city
            <input name="town" required autoComplete="address-level2" />
          </label>
          <label>
            Who is this for?
            <select name="who" defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option>Myself</option>
              <option>My spouse or partner</option>
              <option>A parent or family member</option>
              <option>A client I care for</option>
            </select>
          </label>
          <label>
            Best time to call
            <select name="time" defaultValue="Any time">
              <option>Any time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </label>
        </div>

        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="quote-company">Company</label>
          <input id="quote-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <label className={styles.consent}>
          <input name="consent" type="checkbox" />
          <span>
            Send me my quote, and contact me by phone or email to book my free
            in-home visit.
          </span>
        </label>

        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="btn btn--primary btn--lg"
          disabled={status === "sending"}
          style={{ marginTop: "1rem" }}
        >
          {status === "sending" ? "Sending…" : "Show and send my quote"}
        </button>
        <button type="button" className={styles.back} onClick={() => setStep(step - 1)}>
          ← Back
        </button>
      </form>
    );
  }

  return (
    <div className={styles.card}>
      <p className={styles.progress}>
        Question {q.number} of {totalQuestions}
      </p>
      <div
        className={styles.bar}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={totalQuestions}
        aria-valuenow={q.number}
      >
        <span style={{ width: `${(q.number / totalQuestions) * 100}%` }} />
      </div>

      <h2 className={styles.title}>{q.title}</h2>
      {q.help && <p className={styles.help}>{q.help}</p>}

      <div
        className={`${styles.grid} ${q.options.some((o) => o.image) ? "" : styles.list}`}
        role={q.multiple ? "group" : "radiogroup"}
        aria-label={q.title}
      >
        {q.options.map((o) => (
          <button
            key={o.value}
            type="button"
            role={q.multiple ? "checkbox" : "radio"}
            aria-checked={picked.includes(o.value)}
            className={`${styles.option} ${picked.includes(o.value) ? styles.selected : ""}`}
            onClick={() => choose(o.value)}
          >
            {o.image && (
              <Image src={o.image} alt="" width={300} height={300} className={styles.img} />
            )}
            <span className={styles.label}>{o.label}</span>
          </button>
        ))}
      </div>

      {q.multiple && (
        <button
          type="button"
          className="btn btn--primary btn--lg"
          style={{ marginTop: "1.5rem" }}
          disabled={picked.length === 0}
          onClick={() => setStep((s) => s + 1)}
        >
          Continue
        </button>
      )}

      {step > 0 && (
        <button type="button" className={styles.back} onClick={() => setStep(step - 1)}>
          ← Back
        </button>
      )}
    </div>
  );
}

/** Reports a sent quote to Google and Meta, if their tags are on the page. */
function trackQuoteSent() {
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  w.gtag?.("event", "generate_lead", { form: "instant_quote" });
  w.fbq?.("track", "Lead", { content_name: "instant_quote" });
}
