"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  amount?: number;
  delay?: number;
}

export function Reveal({
  children,
  className,
  variants = fadeUp,
  amount = 0.3,
  delay = 0,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={
        shouldReduceMotion
          ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.2 } },
            }
          : variants
      }
      transition={{ delay: shouldReduceMotion ? 0 : delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
