import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the Ryntra website and mobile app.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="27 July 2026">
      <p>
        Ryntra is an open-source, unofficial client for Modrinth. This page
        explains the data paths visible in the current website and application.
      </p>
      <h2>Website</h2>
      <p>
        The public website does not provide accounts, advertising profiles or a
        first-party analytics dashboard. It retrieves public release metadata
        from the GitHub API on the server and caches that response. Download
        links lead directly to GitHub release assets.
      </p>
      <h2>Theme preference</h2>
      <p>
        If you manually choose System, Light or Dark, the website stores that
        preference in your browser&apos;s localStorage. It is not sent to Ryntra.
      </p>
      <h2>Application authentication</h2>
      <p>
        Ryntra uses Modrinth OAuth for normal sign-in and supports personal
        access token login as a fallback. Authentication tokens are stored
        locally using Android Keystore or iOS Keychain. Requests required for
        project management are sent to Modrinth.
      </p>
      <h2>Notifications</h2>
      <p>
        Local notification checks run on the device when enabled. Optional
        instant notifications use a separate limited Modrinth authorization
        through the notification relay. The normal Ryntra session token is not
        sent to that relay.
      </p>
      <h2>Third parties</h2>
      <p>
        GitHub hosts source code and release files. Modrinth provides the
        project and account APIs. Optional distribution or sideloading tools
        have their own privacy terms.
      </p>
      <h2>Questions and changes</h2>
      <p>
        The source repository is the authoritative place to report privacy
        issues. This notice may change when product data flows change; the
        revision date above records the version shown here.
      </p>
    </LegalPage>
  );
}
