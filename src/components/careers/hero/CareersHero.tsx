"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { GridPattern } from "@/components/ui/GridPattern";
import { FloatingGallery } from "@/components/careers/hero/FloatingGallery";
import {
  CAREERS_HERO_CONTENT,
  CAREERS_GALLERY_IMAGES,
} from "@/data/careers/careers-hero";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";
import { Magnetic } from "@/components/ui/Magnetic";

export function CareersHero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
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
    <section className="relative w-full overflow-hidden bg-hero-gradient pb-16 pt-32 sm:pb-20 sm:pt-40">
      <GridPattern className="pointer-events-none absolute inset-0 h-full w-full sm:-top-56 -top-96 " />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000614] via-black/40 to-transparent" />

      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeItem}>
            <Eyebrow align="center">{CAREERS_HERO_CONTENT.eyebrow}</Eyebrow>
          </motion.div>

          <div className="mt-5 overflow-hidden">
            <motion.h1
              variants={maskItem}
              className="font-heading sm:text-5xl text-3xl font-semibold leading-tight text-text"
            >
              {CAREERS_HERO_CONTENT.headingSegments.map((segment, i) => (
                <span
                  key={i}
                  className={segment.highlight ? "text-primary" : undefined}
                >
                  {segment.text}
                </span>
              ))}
            </motion.h1>
          </div>

          <motion.p
            variants={fadeItem}
            className="mx-auto mt-5 max-w-xl font-body sm:text-body text-sm text-text-secondary"
          >
            {CAREERS_HERO_CONTENT.description}
          </motion.p>

          <motion.div
            variants={fadeItem}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Magnetic>
              <Button
                href={CAREERS_HERO_CONTENT.primaryCta.href}
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                {CAREERS_HERO_CONTENT.primaryCta.label}
              </Button>
            </Magnetic>
            <Button
              href={CAREERS_HERO_CONTENT.secondaryCta.href}
              variant="ghost"
              size="md"
            >
              {CAREERS_HERO_CONTENT.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        <FloatingGallery
          images={CAREERS_GALLERY_IMAGES}
          className="mt-14 sm:mt-20"
        />
      </Container>
    </section>
  );
}
