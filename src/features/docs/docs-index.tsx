"use client";

import {
  Bell,
  ChartNoAxesCombined,
  Download,
  FolderKanban,
  KeyRound,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const topics = [
  {
    icon: KeyRound,
    title: "Sign in",
    body: "Use Modrinth OAuth for normal sign-in. Personal access token login remains available as a fallback. Tokens are stored in Android Keystore or iOS Keychain.",
  },
  {
    icon: FolderKanban,
    title: "Projects and releases",
    body: "Review project status, edit metadata and descriptions, update gallery media, and manage versions, loaders, game versions, files and dependencies.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Analytics",
    body: "Choose a 7, 30 or 90 day range and review downloads, views, playtime, revenue and per-project performance where the Modrinth API exposes it.",
  },
  {
    icon: Users,
    title: "Teams and organizations",
    body: "Work with project teams, organizations, invitations, members and permission-aware actions. Available controls depend on your Modrinth role.",
  },
  {
    icon: Bell,
    title: "Notifications",
    body: "Local background checks are optional. Instant delivery uses a separate, limited relay authorization and never sends the normal Ryntra session token to the relay.",
  },
  {
    icon: Download,
    title: "Updates",
    body: "Android builds are APK files. iOS builds are unsigned IPA files for sideloading.",
  },
] as const;

export function DocsIndex() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="docs-index">
      {topics.map((topic, index) => {
        const Icon = topic.icon;
        return (
          <motion.section
            key={topic.title}
            initial={reduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            whileHover={reduceMotion ? undefined : { x: 7 }}
            transition={{
              duration: reduceMotion ? 0 : 0.52,
              delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.12),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Icon aria-hidden="true" size={22} />
            <div>
              <h2>{topic.title}</h2>
              <p>{topic.body}</p>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
