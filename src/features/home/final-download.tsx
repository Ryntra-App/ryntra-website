import { Apple, Smartphone } from "lucide-react";

import { PlatformCta } from "./platform-cta";
import type { Release } from "@/features/releases/release.types";
import { formatDate } from "@/lib/format";

type FinalDownloadProps = {
  release?: Release;
};

export function FinalDownload({ release }: FinalDownloadProps) {
  return (
    <section className="final-download">
      <div>
        <p className="eyebrow">Latest release</p>
        <h2>Get the latest Ryntra build.</h2>
        <p>
          Android APK and unsigned iOS IPA builds are published through GitHub
          Releases.
        </p>
      </div>
      <div className="release-availability">
        <div className="release-build">
          <strong>
            {release ? `Version ${release.tag}` : "Release status unavailable"}
          </strong>
          {release ? (
            <time dateTime={release.publishedAt}>
              {formatDate(release.publishedAt)}
            </time>
          ) : null}
        </div>
        <ul aria-label="Available platforms">
          <li>
            <Smartphone aria-hidden="true" size={16} />
            Android
          </li>
          <li>
            <Apple aria-hidden="true" size={16} />
            iOS sideload
          </li>
        </ul>
      </div>
      <PlatformCta />
    </section>
  );
}
