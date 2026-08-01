"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Sparkle } from "@/components/ui/Sparkle";
import { Magnetic } from "@/components/ui/Magnetic";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";

interface SplitSectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function SplitSectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  ctaLabel,
  ctaHref,
  className,
}: SplitSectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const parts = highlight ? title.split(highlight) : [title];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
  };
  const fadeItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
      className={cn("flex flex-col gap-6 justify-start  ", className)}
    >
      <div className=" w-full ">
        <motion.div variants={fadeItem}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>

        <div className="mt-4 overflow-hidden">
          <motion.h2
            variants={maskItem}
            className="mt-4 flex items-center gap-3 font-semibold md:text-7xl text-3xl text-text "
          >
            <Sparkle className="h-6 w-6 shrink-0 text-primary" />
            <span>
              {parts.length > 1 ? (
                <>
                  {parts[0]}
                  <span className="text-primary">{highlight}</span>
                  {parts[1]}
                </>
              ) : (
                title
              )}
            </span>
          </motion.h2>
        </div>
      </div>

      <motion.div
        variants={fadeItem}
        className=" lg:text-right w-full flex flex-col md:items-end items-start mt-10"
      >
        <p className="font-medium md:text-sm text-xs text-text-secondary max-w-sm">
          {description}
        </p>
        {ctaLabel && ctaHref && (
          <Magnetic>
            <Button
              href={ctaHref}
              variant="primary"
              size="sm"
              icon={ArrowRight}
              className="mt-4 "
            >
              {ctaLabel}
            </Button>
          </Magnetic>
        )}
      </motion.div>
    </motion.div>
  );
}
