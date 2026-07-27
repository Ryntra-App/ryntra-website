"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function RouteTemplate({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="route-transition"
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 18, clipPath: "inset(0 0 3% 0)" }
      }
      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      transition={{
        duration: reduceMotion ? 0 : 0.52,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
