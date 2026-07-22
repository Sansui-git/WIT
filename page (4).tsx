.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 820px;
  margin-inline: auto;
  position: relative;
}
.timeline::before {
  content: "";
  position: absolute;
  left: 27px;
  top: 12px;
  bottom: 12px;
  width: 3px;
  background: var(--border-strong);
}
.item {
  position: relative;
  display: flex;
  gap: 1.5rem;
  margin: 0 0 1.5rem;
  padding: 0;
}
.item:last-child {
  margin-bottom: 0;
}
.num {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--navy);
  color: var(--on-dark);
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
  border: 4px solid var(--sand);
}
.body {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.4rem 1.6rem;
  box-shadow: var(--shadow-sm);
  flex: 1;
}
.title {
  font-size: var(--fs-h4);
  font-family: var(--font-serif);
  margin-bottom: 0.4rem;
}
.body p {
  color: var(--ink-soft);
}

@media (max-width: 560px) {
  .timeline::before {
    left: 22px;
  }
  .num {
    width: 46px;
    height: 46px;
    font-size: 1.25rem;
  }
  .item {
    gap: 1rem;
  }
}
