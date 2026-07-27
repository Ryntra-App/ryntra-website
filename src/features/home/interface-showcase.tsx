"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const androidInterfaces = [
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Portfolio activity at a glance",
    image: "/screenshots/dashboard.png",
    alt: "Ryntra dashboard workspace on Android",
  },
  {
    id: "projects",
    label: "Projects",
    description: "Status, releases and metadata",
    image: "/screenshots/projects.png",
    alt: "Ryntra projects workspace",
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Downloads, views and revenue",
    image: "/screenshots/analytics.png",
    alt: "Ryntra analytics workspace",
  },
  {
    id: "teams",
    label: "Teams",
    description: "Organizations and invitations",
    image: "/screenshots/teams.png",
    alt: "Ryntra teams workspace",
  },
] as const;

const iosInterfaces = [
  {
    id: "ios-dashboard",
    label: "Dashboard",
    description: "Portfolio activity at a glance",
    image: "/screenshots/ios-dashboard.png",
    alt: "Ryntra dashboard workspace on iOS",
  },
  {
    id: "ios-projects",
    label: "Projects",
    description: "Status, releases and metadata",
    image: "/screenshots/ios-projects.png",
    alt: "Ryntra projects workspace on iOS",
  },
  {
    id: "ios-analytics",
    label: "Analytics",
    description: "Downloads, views and revenue",
    image: "/screenshots/ios-analytics.png",
    alt: "Ryntra analytics workspace on iOS",
  },
  {
    id: "ios-teams",
    label: "Teams",
    description: "Organizations and invitations",
    image: "/screenshots/ios-teams.png",
    alt: "Ryntra teams workspace on iOS",
  },
] as const;

type Platform = "android" | "ios";

export function InterfaceShowcase() {
  const [platform, setPlatform] = useState<Platform>("android");
  const reduceMotion = useReducedMotion();
  const interfaces =
    platform === "android" ? androidInterfaces : iosInterfaces;

  return (
    <section
      className="interface-showcase"
      id="features"
      aria-labelledby="interface-showcase-title"
    >
      <div className="showcase-heading">
        <div>
          <p className="section-label">Product surfaces</p>
          <h2 id="interface-showcase-title">Inside Ryntra.</h2>
        </div>
        <p>Real working surfaces from the Android and iOS application.</p>
      </div>

      <div className="platform-tabs" role="tablist" aria-label="Screenshot platform">
        {(["android", "ios"] as const).map((value) => (
          <button
            type="button"
            role="tab"
            aria-selected={platform === value}
            key={value}
            onClick={() => setPlatform(value)}
          >
            {platform === value ? (
              <motion.span
                className="platform-tab-indicator"
                layoutId="platform-tab-indicator"
                transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            ) : null}
            <span className="platform-tab-copy">
              <strong>{value === "android" ? "Android" : "iOS"}</strong>
              <small>{value === "android" ? "Material 3" : "SwiftUI"}</small>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="showcase-platform-panel"
          key={platform}
          initial={{ opacity: 0, x: reduceMotion ? 0 : platform === "ios" ? 28 : -28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: reduceMotion ? 0 : platform === "ios" ? -20 : 20 }}
          transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav className="showcase-index" aria-label={`${platform} product surfaces`}>
            {interfaces.map((item, index) => (
              <a href={`#surface-${item.id}`} key={item.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="showcase-rail">
            {interfaces.map((item) => (
              <figure id={`surface-${item.id}`} key={item.id}>
                <div className="showcase-image">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={platform === "ios" ? 1206 : 810}
                    height={platform === "ios" ? 2622 : 1800}
                    sizes="(max-width: 620px) 78vw, 360px"
                    unoptimized
                  />
                </div>
                <figcaption>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
