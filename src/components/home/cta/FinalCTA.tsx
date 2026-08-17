"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { EASE_SMOOTH } from "@/lib/motion";
import { Magnetic } from "@/components/ui/Magnetic";

interface FinalCTAProps {
  image: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryAction: string;
  primaryHref: string;
  secondaryAction: string;
  secondaryHref: string;
}

export function FinalCTA({
  image,
  eyebrow,
  title,
  highlight,
  description,
  primaryAction,
  primaryHref,
  secondaryAction,
  secondaryHref,
}: FinalCTAProps) {
  const shouldReduceMotion = useReducedMotion();
  const parts = highlight ? title.split(highlight) : [title];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE_SMOOTH }}
        className="relative overflow-hidden rounded-lg border border-border"
      >
        <Image
          src={image}
          alt=""
          fill
          quality={90}
          sizes="(min-width: 640px) 30vw, 90vw"
          className="object-cover blur-[2px] scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative flex flex-col items-center px-6 py-16 text-center sm:px-10 sm:py-20 lg:py-24"
        >
          <motion.div variants={item}>
            <Eyebrow align="center">{eyebrow}</Eyebrow>
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-5 max-w-2xl font-heading sm:text-h2 text-2xl font-semibold leading-tight text-text"
          >
            {parts.length > 1 ? (
              <>
                {parts[0]}
                <span className="text-primary">{highlight}</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl font-body sm:text-body text-sm text-text-secondary"
          >
            {description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Magnetic>
              <Button
                href={primaryHref}
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                {primaryAction}
              </Button>
            </Magnetic>
            <Button
              href={secondaryHref}
              target="_blank"
              variant="ghost"
              size="md"
              icon={FaWhatsapp}
            >
              {secondaryAction}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
