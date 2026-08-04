"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamCard } from "@/components/home/team/TeamCard";
import { EASE_SMOOTH } from "@/lib/motion";
import teamData from "@/data/hero/team.json";
import type { TeamMember } from "@/types/teams";

export function TeamGrid() {
  const shouldReduceMotion = useReducedMotion();
  const team = teamData as TeamMember[];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section id="team">
      <SectionHeading
        eyebrow="Meet Our Team"
        title="The People Behind Your Property Journey"
        highlight="Property Journey"
        description="Behind every successful property journey is a team that listens, understands, and guides you with confidence. Meet the professionals dedicated to helping you find the right property opportunity in the UAE."
        align="center"
        className="mx-auto"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {team.map((member) => (
          <motion.div key={member.id} variants={item} className="relative h-96">
            <TeamCard member={member} className="h-full" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
