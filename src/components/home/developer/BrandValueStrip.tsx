"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND_VALUES, BRAND_VALUE_IMAGE } from "@/data/brand-values";
import { EASE_SMOOTH } from "@/lib/motion";

export function BrandValueStrip() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_SMOOTH },
    },
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: EASE_SMOOTH },
    },
  };

  return (
    <div className="mt-20 grid grid-cols-1 gap-10  lg:grid-cols-[2.4fr_1fr] lg:gap-14 ">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col divide-y divide-border "
      >
        {BRAND_VALUES.map((value) => {
          const parts = value.highlight
            ? value.title.split(value.highlight)
            : [value.title];
          return (
            <motion.div
              key={value.id}
              variants={fadeUp}
              className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-2 sm:gap-6"
            >
              <h3 className="font-heading text-lg text-text">
                {parts.length > 1 ? (
                  <>
                    {parts[0]}
                    <span className="text-primary">{value.highlight}</span>
                    {parts[1]}
                  </>
                ) : (
                  value.title
                )}
              </h3>
              <p className="font-body md:text-body-sm text-xs  text-text-secondary">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative h-72 md:w-80 w-full overflow-hidden rounded-md border border-border lg:h-auto"
      >
        <Image
          src={BRAND_VALUE_IMAGE}
          alt="Dubai skyline at dusk"
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
