"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DeveloperMarquee } from "@/components/home/developer/DeveloperMarquee";
import { EASE_SMOOTH } from "@/lib/motion";
import developersData from "@/data/hero/developers.json";
import type { Developer } from "@/types/developer";

export function DeveloperNetwork() {
  const shouldReduceMotion = useReducedMotion();
  const developers = developersData as Developer[];

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE_SMOOTH },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-14"
    >
      <div className="max-w-sm">
        <Eyebrow>Our Developer Network</Eyebrow>
        <h2 className="mt-4 font-heading font-semibold text-xl text-text">
          Partnering With Leading{" "}
          <span className="text-primary">UAE Developers</span>
        </h2>
        <p className="mt-3 font-body md:text-body-sm text-xs text-text-secondary">
          We connect you with exceptional property opportunities from some of
          the UAE&apos;s most respected and trusted developers.
        </p>
      </div>

      <DeveloperMarquee developers={developers} />
    </motion.div>
  );
}
