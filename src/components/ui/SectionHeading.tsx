"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  highlight?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  highlight,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const parts = highlight ? title.split(highlight) : [title];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
  };
  const fadeItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.reveal, ease: EASE_SMOOTH },
    },
  };
  const maskItem = {
    hidden: { y: shouldReduceMotion ? 0 : "100%" },
    visible: {
      y: "0%",
      transition: { duration: DURATION.reveal, ease: EASE_SMOOTH },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.div variants={fadeItem}>
          <Eyebrow align={align} className="mb-4">
            {eyebrow}
          </Eyebrow>
        </motion.div>
      )}

      <div className="overflow-hidden">
        <motion.h2
          variants={maskItem}
          className="font-semibold md:text-2xl text-xl text-text"
        >
          {parts.length > 1 ? (
            <>
              {parts[0]}
              <span className="text-primary">{highlight}</span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </motion.h2>
      </div>

      {description && (
        <motion.p
          variants={fadeItem}
          className="mt-4 font-medium md:text-sm text-xs text-text-secondary"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
