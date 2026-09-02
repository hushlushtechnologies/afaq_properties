"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ABOUT_STATS } from "@/data/hero/about-stats";
import { EASE_SMOOTH } from "@/lib/motion";
import { ParallaxImage } from "@/components/animation/ParallaxImage";
import { Magnetic } from "@/components/ui/Magnetic";

const CONTENT = {
  eyebrow: "About Us",
  titleLines: [
    { text: "About AFAQ" },
    { text: "Al Manzil " },
    { text: "Properties", highlight: true },
  ],
  paragraphs: [
    "AFAQ Al Manzil Properties is a dynamic real estate consultancy and property solutions company dedicated to delivering exceptional value to buyers, sellers, investors, and tenants across the UAE and beyond.",
    "With extensive market knowledge, strategic developer partnerships, and a client-focused approach, we help individuals and businesses identify opportunities that align with their financial objectives and lifestyle aspirations.",
    "Our team of experienced real estate professionals provides personalized guidance, market insights, and investment strategies designed to minimize returns and minimize risks.",
    "We understand that every client has unique requirements. That's why we offer customized solutions, ensuring every property transaction is seamless, transparent, and rewarding.",
  ],
  primaryCta: { label: "Discover Our Story", href: "/about-us" },
  secondaryCta: { label: "Explore Properties", href: "/properties" },
  image: "/assets/office/reception.jpeg",
};

export function AboutAfaq() {
  const shouldReduceMotion = useReducedMotion();

  const fromLeft = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: EASE_SMOOTH },
    },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE_SMOOTH }}
          className="relative h-72 w-full overflow-hidden rounded-md border border-border sm:h-96 md:h-[420px] lg:h-[520px]"
        >
          <ParallaxImage className="h-full w-full">
            <Image
              src={CONTENT.image}
              alt="Afaq Al Manzil advisors meeting with clients"
              fill
              priority
              quality={90}
              sizes="(min-width: 640px) 30vw, 90vw"
              className="object-cover"
            />
          </ParallaxImage>
        </motion.div>

        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Eyebrow>{CONTENT.eyebrow}</Eyebrow>

          <h2 className="mt-4 font-heading font-semibold md:text-h2 text-xl leading-tight text-text">
            {CONTENT.titleLines.map((line, i) => (
              <span
                key={i}
                className={line.highlight ? "text-primary" : undefined}
              >
                {line.text}
              </span>
            ))}
          </h2>

          <div className="mt-5 flex flex-col gap-3">
            {CONTENT.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="font-body md:text-body-sm text-xs text-text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Magnetic>
              <Button
                href={CONTENT.primaryCta.href}
                variant="primary"
                size="sm"
                icon={ArrowRight}
              >
                {CONTENT.primaryCta.label}
              </Button>
            </Magnetic>
            <Button href={CONTENT.secondaryCta.href} variant="ghost" size="sm">
              {CONTENT.secondaryCta.label}
            </Button>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-10 grid grid-cols-3 gap-3 sm:gap-4"
          >
            {ABOUT_STATS.map((stat) => (
              <motion.div
                key={stat.id}
                variants={item}
                className="rounded-md border border-border bg-card px-4 py-5 text-center sm:text-left"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-heading text-h3 font-semibold text-primary"
                />
                <p className="mt-1 font-body md:text-body-sm text-xs text-subtle">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
