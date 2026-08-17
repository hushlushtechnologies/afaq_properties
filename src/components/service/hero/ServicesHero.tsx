"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { StepBadge } from "@/components/ui/StepBadge";
import { GridPattern } from "@/components/ui/GridPattern";
import { SERVICES_HERO_CONTENT } from "@/data/service/services-hero";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";
import { Magnetic } from "@/components/ui/Magnetic";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export function ServicesHero() {
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
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.92,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: DURATION.cinematic,
        ease: EASE_SMOOTH,
        delay: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  return (
    <section className="relative w-full  overflow-hidden bg-hero-gradient pb-16 pt-40 sm:pb-24 sm:pt-40 lg:flex lg:min-h-screen lg:items-center lg:pt-24">
      <GridPattern className="pointer-events-none absolute inset-0 h-full w-full sm:-top-56 -top-96 " />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000614] via-black/40 to-transparent" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={fadeItem}>
              <Eyebrow>{SERVICES_HERO_CONTENT.eyebrow}</Eyebrow>
            </motion.div>

            <div className="mt-5 overflow-hidden">
              <motion.h1
                variants={maskItem}
                className="font-heading  sm:text-5xl text-3xl font-semibold leading-tight text-text"
              >
                {SERVICES_HERO_CONTENT.headingSegments.map((segment, i) => (
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
              className="mt-5 max-w-md font-body  sm:text-body text-sm text-text-secondary"
            >
              {SERVICES_HERO_CONTENT.description}
            </motion.p>

            <motion.div
              variants={fadeItem}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Magnetic>
                <Button
                  href={SERVICES_HERO_CONTENT.primaryCta.href}
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  className="rounded"
                >
                  {SERVICES_HERO_CONTENT.primaryCta.label}
                </Button>
              </Magnetic>
              <Button
                href={SERVICES_HERO_CONTENT.secondaryCta.href}
                target="_blank"
                variant="ghost"
                size="md"
                icon={FaWhatsapp}
                className="rounded"
              >
                {SERVICES_HERO_CONTENT.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.div
              variants={fadeItem}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            >
              {SERVICES_HERO_CONTENT.tags.map((tag) => (
                <StepBadge key={tag} label={tag} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageIn}
            className="relative z-10 mx-auto h-[320px] w-full max-w-sm sm:h-[420px] lg:h-[520px] lg:max-w-none"
          >
            <Image
              src={SERVICES_HERO_CONTENT.image}
              alt="Modern architectural building representing Afaq Al Manzil's real estate services"
              fill
              priority
              quality={90}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
      <ScrollIndicator />
    </section>
  );
}
