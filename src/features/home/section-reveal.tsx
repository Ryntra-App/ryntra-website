"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function SectionReveal({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      className="section-reveal"
      initial={{ opacity: 1, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0.12 : 0.62,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
