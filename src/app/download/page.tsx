import { Download, FileDown } from "lucide-react";
import type { Metadata } from "next";
import { Suspense } from "react";

import { PageIntro } from "@/components/page-intro";
import { DownloadOptions } from "@/features/download/download-options";
import {
  findAndroidAsset,
  findIosAsset,
  getReleases,
} from "@/features/releases/github-releases";
import { ReleaseMarkdown } from "@/features/releases/release-markdown";
import { formatDate, formatFileSize } from "@/lib/format";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description: "Download the latest Ryntra build for Android or iOS.",
  alternates: { canonical: "/download" },
};

export default async function DownloadPage() {
  const result = await getReleases();
  const release = result.releases[0];

  if (!release) {
    return (
      <div className="page-shell">
        <PageIntro
          eyebrow="Download"
          title="No release is available yet."
          description="Published builds will appear here when a GitHub Release is available."
        />
        <a className="button button-primary" href={site.releases}>
          Open GitHub Releases
        </a>
      </div>
    );
  }

  const androidAsset = findAndroidAsset(release);
  const iosAsset = findIosAsset(release);

  return (
    <div className="page-shell download-page">
      <PageIntro
        eyebrow="Download"
        title={`Ryntra ${release.tag}`}
        description={`Published ${formatDate(release.publishedAt)}. Choose a platform below; no download starts without your action.`}
      >
        {result.source === "fallback" ? (
          <p className="service-notice" role="status">
            Live GitHub data is temporarily unavailable. Verified cached release
            details are shown below.{" "}
            <a href={site.releases}>Check GitHub Releases</a>
          </p>
        ) : null}
      </PageIntro>
      <Suspense fallback={<div className="download-options-placeholder" />}>
        <DownloadOptions
          release={release}
          androidAsset={androidAsset}
          iosAsset={iosAsset}
        />
      </Suspense>
      <section className="release-preview">
        <div>
          <p className="eyebrow">Release notes</p>
          <h2>What changed</h2>
        </div>
        <ReleaseMarkdown>{release.body}</ReleaseMarkdown>
      </section>
      <section className="all-assets">
        <div>
          <p className="eyebrow">All files</p>
          <h2>Manual downloads</h2>
        </div>
        {release.assets.length > 0 ? (
          <ul>
            {release.assets.map((asset) => (
              <li key={asset.id}>
                <FileDown aria-hidden="true" size={20} />
                <span>
                  <strong>{asset.name}</strong>
                  <small>{formatFileSize(asset.size)}</small>
                </span>
                <a href={asset.browserDownloadUrl}>
                  <Download aria-hidden="true" size={16} />
                  Download
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No downloadable assets are attached to this release.</p>
        )}
      </section>
    </div>
  );
}
