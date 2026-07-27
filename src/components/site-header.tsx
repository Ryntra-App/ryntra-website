"use client";

import Link from "next/link";
import { Github } from "lucide-react";
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
          <Link href="/changelog">{en.navigation.changelog}</Link>
          <Link href="/docs">{en.navigation.docs}</Link>
        </nav>
        <div className="header-actions">
          <ThemeSwitcher />
          <ExternalLink
            className="icon-button github-button"
            href={site.github}
            aria-label="Open Ryntra on GitHub"
          >
            <Github aria-hidden="true" size={19} />
          </ExternalLink>
          <Link className="header-download" href="/download">
            Download
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
