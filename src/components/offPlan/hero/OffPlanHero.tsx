"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

import { ShineGrid } from "@/components/ui/ShineGrid";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

interface HeroHeadingSegment {
  text: string;
  highlight?: boolean;
}

interface HeroCta {
  label: string;
  href: string;
  icon?: LucideIcon;
  target?: string;
  variant?: "primary" | "outline" | "secondary";
}

interface PageHeroProps {
  eyebrow: string;
  headingSegments: HeroHeadingSegment[];
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  image?: string;
  imageAlt?: string;
}

export function PageHero({
  eyebrow,
  headingSegments,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
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
    <section
      className={cn(
        "relative w-full  bg-hero-gradient pb-16 pt-32 sm:pb-20 sm:pt-40",
      )}
    >
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
              className="font-heading sm:text-5xl text-3xl font-semibold leading-tight text-text"
            >
              {headingSegments.map((segment, i) => (
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
            {description}
          </motion.p>

          <motion.div
            variants={fadeItem}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Magnetic>
              <Button
                href={primaryCta.href}
                target={primaryCta.target}
                variant={primaryCta.variant ?? "primary"}
                size="md"
                icon={ArrowRight}
              >
                {primaryCta.label}
              </Button>
            </Magnetic>
            <Button
              href={secondaryCta.href}
              target={secondaryCta.target}
              variant={secondaryCta.variant ?? "ghost"}
              size="md"
              icon={MessageCircle}
            >
              {secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
