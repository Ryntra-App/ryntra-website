import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <article className="page-shell legal-page">
      <header>
        <p className="eyebrow">Legal</p>
        <h1>{title}</h1>
        <p>Last updated {updated}</p>
      </header>
      <div className="legal-copy">{children}</div>
    </article>
  );
}
