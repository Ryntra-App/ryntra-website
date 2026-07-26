import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Ryntra website and mobile app.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="27 July 2026">
      <p>
        By using Ryntra or this website, you acknowledge the conditions below.
        If you do not agree, do not use the software.
      </p>
      <h2>Unofficial project</h2>
      <p>
        Ryntra is not affiliated with, endorsed by or maintained by Modrinth.
        Modrinth names and services remain subject to their respective owners
        and terms.
      </p>
      <h2>Open-source software</h2>
      <p>
        Ryntra is distributed under the license included in its GitHub
        repository. That license governs copying, modification and
        redistribution of the source code and application builds.
      </p>
      <h2>Your account and actions</h2>
      <p>
        You are responsible for the Modrinth credentials or tokens you use and
        for actions taken through your account. Project edits, releases,
        membership changes and deletions may affect real Modrinth data.
      </p>
      <h2>Downloads and iOS sideloading</h2>
      <p>
        Install only release assets you trust. Android builds are provided as
        APK files. iOS builds may be provided as unsigned IPA files and require
        third-party signing or sideloading steps. Ryntra does not claim App
        Store distribution.
      </p>
      <h2>No warranty</h2>
      <p>
        The software is provided under the warranty and liability terms of its
        open-source license. Availability can depend on GitHub, Modrinth,
        operating systems and optional notification infrastructure.
      </p>
      <h2>Changes</h2>
      <p>
        These terms may be updated when distribution or product behavior
        changes. The revision date above identifies the current website copy.
      </p>
    </LegalPage>
  );
}
