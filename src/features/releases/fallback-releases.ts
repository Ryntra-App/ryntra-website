import type { Release } from "./release.types";

export const fallbackReleases: Release[] = [
  {
    id: 220,
    tag: "2.2.0",
    name: "v2.2.0 Rinthy",
    publishedAt: "2026-06-27T15:19:05Z",
    htmlUrl: "https://github.com/Ryntra-App/Ryntra/releases/tag/2.2.0",
    isPrerelease: false,
    body: `# Rinthy 2.2.0

## What's new

- Glass theme got another update with cleaner menus, selectors, tabs, and touch states.
- Project sorting filter was redesigned to better match the app style.
- Language selector now uses the same glass selection style.
- Fixed sticky highlighted states on mobile buttons and menus.
- Back button now closes open menus, sheets, and modals before leaving the page.
- Project page swipes and tab switching feel smoother now.
- Fixed the language selector popup being aligned to the left on wider screens.
- Fixed YouTube videos not loading correctly in embedded content.

## iOS install

The iOS asset is an unsigned IPA for sideloading. Install it with a signing tool such as Sideloadly, then follow the trust and Developer Mode prompts on the device.`,
    assets: [
      {
        id: 2201,
        name: "Rinthy.2.2.0.apk",
        browserDownloadUrl:
          "https://github.com/Ryntra-App/Ryntra/releases/download/2.2.0/Rinthy.2.2.0.apk",
        size: 4_817_554,
        contentType: "application/vnd.android.package-archive",
      },
      {
        id: 2202,
        name: "Rinthy.2.2.0.ipa",
        browserDownloadUrl:
          "https://github.com/Ryntra-App/Ryntra/releases/download/2.2.0/Rinthy.2.2.0.ipa",
        size: 2_076_551,
        contentType: "application/octet-stream",
      },
    ],
  },
  {
    id: 210,
    tag: "2.1.0",
    name: "v2.1.0 Rinthy",
    publishedAt: "2026-06-22T14:36:27Z",
    htmlUrl: "https://github.com/Ryntra-App/Ryntra/releases/tag/2.1.0",
    isPrerelease: false,
    body: `**Rinthy 2.1.0**

- iOS app is now available as an unsigned IPA.
- Projects can be opened directly from notifications.
- The glass theme and trend analytics page were updated.`,
    assets: [
      {
        id: 2101,
        name: "Rinthy.2.1.0.apk",
        browserDownloadUrl:
          "https://github.com/Ryntra-App/Ryntra/releases/download/2.1.0/Rinthy.2.1.0.apk",
        size: 4_815_652,
        contentType: "application/vnd.android.package-archive",
      },
      {
        id: 2102,
        name: "Rinthy.2.1.0.ipa",
        browserDownloadUrl:
          "https://github.com/Ryntra-App/Ryntra/releases/download/2.1.0/Rinthy.2.1.0.ipa",
        size: 2_074_514,
        contentType: "application/octet-stream",
      },
    ],
  },
];
