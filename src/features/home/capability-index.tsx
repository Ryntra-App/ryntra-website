"use client";

import { motion, useReducedMotion } from "motion/react";

const capabilities = [
  {
    title: "Publish",
    body: "Edit project details, versions, files, dependencies and galleries.",
  },
  {
    title: "Measure",
    body: "Follow downloads, views, playtime, revenue and project-level trends.",
  },
  {
    title: "Coordinate",
    body: "Manage organizations, project teams, ownership and invitations.",
  },
  {
    title: "Respond",
    body: "Open review results and project activity from a relevant notification.",
  },
] as const;

export function CapabilityIndex() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="capability-index" aria-labelledby="capability-title">
      <div className="capability-intro">
        <p className="section-label">Workflow</p>
        <h2 id="capability-title">Project operations, without the desktop.</h2>
        <p>
          Publishing, statistics, permissions and review activity stay in one
          mobile workspace.
        </p>
      </div>
      <ol>
        {capabilities.map((capability, index) => (
          <motion.li
            key={capability.title}
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : index * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="capability-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{capability.title}</h3>
            <p>{capability.body}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
