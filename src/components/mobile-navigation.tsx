"use client";

import { Github, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { en } from "@/content/en";
import { site } from "@/lib/site";

const links = [
  { href: "/#features", label: en.navigation.features },
  { href: "/#analytics", label: en.navigation.analytics },
  { href: "/download", label: en.navigation.download },
  { href: "/changelog", label: en.navigation.changelog },
  { href: "/docs", label: en.navigation.docs },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusable?.[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <div className="mobile-navigation">
      <button
        ref={triggerRef}
        className="icon-button"
        type="button"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <Menu aria-hidden="true" size={21} />
      </button>
      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              className="menu-backdrop"
              type="button"
              aria-label="Close navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              ref={dialogRef}
              className="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
            >
              <div className="mobile-menu-heading">
                <span>Navigate</span>
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Close navigation"
                  onClick={() => {
                    setIsOpen(false);
                    triggerRef.current?.focus();
                  }}
                >
                  <X aria-hidden="true" size={20} />
                </button>
              </div>
              <nav aria-label="Mobile navigation">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a href={site.github} target="_blank" rel="noreferrer">
                  <span>GitHub</span>
                  <Github aria-hidden="true" size={18} />
                </a>
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
