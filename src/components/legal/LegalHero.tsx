"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ShineGrid } from "@/components/ui/ShineGrid";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";

interface LegalHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
}

export function LegalHero({
  eyebrow,
  title,
  description,
  lastUpdated,
}: LegalHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };
  const fadeItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
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
      transition: { duration: DURATION.cinematic, ease: EASE_SMOOTH },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-background pb-12 pt-32 sm:pb-16 sm:pt-40">
      <ShineGrid />

      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeItem}>
            <Eyebrow align="center">{eyebrow}</Eyebrow>
          </motion.div>

          <div className="mt-5 overflow-hidden">
            <motion.h1
              variants={maskItem}
              className="font-heading text-h1 font-semibold leading-tight text-text"
            >
              {title}
            </motion.h1>
          </div>

          <motion.p
            variants={fadeItem}
            className="mx-auto mt-5 max-w-xl font-body text-sm text-text-secondary"
          >
            {description}
          </motion.p>

          <motion.p
            variants={fadeItem}
            className="mt-4 font-body text-caption uppercase tracking-widest text-muted"
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
