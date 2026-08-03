"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ABOUT_STATS } from "@/data/about-stats";
import { ABOUT_HERO_CONTENT } from "@/data/about/about-hero";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";
import { Magnetic } from "@/components/ui/Magnetic";

export function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.4,
      },
    },
  };

  const fadeItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.cinematic, ease: EASE_SMOOTH },
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
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-background">
      <Image
        src={ABOUT_HERO_CONTENT.image}
        alt="Afaq"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-background" />

      <motion.p
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: shouldReduceMotion ? 0 : 0.9,
          ease: EASE_SMOOTH,
        }}
        className="text-stroke pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-heading text-[14vw] font-semibold uppercase leading-none sm:text-[9vw] lg:text-[7vw]"
      >
        {ABOUT_HERO_CONTENT.brandText}
      </motion.p>

      <Container className="relative z-10 py-24 sm:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeItem}>
            <Eyebrow align="center">{ABOUT_HERO_CONTENT.eyebrow}</Eyebrow>
          </motion.div>

          <div className="mt-5 overflow-hidden">
            <motion.h1
              variants={maskItem}
              className="inline-block font-heading text-3xl font-semibold sm:text-5xl leading-tight text-text"
            >
              {ABOUT_HERO_CONTENT.headingSegments.map((segment, i) => (
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
            className="mx-auto mt-5 max-w-2xl font-body text-sm text-text-secondary"
          >
            {ABOUT_HERO_CONTENT.description}
          </motion.p>

          <motion.div
            variants={fadeItem}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Magnetic>
              <Button
                href={ABOUT_HERO_CONTENT.primaryCta.href}
                variant="primary"
                size="md"
                icon={ArrowRight}
                className="rounded"
              >
                {ABOUT_HERO_CONTENT.primaryCta.label}
              </Button>
            </Magnetic>
            <Button
              href={ABOUT_HERO_CONTENT.secondaryCta.href}
              target="_blank"
              variant="ghost"
              size="md"
              icon={MessageCircle}
              className="rounded"
            >
              {ABOUT_HERO_CONTENT.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-12 flex-wrap grid max-w-md grid-cols-3 gap-2 sm:gap-6"
          >
            {ABOUT_STATS.map((stat) => (
              <motion.div
                key={stat.id}
                variants={fadeItem}
                className="text-center"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-heading text-h3 font-semibold text-primary"
                />
                <p className="mt-1 font-body text-xs text-text-secondary">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
