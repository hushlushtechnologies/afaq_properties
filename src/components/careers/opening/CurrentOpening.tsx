"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SplitSectionHeading } from "@/components/ui/SplitSectionHeading";
import { JobCard } from "@/components/careers/opening/JobCard";
import { getPublishedCareers } from "@/lib/careers";
import { CAREERS_EMAIL } from "@/config/careers";
import { EmptyState } from "@/components/ui/EmptyState";
import { EASE_SMOOTH } from "@/lib/motion";

export function CurrentOpenings() {
  const shouldReduceMotion = useReducedMotion();
  const careers = getPublishedCareers();

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
    <Section id="openings">
      <SplitSectionHeading
        eyebrow="Current Opportunities"
        title="Find Your Next Opportunity."
        highlight="Opportunity."
        description="Explore our current openings and discover where your skills, experience, and ambitions could take you at Afaq Al Manzil."
        ctaLabel="Discover About Us"
        ctaHref="/about-us"
      />

      {careers.length > 0 ? (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {careers.map((career) => (
            <motion.div key={career.id} variants={item}>
              <JobCard career={career} className="h-full" />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <EmptyState
          title="No Open Positions Right Now"
          description="We're not actively hiring at the moment, but we're always happy to hear from great people. Send us your CV below and we'll keep it on file."
        />
      )}

      <p className="mt-10 text-center font-body text-body-sm text-text-secondary">
        Don&apos;t see a role that fits? Email your CV to{" "}
        <a
          href={`mailto:${CAREERS_EMAIL}`}
          className="text-primary transition-colors duration-300 hover:text-accent"
        >
          {CAREERS_EMAIL}
        </a>
      </p>
    </Section>
  );
}
