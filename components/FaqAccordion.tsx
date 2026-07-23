"use client";

import { useState } from "react";
import Icon from "./Icon";
import styles from "./FaqAccordion.module.css";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  /** Index of the item open by default. Use -1 for all closed. */
  defaultOpen?: number;
}

export default function FaqAccordion({ items, defaultOpen = 0 }: FaqAccordionProps) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
            <h3 className={styles.heading}>
              <button
                type="button"
                id={btnId}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.question}</span>
                <span className={styles.icon} aria-hidden="true">
                  <Icon name={isOpen ? "close" : "arrow-right"} width={22} height={22} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={styles.panel}
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
