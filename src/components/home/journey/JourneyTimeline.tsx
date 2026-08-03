"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StepBadge } from "@/components/ui/StepBadge";
import {
  ClipboardList,
  Compass,
  Handshake,
  Key,
  MessageSquare,
  Search,
  FileCheck,
  Users,
} from "lucide-react";
import { EASE_SMOOTH } from "@/lib/motion";
import type { JourneyStep } from "@/types/journey";

interface JourneyTimelineProps {
  steps: JourneyStep[];
}

const iconMap = {
  ClipboardList,
  Compass,
  Handshake,
  Key,
  MessageSquare,
  Search,
  FileCheck,
  Users,
} as const;

export function JourneyTimeline({ steps }: JourneyTimelineProps) {
  const shouldReduceMotion = useReducedMotion();

  const lineVariant = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 1.4,
        ease: EASE_SMOOTH,
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const dotItem = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: EASE_SMOOTH },
    },
  };

  const contentItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_SMOOTH },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      className="relative"
    >
      <motion.div
        variants={lineVariant}
        className="absolute left-0 right-0 top-[7px] hidden h-[2px] origin-left bg-bgPrimary lg:block"
      />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  sm:gap-8 lg:gap-6">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon];
          return (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <motion.span
                variants={dotItem}
                className="relative z-10 hidden h-3.5 w-3.5 rounded-full border-2 border-primary bg-gold-gradient lg:block"
              />

              <motion.div
                variants={contentItem}
                className="mt-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-bgBorder bg-bgPrimary backdrop-blur-sm"
              >
                <Icon size={22} strokeWidth={1.75} className="text-primary" />
              </motion.div>

              <motion.div variants={contentItem} className="mt-4 ">
                <StepBadge step={index + 1} />
                <h3 className="mt-2 font-heading font-semibold sm:text-xl text-lg text-text">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-sm font-body text-body-sm text-text-secondary lg:max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
