"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SplitSectionHeading } from "@/components/ui/SplitSectionHeading";
import { ExpertiseCard } from "@/components/about/expertise/ExpertiseCard";
import {
  OUR_EXPERTISE_CONTENT,
  OUR_EXPERTISE_ITEMS,
} from "@/data/about/expertise";
import { EASE_SMOOTH } from "@/lib/motion";

export function OurExpertise() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section>
      <SplitSectionHeading
        eyebrow={OUR_EXPERTISE_CONTENT.eyebrow}
        title={OUR_EXPERTISE_CONTENT.title}
        highlight={OUR_EXPERTISE_CONTENT.highlight}
        description={OUR_EXPERTISE_CONTENT.description}
        ctaLabel={OUR_EXPERTISE_CONTENT.ctaLabel}
        ctaHref={OUR_EXPERTISE_CONTENT.ctaHref}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4"
      >
        {OUR_EXPERTISE_ITEMS.map((expertiseItem, index) => (
          <motion.div key={expertiseItem.id} variants={item}>
            <ExpertiseCard item={expertiseItem} priority={index < 2} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
