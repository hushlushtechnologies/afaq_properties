"use client";

import { useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function ParallaxImage({
  children,
  className,
  strength = 14,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const disabled = shouldReduceMotion || isMobile;

  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    disabled ? [0, 0] : [-strength, strength],
  );

  // Keeps the raster image aligned to physical CSS pixels
  // instead of continuously rendering at fractional positions.
  const y = useTransform(rawY, (value) => Math.round(value));

  return (
    <div
      ref={ref}
      className={cn("relative isolate overflow-hidden", className)}
    >
      <motion.div style={{ y }} className="absolute -inset-y-6 inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}
