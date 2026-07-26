"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type DepthScreenshotProps = {
  src: string;
  alt: string;
};

export function DepthScreenshot({ src, alt }: DepthScreenshotProps) {
  const target = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-18, 18],
  );

  return (
    <motion.div ref={target} className="feature-depth" style={{ y }}>
      <Image
        src={src}
        alt={alt}
        width={810}
        height={1800}
        sizes="(max-width: 767px) 86vw, (max-width: 1200px) 48vw, 640px"
      />
    </motion.div>
  );
}
