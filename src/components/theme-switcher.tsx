"use client";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function readTheme(): Theme {
  const stored = localStorage.getItem("ryntra-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const initialTheme = readTheme();
      setTheme(initialTheme);
      applyTheme(initialTheme);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${nextTheme} theme`;

  return (
    <button
      className="theme-trigger"
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        setTheme(nextTheme);
        applyTheme(nextTheme);
        localStorage.setItem("ryntra-theme", nextTheme);
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          className="theme-icon"
          key={nextTheme}
          initial={{ opacity: 0, rotate: reduceMotion ? 0 : -35, scale: reduceMotion ? 1 : 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: reduceMotion ? 0 : 35, scale: reduceMotion ? 1 : 0.7 }}
          transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          {nextTheme === "dark" ? (
            <Moon aria-hidden="true" size={18} />
          ) : (
            <Sun aria-hidden="true" size={18} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
