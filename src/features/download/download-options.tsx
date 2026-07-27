"use client";

import { Apple, Download, ExternalLink, Smartphone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useSearchParams } from "next/navigation";

import type { Release, ReleaseAsset } from "@/features/releases/release.types";
import { formatFileSize } from "@/lib/format";

type DownloadOptionsProps = {
  release: Release;
  androidAsset?: ReleaseAsset;
  iosAsset?: ReleaseAsset;
};

export function DownloadOptions({
  release,
  androidAsset,
  iosAsset,
}: DownloadOptionsProps) {
  const recommendation = useSearchParams().get("platform");
  const reduceMotion = useReducedMotion();
  const cardMotion = (index: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    whileHover: reduceMotion ? undefined : { y: -6 },
    transition: {
      duration: reduceMotion ? 0 : 0.52,
      delay: reduceMotion ? 0 : 0.1 + index * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <div className="download-options">
      <motion.article
        layout
        {...cardMotion(0)}
        className={recommendation === "android" ? "is-recommended" : ""}
      >
        {recommendation === "android" ? (
          <span className="recommendation-label">Recommended</span>
        ) : null}
        <div className="platform-icon">
          <Smartphone aria-hidden="true" size={24} />
        </div>
        <div>
          <p className="eyebrow">Android</p>
          <h2>Install the APK</h2>
          <p>
            Download the release asset, then approve installation from your
            browser or file manager if Android asks.
          </p>
          {androidAsset ? (
            <a
              className="button button-primary"
              href={androidAsset.browserDownloadUrl}
            >
              <Download aria-hidden="true" size={18} />
              Download APK
              <small>{formatFileSize(androidAsset.size)}</small>
            </a>
          ) : (
            <span className="unavailable">APK is not available in this release.</span>
          )}
        </div>
      </motion.article>
      <motion.article
        layout
        {...cardMotion(1)}
        className={recommendation === "apple" ? "is-recommended" : ""}
      >
        {recommendation === "apple" ? (
          <span className="recommendation-label">Recommended</span>
        ) : null}
        <div className="platform-icon">
          <Apple aria-hidden="true" size={24} />
        </div>
        <div>
          <p className="eyebrow">iPhone and iPad</p>
          <h2>Unsigned IPA for sideloading</h2>
          <p>
            This is not an App Store build. The IPA must be signed and
            sideloaded with a tool such as Sideloadly.
          </p>
          {iosAsset ? (
            <a
              className="button button-secondary"
              href={iosAsset.browserDownloadUrl}
            >
              <Download aria-hidden="true" size={18} />
              Download unsigned IPA
              <small>{formatFileSize(iosAsset.size)}</small>
            </a>
          ) : (
            <span className="unavailable">
              An iOS asset is not available in this release.
            </span>
          )}
        </div>
      </motion.article>
      <a className="github-release-link" href={release.htmlUrl} target="_blank" rel="noreferrer">
        Open release {release.tag} on GitHub
        <ExternalLink aria-hidden="true" size={16} />
      </a>
    </div>
  );
}
