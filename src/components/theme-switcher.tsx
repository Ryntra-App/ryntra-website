"use client";

import { Check, Laptop, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Theme = "system" | "light" | "dark";

const choices = [
  { value: "system", label: "System", icon: Laptop },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
] as const;

function readTheme(): Theme {
  const stored = localStorage.getItem("ryntra-theme");
  return stored === "light" || stored === "dark" ? stored : "system";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;
  localStorage.setItem("ryntra-theme", theme);
}

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const initialTheme = readTheme();
      setTheme(initialTheme);
      applyTheme(initialTheme);
    });
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const CurrentIcon =
    theme === "dark" ? Moon : theme === "light" ? Sun : Laptop;

  return (
    <div className="theme-switcher" ref={rootRef}>
      <button
        className="icon-button"
        type="button"
        aria-label="Choose color theme"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((value) => !value)}
      >
        <CurrentIcon aria-hidden="true" size={18} />
      </button>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="theme-menu"
            role="menu"
            aria-label="Color theme"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            {choices.map((choice) => {
              const Icon = choice.icon;
              return (
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={theme === choice.value}
                  key={choice.value}
                  onClick={() => {
                    setTheme(choice.value);
                    applyTheme(choice.value);
                    setIsOpen(false);
                  }}
                >
                  <Icon aria-hidden="true" size={17} />
                  <span>{choice.label}</span>
                  {theme === choice.value ? (
                    <Check aria-hidden="true" size={16} />
                  ) : (
                    <span className="menu-check-spacer" />
                  )}
                </button>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
