"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";
import { EMIRATI_WOMEN_OFFER_CONTENT as content } from "@/data/offer/offer";

export function EmiratiOffers() {
  const shouldReduceMotion = useReducedMotion();

  const fadeItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: DURATION.reveal,
        ease: EASE_SMOOTH,
        delay: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };
  const circleIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: DURATION.cinematic,
        ease: EASE_SMOOTH,
        delay: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };
  const badgeIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: EASE_SMOOTH,
        delay: shouldReduceMotion ? 0 : 0.6,
      },
    },
  };
  const dateBadgeIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: EASE_SMOOTH,
        delay: shouldReduceMotion ? 0 : 0.45,
      },
    },
  };

  return (
    <Section
      ornament={true}
      className="bg-gradient-to-br from-[#0A0E2A] via-[#141B3D] to-background py-14 sm:py-20"
      background={
        content.backgroundImage ? (
          <>
            <Image
              src={content.backgroundImage}
              alt=""
              fill
              className="object-cover opacity-40"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </>
        ) : undefined
      }
    >
      <div className="grid grid-cols-1 items-center max-w-7xl gap-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            // titleHighlight={content.highlight}
            description={content.description}
            align="left"
          />

          <motion.div
            variants={fadeItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              href={content.primaryCta.href}
              variant="primary"
              size="md"
              icon={content.primaryCta.icon}
              onClick={() => trackEvent("emirati_offer_enquiry_click")}
              className="rounded"
            >
              {content.primaryCta.label}
            </Button>
            <Button
              href={content.secondaryCta.href}
              target={content.secondaryCta.target}
              variant="outline"
              size="md"
              icon={content.secondaryCta.icon}
              onClick={() => trackEvent("emirati_offer_whatsapp_click")}
              className="rounded"
            >
              {content.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-xs lg:order-2 lg:max-w-sm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={circleIn}
            onViewportEnter={() => trackEvent("emirati_offer_section_view")}
            className="relative mx-auto aspect-square w-full overflow-hidden rounded-full border-4 border-primary shadow-lg"
          >
            <Image
              src={content.propertyImage}
              alt={content.propertyImageAlt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 22vw, 60vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={badgeIn}
            animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  }
            }
            className="absolute -top-4 right-2 h-20 w-20 sm:h-24 sm:w-24"
          >
            <Image
              src={content.campaignBadgeImage}
              alt={content.campaignBadgeAlt}
              fill
              sizes="96px"
              className="object-contain drop-shadow-lg"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={dateBadgeIn}
            className="absolute -bottom-2 -left-2 flex flex-col items-center rounded-md border border-primary bg-background/90 px-4 py-2.5 text-center shadow-lg backdrop-blur-sm"
          >
            <span className="font-heading text-h4 leading-none text-primary">
              {content.dateBadgeLines[0]}
            </span>
            <span className="mt-1 font-body text-caption font-medium uppercase tracking-widest text-white">
              {content.dateBadgeLines[1]}
            </span>
            <span className="font-body text-caption text-white/60">
              {content.dateBadgeLines[2]}
            </span>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
