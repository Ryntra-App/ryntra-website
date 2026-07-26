"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Platform = "android" | "apple" | "other";

function detectPlatform(): Platform {
  const agent = navigator.userAgent.toLowerCase();
  if (agent.includes("android")) return "android";
  if (
    /iphone|ipad|ipod|macintosh/.test(agent) ||
    navigator.platform.toLowerCase().includes("mac")
  ) {
    return "apple";
  }
  return "other";
}

export function PlatformCta() {
  const [platform, setPlatform] = useState<Platform>("other");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setPlatform(detectPlatform()));
    return () => cancelAnimationFrame(frame);
  }, []);

  const label =
    platform === "android"
      ? "Download for Android"
      : platform === "apple"
        ? "View iOS options"
        : "Download Ryntra";

  return (
    <Link className="button button-primary" href={`/download?platform=${platform}`}>
      <Download aria-hidden="true" size={18} />
      {label}
    </Link>
  );
}
