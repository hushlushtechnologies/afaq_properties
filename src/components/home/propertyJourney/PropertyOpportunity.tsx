"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Home, TrendingUp } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconFeaturePanel } from "@/components/ui/IconFeaturePanel";
import { DecorativePattern } from "@/components/ui/DecorativePattern";
import { ParallaxImage } from "@/components/animation/ParallaxImage";
import { EASE_SMOOTH } from "@/lib/motion";

const CONTENT = {
  eyebrow: "Your Property Journey",
  title: "The Right Property, The Right Opportunity",
  description:
    "Every property journey is different. Whether you're looking for a place to call home or seeking the right opportunity to grow your portfolio, explore carefully selected properties across the UAE with guidance tailored to your goals.",
  image: "/assets/office/int1.jpg",
  left: {
    icon: Home,
    title: "Find a Place That Feels Like Yours",
    description:
      "From contemporary city apartments to spacious family homes, discover properties in sought-after UAE communities that match your lifestyle, preferences, and the way you want to live.",
    ctaLabel: "Explore Properties",
    ctaHref: "/properties",
  },
  right: {
    icon: TrendingUp,
    title: "Invest in Your Future",
    description:
      "Explore carefully selected off-plan and secondary properties across the UAE, offering opportunities to build your portfolio and make informed real estate decisions with the right guidance.",
    ctaLabel: "Enquiry Now",
    ctaHref: "/contact-us",
  },
};

export function PropertyOpportunity() {
  const shouldReduceMotion = useReducedMotion();

  const fromLeft = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: EASE_SMOOTH },
    },
  };
  const fromRight = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: EASE_SMOOTH },
    },
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section className="relative overflow-hidden bg-hero-gradient">
      <DecorativePattern className="pointer-events-none absolute left-1/2 bottom-0 pt-80 h-[900px] w-[900px] -translate-x-1/2 " />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
        className="relative"
      >
        <SectionHeading
          eyebrow={CONTENT.eyebrow}
          title={CONTENT.title}
          description={CONTENT.description}
          highlight="Right Opportunity"
          align="center"
          className="relative mx-auto"
        />
      </motion.div>

      <div className="relative mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fromLeft}
          className="order-2 md:order-1 lg:order-1"
        >
          <IconFeaturePanel {...CONTENT.left} align="left" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
          className="order-1 sm:order-2"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-border shadow-lg">
            <ParallaxImage className="h-full w-full">
              <Image
                src={CONTENT.image}
                alt="Afaq"
                fill
                priority
                quality={90}
                sizes="(min-width: 640px) 30vw, 90vw"
                className="object-cover"
              />
            </ParallaxImage>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fromRight}
          className="order-3 md:order-2 lg:order-3"
        >
          <IconFeaturePanel {...CONTENT.right} align="right" />
        </motion.div>
      </div>
    </Section>
  );
}
