export const en = {
  brand: "Ryntra",
  navigation: {
    features: "Features",
    analytics: "Analytics",
    download: "Download",
    changelog: "Changelog",
    github: "GitHub",
    docs: "Docs",
  },
  hero: {
    eyebrow: "Native Modrinth workspace",
    title: "Your Modrinth workspace,\nwherever you are.",
    description:
      "Manage projects, releases, teams and analytics from a native Android and iOS experience.",
  },
  sections: {
    projects: {
      eyebrow: "Project management",
      title: "Keep every release moving.",
      body: "Review project status, edit metadata and descriptions, manage versions, files and dependencies, and keep galleries current from one focused workspace.",
    },
    analytics: {
      eyebrow: "Analytics",
      title: "See what changed. Know where to look next.",
      body: "Explore downloads, views, playtime, revenue and per-project trends across clear date ranges. Private payout data appears only when Modrinth makes it available.",
    },
    teams: {
      eyebrow: "Teams and organizations",
      title: "People, permissions and projects in one place.",
      body: "Manage organizations, project teams, members, ownership and invitations with permission-aware controls.",
    },
    notifications: {
      eyebrow: "Notifications",
      title: "Go from an update to the project behind it.",
      body: "Ryntra supports local background checks and optional instant delivery through a limited relay. Related projects and invitations open directly from notifications.",
    },
    native: {
      eyebrow: "Native on both platforms",
      title: "One Ryntra identity. Two native experiences.",
      body: "Android follows Compose and Material conventions; iPhone and iPad use SwiftUI. Both support system-aware appearance, light and dark modes, and reduced motion.",
    },
  },
  finalCta: {
    eyebrow: "Latest release",
    title: "Take your workspace with you.",
    body: "Android APK and unsigned iOS IPA builds are published through GitHub Releases.",
  },
} as const;

export type SiteDictionary = typeof en;
