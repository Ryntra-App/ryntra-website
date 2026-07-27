import { Github } from "lucide-react";

import { PlatformCta } from "./platform-cta";
import { en } from "@/content/en";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="web-hero" aria-labelledby="hero-title">
      <div className="web-hero-main">
        <div className="web-hero-copy">
          <p className="web-hero-kicker">
            <span aria-hidden="true" />
            Open source
          </p>
          <h1 id="hero-title">
            {en.hero.title.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
        </div>
        <div className="web-hero-aside">
          <p className="web-hero-eyebrow">
          {en.hero.eyebrow}
          </p>
          <p className="web-hero-description">{en.hero.description}</p>
          <div className="web-hero-actions">
            <PlatformCta />
            <a
              className="button button-secondary"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" size={17} />
              Source
            </a>
          </div>
        </div>
      </div>
      <div className="web-hero-meta" aria-label="Platform support">
        <span>Android 8+</span>
        <span>iOS 16+</span>
        <span>System light and dark modes</span>
        <span>GitHub releases</span>
      </div>
    </section>
  );
}
