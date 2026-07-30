"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LocationCard } from "@/components/home/location/LocationCard";
import { Section } from "@/components/layout/Section";
import { getAvailableLocations } from "@/lib/locations";
import { EASE_SMOOTH } from "@/lib/motion";

export function LocationExplorer() {
  const shouldReduceMotion = useReducedMotion();
  const locations = getAvailableLocations();

  if (locations.length === 0) return null;

  const [featured, ...rest] = locations;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_SMOOTH } },
  };

  return (
    <Section>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-10 lg:flex-row lg:gap-14"
      >
        <motion.div variants={item} className="flex shrink-0 flex-col justify-center lg:w-64">
          <span className="mb-4 text-2xl" aria-hidden="true">
            🇦🇪
          </span>
          <h2 className="font-heading text-h2 text-text">
            Find Your Place <br /> in the <span className="text-primary">UAE</span>
          </h2>
          <p className="mt-4 font-body text-body text-text-secondary">
            Explore properties across the UAE&apos;s most sought-after cities and communities.
          </p>
        </motion.div>

        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-2 sm:h-[520px]">
          <motion.div variants={item} className="h-72 sm:col-span-1 sm:row-span-2 sm:h-full">
            <LocationCard location={featured} priority large className="h-full" />
          </motion.div>

          {rest.map((location) => (
            <motion.div key={location.slug} variants={item} className="h-44 sm:h-full">
              <LocationCard location={location} className="h-full" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}