export type ReleaseAsset = {
  id: number;
  name: string;
  browserDownloadUrl: string;
  size: number;
  contentType: string;
};

export type Release = {
  id: number;
  tag: string;
  name: string;
  body: string;
  publishedAt: string;
  htmlUrl: string;
  isPrerelease: boolean;
  assets: ReleaseAsset[];
};

export type ReleaseResult = {
  releases: Release[];
  source: "github" | "fallback";
  error?: string;
};
