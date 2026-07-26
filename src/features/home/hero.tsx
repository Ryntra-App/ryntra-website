"use client";

import { Github } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

import { PlatformCta } from "./platform-cta";
import { en } from "@/content/en";
import { site } from "@/lib/site";

const reveal = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const visualY = useTransform(
    scrollYProgress,
    [0, 0.2],
    shouldReduceMotion ? [0, 0] : [0, 26],
  );

  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: shouldReduceMotion ? 0.02 : 0.1 }}
      >
        <motion.p className="hero-brand" variants={reveal}>
          Ryntra
        </motion.p>
        <motion.p className="eyebrow" variants={reveal}>
          {en.hero.eyebrow}
        </motion.p>
        <motion.h1 id="hero-title" variants={reveal}>
          {en.hero.title.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </motion.h1>
        <motion.p className="hero-description" variants={reveal}>
          {en.hero.description}
        </motion.p>
        <motion.div className="hero-actions" variants={reveal}>
          <PlatformCta />
          <a
            className="button button-secondary"
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github aria-hidden="true" size={18} />
            View on GitHub
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: shouldReduceMotion ? 0.08 : 0.38, duration: 0.45 }}
        style={{ y: visualY }}
      >
        <div className="hero-screenshot">
          <Image
            src="/screenshots/hero-mobile.webp"
            alt="Ryntra projects workspace showing project statuses and download counts"
            width={810}
            height={1800}
            priority
            sizes="(max-width: 767px) 72vw, (max-width: 1200px) 42vw, 520px"
          />
        </div>
        <div className="hero-visual-caption" aria-hidden="true">
          <span>Projects</span>
          <span>Native workspace</span>
        </div>
      </motion.div>
    </section>
  );
}
