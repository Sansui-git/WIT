.form {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: var(--shadow);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.15rem 1.25rem;
}
@media (max-width: 620px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.field {
  display: flex;
  flex-direction: column;
}
.full {
  grid-column: 1 / -1;
}

.field label {
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.4rem;
  font-size: 1rem;
}

.req {
  color: var(--error);
}
.optional,
.field .optional {
  font-weight: 400;
  color: var(--ink-soft);
  font-size: 0.9rem;
}

.field input,
.field select,
.field textarea {
  font-family: inherit;
  font-size: 1.05rem;
  color: var(--ink);
  background: #fff;
  border: 2px solid var(--border-strong);
  border-radius: var(--radius-sm);
  padding: 0.8rem 0.9rem;
  width: 100%;
  min-height: 52px;
}
.field textarea {
  resize: vertical;
  min-height: 110px;
}
.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: 3px solid var(--brass-dark);
  outline-offset: 1px;
  border-color: var(--navy);
}
.field input[aria-invalid="true"],
.field select[aria-invalid="true"] {
  border-color: var(--error);
}

.fieldError {
  color: var(--error);
  font-size: 0.95rem;
  font-weight: 600;
  margin-top: 0.4rem;
}

/* Consent row */
.consent {
  flex-direction: row;
  align-items: flex-start;
  gap: 0.7rem;
  margin-top: 1.5rem;
}
.consent input {
  width: 26px;
  height: 26px;
  min-height: 0;
  margin-top: 0.15rem;
  flex-shrink: 0;
  accent-color: var(--navy);
}
.consent label {
  margin-bottom: 0;
  font-weight: 500;
}

/* Submit + note */
.form button[type="submit"] {
  margin-top: 1.5rem;
}
.privacyNote {
  margin-top: 1.1rem;
  font-size: 0.95rem;
  color: var(--ink-soft);
  text-align: center;
  max-width: none;
}

/* Error summary */
.errorSummary {
  background: var(--error-bg);
  border: 2px solid var(--error);
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
}
.errorSummary:focus-visible {
  outline: 3px solid var(--error);
  outline-offset: 2px;
}
.errorSummaryTitle {
  font-weight: 700;
  color: var(--error);
  margin-bottom: 0.4rem;
}
.errorSummary ul {
  margin: 0;
  padding-left: 1.2rem;
}
.errorSummary a {
  color: var(--error);
  font-weight: 600;
}

/* Success */
.success {
  background: var(--success-bg);
  border: 2px solid var(--success);
  border-radius: var(--radius-lg);
  padding: clamp(1.75rem, 4vw, 2.75rem);
  text-align: center;
}
.successIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: var(--success);
  color: #fff;
  margin-bottom: 1rem;
}
.success h3 {
  color: var(--success);
}
.success p {
  margin-inline: auto;
  margin-top: 0.6rem;
}

/* Honeypot */
.honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
