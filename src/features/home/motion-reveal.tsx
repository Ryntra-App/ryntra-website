"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type MotionRevealProps = {
  children: ReactNode;
};

export function MotionReveal({ children }: MotionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="motion-section"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.68,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
