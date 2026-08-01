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
  strength = 20,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const isMobile = useMediaQuery("(max-width: 767px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const disabled = shouldReduceMotion || isMobile;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    disabled ? [0, 0] : [-strength, strength],
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{
          y,
          position: "absolute",
          left: 0,
          right: 0,
          top: -strength - 8,
          bottom: -strength - 8,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
