import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { ExternalLink } from "@/components/external-link";
import { DocsIndex } from "@/features/docs/docs-index";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Get started with Ryntra and understand its core workflows.",
  alternates: { canonical: "/docs" },
};

export default function DocsPage() {
  return (
    <div className="page-shell docs-page">
      <PageIntro
        eyebrow="Documentation"
        title="Start with the native workspace."
        description="Ryntra is an unofficial mobile client for Modrinth creators. These essentials explain the current product without hiding platform constraints."
      >
        <div className="intro-actions">
          <Link className="button button-primary" href="/download">
            Download Ryntra
          </Link>
          <ExternalLink
            className="button button-secondary"
            href={`${site.github}/blob/main/README.md`}
            showIcon
          >
            Full README
          </ExternalLink>
        </div>
      </PageIntro>
      <DocsIndex />
      <section className="docs-callout">
        <div>
          <p className="section-label">Open documentation</p>
          <h2>Repository reference</h2>
          <p>
            Notification privacy, deployment notes, translation instructions,
            source code and issue tracking live in the repository.
          </p>
        </div>
        <ExternalLink
          className="button button-secondary"
          href={`${site.github}/tree/main/docs`}
          showIcon
        >
          Browse repository docs
        </ExternalLink>
      </section>
    </div>
  );
}
