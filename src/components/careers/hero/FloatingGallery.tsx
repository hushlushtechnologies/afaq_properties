"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

interface GalleryImage {
  src: string;
  alt: string;
  size: "sm" | "md" | "lg";
  offset: "up" | "down";
}

interface FloatingGalleryProps {
  images: readonly GalleryImage[];
  className?: string;
}

const SIZE_CLASSES: Record<GalleryImage["size"], string> = {
  sm: "h-28 w-24 sm:h-36 sm:w-32",
  md: "h-36 w-32 sm:h-48 sm:w-40",
  lg: "h-48 w-40 sm:h-64 sm:w-52",
};

export function FloatingGallery({ images, className }: FloatingGalleryProps) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.6,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
      scale: shouldReduceMotion ? 1 : 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: EASE_SMOOTH },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn(
        "flex flex-wrap items-end justify-center gap-3 sm:gap-4",
        className,
      )}
    >
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          variants={item}
          className={cn(
            "relative overflow-hidden rounded-md border border-border shadow-lg",
            SIZE_CLASSES[image.size],
            image.offset === "up"
              ? "self-start sm:-translate-y-4"
              : "sm:translate-y-4",
          )}
        >
          <motion.div
            className="absolute inset-0"
            animate={
              shouldReduceMotion
                ? undefined
                : { y: image.offset === "up" ? [0, -8, 0] : [0, 8, 0] }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 4 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              quality={90}
              sizes="200px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
