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
        <span className="release-version">
          {release ? `Version ${release.tag}` : "Release status unavailable"}
        </span>
        {release ? <span>{formatDate(release.publishedAt)}</span> : null}
        <span>
          <Smartphone aria-hidden="true" size={16} />
          Android
        </span>
        <span>
          <Apple aria-hidden="true" size={16} />
          iOS sideload
        </span>
      </div>
      <PlatformCta />
    </section>
  );
}
