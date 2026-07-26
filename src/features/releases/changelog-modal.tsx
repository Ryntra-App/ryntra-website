"use client";

import { ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ReleaseMarkdown } from "./release-markdown";
import type { Release } from "./release.types";
import { formatDate } from "@/lib/format";

type ChangelogModalProps = {
  release: Release;
};

export function ChangelogModal({ release }: ChangelogModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="text-button"
        onClick={() => setIsOpen(true)}
      >
        Quick view
      </button>
      <AnimatePresence>
        {isOpen ? (
          <div className="modal-layer">
            <motion.button
              className="modal-backdrop"
              type="button"
              aria-label="Close release notes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              ref={dialogRef}
              className="changelog-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`release-${release.id}-title`}
              initial={{ opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              transition={{ duration: 0.18 }}
            >
              <header>
                <div>
                  <span>{formatDate(release.publishedAt)}</span>
                  <h2 id={`release-${release.id}-title`}>{release.name}</h2>
                </div>
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Close release notes"
                  onClick={() => {
                    setIsOpen(false);
                    triggerRef.current?.focus();
                  }}
                >
                  <X aria-hidden="true" size={20} />
                </button>
              </header>
              <div className="modal-scroll">
                <ReleaseMarkdown>{release.body}</ReleaseMarkdown>
              </div>
              <footer>
                <Link href={`/changelog/${encodeURIComponent(release.tag)}`}>
                  Full release page
                </Link>
                <a href={release.htmlUrl} target="_blank" rel="noreferrer">
                  GitHub
                  <ExternalLink aria-hidden="true" size={15} />
                </a>
              </footer>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
