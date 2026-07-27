"use client";

import { Github } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { PlatformCta } from "./platform-cta";
import { en } from "@/content/en";
import { site } from "@/lib/site";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const title = en.hero.title.replace("\n", " ");
  const words = title.split(" ");

  return (
    <section className="web-hero" aria-labelledby="hero-title">
      <div className="web-hero-main">
        <div className="web-hero-copy">
          <h1 id="hero-title" aria-label={title}>
            {words.map((word, index) => (
              <span className="hero-word-clip" aria-hidden="true" key={`${word}-${index}`}>
                <motion.span
                  className="hero-word"
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : "72%",
                    filter: reduceMotion ? "none" : "blur(4px)",
                  }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.58,
                    delay: reduceMotion ? 0 : 0.04 + index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
        <motion.div
          className="web-hero-aside"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.62,
            delay: reduceMotion ? 0 : 0.32,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
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
        </motion.div>
      </div>
      <motion.div
        className="hero-signal"
        aria-hidden="true"
        initial={{ scaleX: reduceMotion ? 1 : 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.82,
          delay: reduceMotion ? 0 : 0.44,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </section>
  );
}
