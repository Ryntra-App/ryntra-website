import "server-only";

import { fallbackReleases } from "./fallback-releases";
import type { Release, ReleaseResult } from "./release.types";

const apiUrl = "https://api.github.com/repos/Ryntra-App/Ryntra/releases";

type GitHubAsset = {
  id: number;
  name: string;
  browser_download_url: string;
  size: number;
  content_type: string;
};

type GitHubRelease = {
  id: number;
  tag_name: string;
  name: string | null;
  body: string | null;
  published_at: string | null;
  html_url: string;
  prerelease: boolean;
  draft: boolean;
  assets: GitHubAsset[];
};

function mapRelease(release: GitHubRelease): Release {
  return {
    id: release.id,
    tag: release.tag_name,
    name: release.name?.trim() || release.tag_name,
    body: release.body ?? "",
    publishedAt: release.published_at ?? new Date(0).toISOString(),
    htmlUrl: release.html_url,
    isPrerelease: release.prerelease,
    assets: release.assets.map((asset) => ({
      id: asset.id,
      name: asset.name,
      browserDownloadUrl: asset.browser_download_url,
      size: asset.size,
      contentType: asset.content_type,
    })),
  };
}

export async function getReleases(): Promise<ReleaseResult> {
  try {
    if (process.env.GITHUB_API_MODE === "fallback") {
      throw new Error("GitHub fallback forced for verification");
    }
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "User-Agent": "Ryntra-Website",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const response = await fetch(`${apiUrl}?per_page=30`, {
      headers,
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }
    const payload = (await response.json()) as GitHubRelease[];
    const releases = payload.filter((release) => !release.draft).map(mapRelease);
    return releases.length > 0
      ? { releases, source: "github" }
      : { releases: [], source: "github" };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown GitHub error";
    return {
      releases: fallbackReleases,
      source: "fallback",
      error: message,
    };
  }
}

export async function getRelease(tag: string): Promise<Release | null> {
  const { releases } = await getReleases();
  return (
    releases.find(
      (release) =>
        release.tag.toLowerCase() === tag.toLowerCase() ||
        `v${release.tag}`.toLowerCase() === tag.toLowerCase(),
    ) ?? null
  );
}

export function findAndroidAsset(release: Release) {
  return release.assets.find((asset) => /\.apk$/i.test(asset.name));
}

export function findIosAsset(release: Release) {
  return release.assets.find((asset) => /\.ipa$/i.test(asset.name));
}
