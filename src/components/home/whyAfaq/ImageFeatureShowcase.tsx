"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";
import type { ShowcaseItem } from "@/types/showcase";

interface ImageFeatureShowcaseProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  items: ShowcaseItem[];
  autoPlayInterval?: number;
}

export function ImageFeatureShowcase({
  eyebrow,
  title,
  highlight,
  description,
  items,
  autoPlayInterval = 4500,
}: ImageFeatureShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [paused, items.length, autoPlayInterval]);

  const activeItem = items[activeIndex];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
        className="mx-auto"
        highlight={highlight}
      />

      <div className="mt-24 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE_SMOOTH }}
          className="relative overflow-hidden rounded-md border border-border aspect-[4/3] md:aspect-[5/4] lg:aspect-auto lg:min-h-[650px]"
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.7,
                ease: EASE_SMOOTH,
              }}
              className="absolute inset-0"
            >
              <Image
                src={activeItem.image}
                alt={activeItem.imageLabel ?? activeItem.title}
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {activeItem.imageLabel && (
            <span className="absolute bottom-5 left-5 font-heading text-h4 text-white">
              {activeItem.imageLabel}
            </span>
          )}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-3"
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.button
                key={item.id}
                type="button"
                variants={fadeUp}
                onMouseEnter={() => {
                  setPaused(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => {
                  setPaused(true);
                  setActiveIndex(index);
                }}
                onBlur={() => setPaused(false)}
                aria-current={isActive}
                className={cn(
                  "relative overflow-hidden border-border rounded-md border p-4 text-left transition-colors duration-400 ease-smooth",
                  isActive ? " bg-elevated" : " bg-card hover:bg-elevated/60",
                )}
              >
                <span
                  className={cn(
                    "pointer-events-none absolute -right-1 -top-2 font-heading text-5xl font-semibold transition-colors duration-400",
                    isActive ? "text-muted" : "text-border",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className={cn(
                    "relative font-heading text-lg transition-colors duration-400",
                    isActive ? "text-primary" : "text-text",
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "relative mt-2 max-w-md font-body md:text-body-sm text-xs text-subtle",
                    isActive ? "text-text" : "text-subtle",
                  )}
                >
                  {item.description}
                </p>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
