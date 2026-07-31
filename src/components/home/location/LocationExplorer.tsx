"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LocationCard } from "@/components/home/location/LocationCard";
import { Section } from "@/components/layout/Section";
import { getFeaturedCommunities } from "@/lib/locations";
import { EASE_SMOOTH } from "@/lib/motion";
import { UaeFlagBadge } from "@/components/ui/UAEFlag";

export function LocationExplorer() {
  const shouldReduceMotion = useReducedMotion();
  const communities = getFeaturedCommunities("dubai", 5);

  if (communities.length === 0) return null;

  const [featured, ...rest] = communities;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section id="locations">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-10 lg:flex-row lg:gap-14"
      >
        <motion.div
          variants={item}
          className="flex shrink-0 flex-col justify-end lg:w-64"
        >
          <UaeFlagBadge className="h-14 w-14 mb-6" />
          <h2 className="font-semibold md:text-2xl text-xl text-text">
            Find Your Place <br /> in the{" "}
            <span className="text-primary">Dubai</span>
          </h2>
          <p className="mt-4 font-medium md:text-sm  text-text-secondary">
            Explore properties across the UAE&apos;s most sought-after cities
            and communities.
          </p>
        </motion.div>

        <div className=" grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:aspect-[1.8/1]">
          <motion.div
            variants={item}
            className="h-72 sm:col-span-1 sm:row-span-2 sm:h-full"
          >
            <LocationCard
              community={featured}
              priority
              large
              className="h-full"
            />
          </motion.div>

          {rest.map((community) => (
            <motion.div
              key={community.slug}
              variants={item}
              className=" h-44 sm:h-44 lg:h-full"
            >
              <LocationCard community={community} className="h-full" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
