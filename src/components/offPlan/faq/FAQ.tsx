"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SplitSectionHeading } from "@/components/ui/SplitSectionHeading";
import { EASE_SMOOTH } from "@/lib/motion";
import type { FAQItem } from "@/types/faq";

interface FAQProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  items: FAQItem[];
  mode?: "single" | "multiple";
  defaultOpenIndex?: number | null;
}

export function FAQ({
  eyebrow,
  title,
  highlight,
  description,
  items,
  mode = "single",
  defaultOpenIndex = 0,
}: FAQProps) {
  const shouldReduceMotion = useReducedMotion();
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    defaultOpenIndex !== null ? new Set([defaultOpenIndex]) : new Set(),
  );

  function toggle(index: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (mode === "single") next.clear();
        next.add(index);
      }
      return next;
    });
  }

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section id="faq">
      <SplitSectionHeading
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        description={description}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-20 flex flex-col gap-3 w-full max-w-5xl mx-auto"
      >
        {items.map((faq, index) => {
          const isOpen = openIndexes.has(index);
          const panelId = `faq-panel-${faq.id}`;
          const triggerId = `faq-trigger-${faq.id}`;

          return (
            <motion.div
              key={faq.id}
              variants={item}
              className={cn(
                "overflow-hidden rounded-md border transition-colors duration-300",
                isOpen
                  ? "border-bgPrimary bg-elevated"
                  : "border-border bg-card",
              )}
            >
              <h3>
                <button
                  type="button"
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-body text-sm font-medium transition-colors duration-300",
                      isOpen
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-text-secondary",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 font-heading text-base font-medium text-text">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE_SMOOTH }}
                    className={cn(
                      "shrink-0",
                      isOpen ? "text-primary" : "text-text-secondary",
                    )}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.35,
                      ease: EASE_SMOOTH,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pl-[4.25rem] font-body text-sm text-text-secondary">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
