"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SplitSectionHeading } from "@/components/ui/SplitSectionHeading";
import { IconFeaturePanel } from "@/components/ui/IconFeaturePanel";
import { ParallaxImage } from "@/components/animation/ParallaxImage";
import {
  OUR_DIRECTION_CONTENT,
  OUR_DIRECTION_ITEMS,
} from "@/data/about/our-direction";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";

export function OurDirection() {
  const shouldReduceMotion = useReducedMotion();

  const imageIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: DURATION.cinematic, ease: EASE_SMOOTH },
    },
  };
  const contentIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.reveal, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section>
      <SplitSectionHeading
        eyebrow={OUR_DIRECTION_CONTENT.eyebrow}
        title={OUR_DIRECTION_CONTENT.title}
        highlight={OUR_DIRECTION_CONTENT.highlight}
      />

      <div className="mt-14 flex flex-col gap-14">
        {/* Vision — image left, content right on desktop */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-[0.5fr_1fr] lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageIn}
            className="relative order-1 h-64 w-full overflow-hidden rounded-md border border-border sm:h-80 lg:h-96"
          >
            <ParallaxImage className="h-full w-full">
              <Image
                src={OUR_DIRECTION_ITEMS.vision.image}
                alt="Afaq Al Manzil Properties' vision of a trusted future for UAE real estate"
                fill
                quality={90}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </ParallaxImage>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={contentIn}
            className="order-2 w-full md:w-4/5"
          >
            <IconFeaturePanel {...OUR_DIRECTION_ITEMS.vision} />
          </motion.div>
        </div>

        {/* Mission — content left, image right on desktop */}
        <div className="grid grid-cols-1 items-center gap-8  md:grid-cols-2 lg:grid-cols-[0.6fr_0.5fr] lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={contentIn}
            className="order-2 lg:order-1 md:w-4/5 w-full"
          >
            <IconFeaturePanel {...OUR_DIRECTION_ITEMS.mission} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageIn}
            className="relative order-1 h-64 w-full overflow-hidden rounded-md border border-border sm:h-80 lg:order-2 lg:h-96"
          >
            <ParallaxImage className="h-full w-full">
              <Image
                src={OUR_DIRECTION_ITEMS.mission.image}
                alt="Afaq Al Manzil Properties' mission of providing client trust and satisfaction"
                fill
                quality={90}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </ParallaxImage>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
