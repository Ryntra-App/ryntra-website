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
    eyebrow: "Native workspace for Modrinth creators",
    title: "Manage Modrinth\nfrom anywhere.",
    description:
      "Projects, releases, analytics, teams and notifications in a focused Android and iOS app.",
  },
  sections: {
    projects: {
      eyebrow: "Project management",
      title: "Projects stay ready to ship.",
      body: "Review project status, edit metadata and descriptions, manage versions, files and dependencies, and keep galleries current from one focused workspace.",
    },
    analytics: {
      eyebrow: "Analytics",
      title: "Analytics you can act on.",
      body: "Explore downloads, views, playtime, revenue and per-project trends across clear date ranges. Private payout data appears only when Modrinth makes it available.",
    },
    teams: {
      eyebrow: "Teams and organizations",
      title: "Keep teams in sync.",
      body: "Manage organizations, project teams, members, ownership and invitations with permission-aware controls.",
    },
    notifications: {
      eyebrow: "Notifications",
      title: "Open the update that matters.",
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
