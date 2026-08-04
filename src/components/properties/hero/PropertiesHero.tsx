"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { GridPattern } from "@/components/ui/GridPattern";
import { PROPERTIES_HERO_CONTENT } from "@/data/properties/properties-hero";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";
import { Magnetic } from "@/components/ui/Magnetic";

export function PropertiesHero() {
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

  const imageIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 1.06 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: DURATION.cinematic,
        ease: EASE_SMOOTH,
        delay: shouldReduceMotion ? 0 : 0.4,
      },
    },
  };

  return (
    <section className="relative flex min-h-[85vh] w-full items-center flex-col justify-center overflow-hidden bg-hero-gradient pb-0 pt-32 sm:pt-40">
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
            <Eyebrow align="center">{PROPERTIES_HERO_CONTENT.eyebrow}</Eyebrow>
          </motion.div>

          <div className="mt-5 overflow-hidden">
            <motion.h1
              variants={maskItem}
              className="font-heading sm:text-5xl text-3xl font-semibold leading-tight text-text"
            >
              {PROPERTIES_HERO_CONTENT.headingSegments.map((segment, i) => (
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
            {PROPERTIES_HERO_CONTENT.description}
          </motion.p>

          <motion.div
            variants={fadeItem}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Magnetic>
              <Button
                href={PROPERTIES_HERO_CONTENT.primaryCta.href}
                variant="primary"
                size="md"
                icon={Search}
              >
                {PROPERTIES_HERO_CONTENT.primaryCta.label}
              </Button>
            </Magnetic>
            <Button
              href={PROPERTIES_HERO_CONTENT.secondaryCta.href}
              variant="ghost"
              size="md"
              icon={ArrowRight}
            >
              {PROPERTIES_HERO_CONTENT.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageIn}
        className="relative z-0 mt-10 h-[220px] w-full sm:h-[320px] lg:h-[420px]"
      >
        <Image
          src={PROPERTIES_HERO_CONTENT.image}
          alt="Dubai skyline featuring the Burj Khalifa at night"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </motion.div>
    </section>
  );
}
