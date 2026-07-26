import { Download, GitBranch } from "lucide-react";
import Link from "next/link";

import { ChangelogModal } from "./changelog-modal";
import type { Release } from "./release.types";
import { formatDate, formatFileSize, summarizeMarkdown } from "@/lib/format";

type ReleaseListProps = {
  releases: Release[];
};

export function ReleaseList({ releases }: ReleaseListProps) {
  if (releases.length === 0) {
    return (
      <div className="empty-state">
        <GitBranch aria-hidden="true" size={28} />
        <h2>No releases yet</h2>
        <p>Published GitHub Releases will appear here automatically.</p>
      </div>
    );
  }

  return (
    <div className="release-list">
      {releases.map((release) => (
        <article key={release.id} className="release-row">
          <div className="release-meta">
            <span className="release-tag">{release.tag}</span>
            <span>{formatDate(release.publishedAt)}</span>
            <span className={release.isPrerelease ? "badge warning" : "badge"}>
              {release.isPrerelease ? "Pre-release" : "Stable"}
            </span>
          </div>
          <div className="release-summary">
            <h2>
              <Link href={`/changelog/${encodeURIComponent(release.tag)}`}>
                {release.name}
              </Link>
            </h2>
            <p>{summarizeMarkdown(release.body) || "No release notes provided."}</p>
          </div>
          <div className="release-assets">
            {release.assets.length > 0 ? (
              release.assets.map((asset) => (
                <a
                  key={asset.id}
                  href={asset.browserDownloadUrl}
                  aria-label={`Download ${asset.name}`}
                >
                  <Download aria-hidden="true" size={15} />
                  <span>{asset.name}</span>
                  <small>{formatFileSize(asset.size)}</small>
                </a>
              ))
            ) : (
              <span>No downloadable files</span>
            )}
          </div>
          <div className="release-actions">
            <ChangelogModal release={release} />
            <Link
              className="text-button"
              href={`/changelog/${encodeURIComponent(release.tag)}`}
            >
              Full notes
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
