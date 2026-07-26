import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { getReleases } from "@/features/releases/github-releases";
import { ReleaseList } from "@/features/releases/release-list";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Release notes and downloadable assets from Ryntra GitHub Releases.",
  alternates: { canonical: "/changelog" },
};

// Keep the page request-aware while the GitHub fetch itself remains revalidated.
// This lets a cached fallback be shown immediately during an API outage.
export const dynamic = "force-dynamic";

export default async function ChangelogPage() {
  const result = await getReleases();

  return (
    <div className="page-shell changelog-page">
      <PageIntro
        eyebrow="Changelog"
        title="Every published release."
        description="Release notes and files are loaded from the official GitHub repository and cached on the server."
      >
        {result.source === "fallback" ? (
          <p className="service-notice" role="status">
            GitHub is temporarily unavailable. Showing a verified fallback copy.{" "}
            <a href={site.releases}>Open GitHub Releases</a>
          </p>
        ) : null}
      </PageIntro>
      <ReleaseList releases={result.releases} />
    </div>
  );
}
