"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_SMOOTH } from "@/lib/motion";

interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: EASE_SMOOTH }}
      className="mx-auto mt-10 flex max-w-sm flex-col items-center text-center"
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <svg
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="44"
            cy="44"
            r="43"
            stroke="var(--color-border)"
            strokeWidth="1"
          />
          <rect
            x="24"
            y="32"
            width="40"
            height="30"
            rx="4"
            stroke="var(--color-primary)"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <path
            d="M24 40 L44 50 L64 40"
            stroke="var(--color-primary)"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 32 V28 a4 4 0 0 1 4 -4 h10 a4 4 0 0 1 4 4 v4"
            stroke="var(--color-primary)"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="44"
            cy="46"
            r="2"
            fill="var(--color-primary)"
            fillOpacity="0.6"
          />
        </svg>
      </motion.div>

      <h3 className="mt-5 font-heading text-h4 text-text">{title}</h3>
      {description && (
        <p className="mt-2 font-body text-body-sm text-text-secondary">
          {description}
        </p>
      )}
    </motion.div>
  );
}
