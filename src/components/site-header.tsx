"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BrandMark } from "./brand-mark";
import { ExternalLink } from "./external-link";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeSwitcher } from "./theme-switcher";
import { en } from "@/content/en";
import { site } from "@/lib/site";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" aria-label="Ryntra home">
          <BrandMark compact />
        </Link>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          <Link href="/#features">{en.navigation.features}</Link>
          <Link href="/#analytics">{en.navigation.analytics}</Link>
          <Link href="/download">{en.navigation.download}</Link>
          <Link href="/changelog">{en.navigation.changelog}</Link>
          <ExternalLink href={site.github}>{en.navigation.github}</ExternalLink>
        </nav>
        <div className="header-actions">
          <ThemeSwitcher />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
