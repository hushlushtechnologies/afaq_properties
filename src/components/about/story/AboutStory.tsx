"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/animation/ParallaxImage";
import { ABOUT_STORY_CONTENT } from "@/data/about/about-story";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";
import { Magnetic } from "@/components/ui/Magnetic";

export function AboutStory() {
  const shouldReduceMotion = useReducedMotion();
  const parts = ABOUT_STORY_CONTENT.highlight
    ? ABOUT_STORY_CONTENT.title.split(ABOUT_STORY_CONTENT.highlight)
    : [ABOUT_STORY_CONTENT.title];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
  };
  const fadeItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
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
      transition: { duration: DURATION.reveal, ease: EASE_SMOOTH },
    },
  };
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
      <div className="grid grid-cols-1  lg:h-[999px] items-center gap-10 lg:grid-cols-[0.85fr_1.3fr_0.85fr]  lg:gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageIn}
          className="relative order-1 h-64 md:w-80 w-full  overflow-hidden rounded-md border border-border sm:h-80 lg:order-1  sm:self-start"
        >
          <ParallaxImage className="h-full w-full">
            <Image
              src={ABOUT_STORY_CONTENT.imageTop}
              alt="Modern living room interior at Afaq Al Manzil"
              fill
              quality={90}
              sizes="(min-width: 1024px) 26vw, 100vw"
              className="object-cover"
            />
          </ParallaxImage>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="order-3 mx-auto max-w-xl text-center lg:order-2"
        >
          <motion.div variants={fadeItem}>
            <Eyebrow align="center">{ABOUT_STORY_CONTENT.eyebrow}</Eyebrow>
          </motion.div>

          <div className="mt-4 overflow-hidden">
            <motion.h2
              variants={maskItem}
              className="font-heading sm:text-4xl text-2xl font-semibold leading-tight text-text"
            >
              {parts.length > 1 ? (
                <>
                  {parts[0]}
                  <span className="text-primary">
                    {ABOUT_STORY_CONTENT.highlight}
                  </span>
                  {parts[1]}
                </>
              ) : (
                ABOUT_STORY_CONTENT.title
              )}
            </motion.h2>
          </div>

          <motion.div variants={fadeItem} className="mt-5 flex flex-col gap-3">
            {ABOUT_STORY_CONTENT.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="font-body sm:text-body-sm text-xs text-text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div variants={fadeItem} className="mt-6">
            <Magnetic>
              <Button
                href={ABOUT_STORY_CONTENT.cta.href}
                variant="primary"
                size="md"
                icon={ArrowRight}
                className="rounded"
              >
                {ABOUT_STORY_CONTENT.cta.label}
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageIn}
          className="relative  h-64  md:w-80 w-full overflow-hidden rounded-md border border-border sm:h-80 order-3  lg:justify-self-end lg:self-end"
        >
          <ParallaxImage className="h-full w-full">
            <Image
              src={ABOUT_STORY_CONTENT.imageBottom}
              alt="Modern office interior at Afaq Al Manzil"
              fill
              quality={90}
              sizes="(min-width: 1024px) 26vw, 100vw"
              className="object-cover"
            />
          </ParallaxImage>
        </motion.div>
      </div>
    </Section>
  );
}
