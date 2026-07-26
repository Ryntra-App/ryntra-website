import { Download, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getRelease } from "@/features/releases/github-releases";
import { ReleaseMarkdown } from "@/features/releases/release-markdown";
import { formatDate, formatFileSize } from "@/lib/format";

type ReleasePageProps = {
  params: Promise<{ tag: string }>;
};

export async function generateMetadata({
  params,
}: ReleasePageProps): Promise<Metadata> {
  const { tag } = await params;
  const release = await getRelease(decodeURIComponent(tag));
  if (!release) return { title: "Release not found" };
  return {
    title: release.name,
    description: `Release notes for Ryntra ${release.tag}.`,
    alternates: { canonical: `/changelog/${encodeURIComponent(release.tag)}` },
    openGraph: {
      title: release.name,
      description: `Published ${formatDate(release.publishedAt)}.`,
      url: `/changelog/${encodeURIComponent(release.tag)}`,
    },
  };
}

export default async function ReleasePage({ params }: ReleasePageProps) {
  const { tag } = await params;
  const release = await getRelease(decodeURIComponent(tag));
  if (!release) notFound();

  return (
    <article className="page-shell release-page">
      <header className="release-page-header">
        <div className="release-meta">
          <span className="release-tag">{release.tag}</span>
          <span>{formatDate(release.publishedAt)}</span>
          <span className={release.isPrerelease ? "badge warning" : "badge"}>
            {release.isPrerelease ? "Pre-release" : "Stable"}
          </span>
        </div>
        <h1>{release.name}</h1>
        <a href={release.htmlUrl} target="_blank" rel="noreferrer">
          View on GitHub
          <ExternalLink aria-hidden="true" size={16} />
        </a>
      </header>
      <ReleaseMarkdown>{release.body}</ReleaseMarkdown>
      <aside className="release-page-assets" aria-labelledby="release-files">
        <h2 id="release-files">Files</h2>
        {release.assets.length > 0 ? (
          release.assets.map((asset) => (
            <a key={asset.id} href={asset.browserDownloadUrl}>
              <Download aria-hidden="true" size={17} />
              <span>{asset.name}</span>
              <small>{formatFileSize(asset.size)}</small>
            </a>
          ))
        ) : (
          <p>No downloadable files are attached to this release.</p>
        )}
      </aside>
    </article>
  );
}
