import Link from "next/link";
import Icon from "./Icon";
import styles from "./PageHero.module.css";

interface Crumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  intro?: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
}

export default function PageHero({
  title,
  intro,
  eyebrow,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className="container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <ol>
              {breadcrumbs.map((c, i) => {
                const last = i === breadcrumbs.length - 1;
                return (
                  <li key={c.href}>
                    {last ? (
                      <span aria-current="page">{c.label}</span>
                    ) : (
                      <>
                        <Link href={c.href}>{c.label}</Link>
                        <Icon name="arrow-right" width={15} height={15} aria-hidden="true" />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}
