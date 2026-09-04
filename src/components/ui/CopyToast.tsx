"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

interface CopyToastProps {
  visible: boolean;
  label: string;
  sublabel?: string;
  position?: "top" | "bottom";
  className?: string;
}

export function CopyToast({
  visible,
  label,
  sublabel,
  position = "top",
  className,
}: CopyToastProps) {
  const shouldReduceMotion = useReducedMotion();
  const isTop = position === "top";
  const offset = shouldReduceMotion ? 0 : isTop ? 8 : -8;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: offset,
            scale: shouldReduceMotion ? 1 : 0.95,
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: offset, scale: shouldReduceMotion ? 1 : 0.95 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.25,
            ease: EASE_SMOOTH,
          }}
          role="status"
          aria-live="polite"
          className={cn(
            "absolute left-1/2 z-20 w-max max-w-[220px] -translate-x-1/2 rounded-md border border-primary/40 bg-card px-4 py-2.5 text-center shadow-lg",
            isTop ? "bottom-full mb-3" : "top-full mt-3",
            className,
          )}
        >
          <span className="flex items-center justify-center gap-2 font-body text-body-sm font-medium text-text">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-success text-success">
              <Check size={11} />
            </span>
            {label}
          </span>
          {sublabel && (
            <span className="mt-0.5 block font-body text-caption text-text-secondary">
              {sublabel}
            </span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
