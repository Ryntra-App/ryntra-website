"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: PageIntroProps) {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 22 };
  const transition = (delay: number) => ({
    duration: reduceMotion ? 0 : 0.56,
    delay: reduceMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1] as const,
  });

  return (
    <header className="page-intro">
      <motion.p
        className="eyebrow"
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={transition(0.04)}
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={transition(0.1)}
      >
        {title}
      </motion.h1>
      <motion.p
        className="page-description"
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={transition(0.17)}
      >
        {description}
      </motion.p>
      {children ? (
        <motion.div
          className="page-intro-extra"
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={transition(0.24)}
        >
          {children}
        </motion.div>
      ) : null}
    </header>
  );
}
