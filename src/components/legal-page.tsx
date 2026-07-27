"use client";

import { motion, useReducedMotion } from "motion/react";
import { Children } from "react";
import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <article className="page-shell legal-page">
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.58, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow">Legal</p>
        <h1>{title}</h1>
        <p>Last updated {updated}</p>
      </motion.header>
      <div className="legal-copy legal-copy-motion">
        {Children.map(children, (child, index) => (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.16),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    </article>
  );
}
