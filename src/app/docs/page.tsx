import {
  Bell,
  ChartNoAxesCombined,
  Download,
  FolderKanban,
  KeyRound,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { ExternalLink } from "@/components/external-link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Get started with Ryntra and understand its core workflows.",
  alternates: { canonical: "/docs" },
};

const topics = [
  {
    icon: KeyRound,
    title: "Sign in",
    body: "Use Modrinth OAuth for normal sign-in. Personal access token login remains available as a fallback. Tokens are stored in Android Keystore or iOS Keychain.",
  },
  {
    icon: FolderKanban,
    title: "Projects and releases",
    body: "Review project status, edit metadata and descriptions, update gallery media, and manage versions, loaders, game versions, files and dependencies.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Analytics",
    body: "Choose a 7, 30 or 90 day range and review downloads, views, playtime, revenue and per-project performance where the Modrinth API exposes it.",
  },
  {
    icon: Users,
    title: "Teams and organizations",
    body: "Work with project teams, organizations, invitations, members and permission-aware actions. Available controls depend on your Modrinth role.",
  },
  {
    icon: Bell,
    title: "Notifications",
    body: "Local background checks are optional. Instant delivery uses a separate, limited relay authorization and never sends the normal Ryntra session token to the relay.",
  },
  {
    icon: Download,
    title: "Updates",
    body: "Android builds are APK files. iOS builds are unsigned IPA files for sideloading.",
  },
];

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
      <div className="docs-index">
        {topics.map((topic) => {
          const Icon = topic.icon;
          return (
            <section key={topic.title}>
              <Icon aria-hidden="true" size={22} />
              <div>
                <h2>{topic.title}</h2>
                <p>{topic.body}</p>
              </div>
            </section>
          );
        })}
      </div>
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
