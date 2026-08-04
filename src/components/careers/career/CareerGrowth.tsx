"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustPillarsGrid } from "@/components/about/trust/TrustPillarsGrid";
import { ParallaxImage } from "@/components/animation/ParallaxImage";
import {
  CAREER_GROWTH_CONTENT,
  CAREER_GROWTH_ITEMS,
} from "@/data/careers/career-growth";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";

export function CareerGrowth() {
  const shouldReduceMotion = useReducedMotion();

  const imageIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: DURATION.cinematic, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section>
      <SectionHeading
        eyebrow={CAREER_GROWTH_CONTENT.eyebrow}
        title={CAREER_GROWTH_CONTENT.title}
        highlight={CAREER_GROWTH_CONTENT.highlight}
        description={CAREER_GROWTH_CONTENT.description}
        align="center"
        className="mx-auto"
      />

      <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageIn}
          className="relative h-72 w-full overflow-hidden rounded-md border border-border sm:h-96 lg:h-auto"
        >
          <ParallaxImage className="h-full w-full">
            <Image
              src={CAREER_GROWTH_CONTENT.image}
              alt="Afaq Al Manzil team members collaborating in the office"
              fill
              quality={90}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </ParallaxImage>
        </motion.div>

        <TrustPillarsGrid
          items={CAREER_GROWTH_ITEMS}
          columns={2}
          className="mt-0"
        />
      </div>
    </Section>
  );
}
