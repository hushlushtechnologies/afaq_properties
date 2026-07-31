"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SplitSectionHeading } from "@/components/ui/SplitSectionHeading";
import { PropertyCard } from "@/components/home/featuredproperties/PropertyCard";
import { getFeaturedProperties } from "@/lib/properties";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

export function FeaturedProperties() {
  const shouldReduceMotion = useReducedMotion();
  const properties = getFeaturedProperties(6);

  if (properties.length === 0) return null;

  const [first, ...rest] = properties;

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
    <Section className="overflow-hidden">
      <SplitSectionHeading
        eyebrow="Curated For You"
        title="Featured Properties"
        highlight="Properties"
        description="Explore a curated selection of off-plan and secondary properties across the UAE, selected for their location, lifestyle, and potential."
        ctaLabel="View All Properties"
        ctaHref="/properties"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-20 flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:min-h-[512px] "
      >
        <motion.div
          variants={item}
          className="h-[420px] md:h-[512px] lg:h-auto"
        >
          <PropertyCard
            property={first}
            large
            priority
            imageVariant="featured"
            className="h-full"
          />
        </motion.div>

        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:auto-rows-fr ">
            {rest.map((property, index) => (
              <motion.div
                key={property.id}
                variants={item}
                className={cn(
                  "h-64 md:h-72 lg:h-full",
                  index % 3 === 2 && "sm:col-span-2",
                )}
              >
                <PropertyCard
                  property={property}
                  imageVariant="featured"
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </Section>
  );
}
