"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/config/social";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";
import { FaWhatsapp } from "react-icons/fa";
import { Magnetic } from "@/components/ui/Magnetic";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const HERO_CONTENT = {
  eyebrow: "UAE Real Estate",
  headingLines: [
    [{ text: "Luxury " }, { text: "Living.", highlight: true }],
    [{ text: "Smart " }, { text: "Investments.", highlight: true }],
  ],
  description:
    "Discover curated off-plan and secondary properties across the UAE, guided by a team that understands your needs.",
  primaryCta: { label: "Explore Properties", href: "/properties" },
  secondaryCta: {
    label: "WhatsApp Us",
    href: "https://wa.me/971545813201?text=Hi%20AFAQ%20Al%20Manzil%20Properties,%20I%20have%20an%20enquiry.",
  },
  brandText: "AFAQ AL MANZIL PROPERTIES",
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.5,
      },
    },
  };

  const fadeItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.cinematic, ease: EASE_SMOOTH },
    },
  };

  const maskLine = {
    hidden: { y: shouldReduceMotion ? 0 : "100%" },
    visible: {
      y: "0%",
      transition: { duration: DURATION.cinematic, ease: EASE_SMOOTH },
    },
  };

  return (
    <section className="relative w-full  overflow-hidden  bg-background">
      <motion.video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/assets/random/trust.jpg"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: DURATION.cinematic, ease: EASE_SMOOTH }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/dubai.mp4" media="(max-width: 767px)" type="video/mp4" />
        <source src="/dubai.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#000614]/65 to-[#000614]" />

      <motion.p
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: shouldReduceMotion ? 0 : 1,
          ease: EASE_SMOOTH,
        }}
        className="text-stroke pointer-events-none absolute  inset-x-0 bottom-16 select-none whitespace-nowrap text-center font-heading text-[14vw] font-semibold uppercase leading-none sm:bottom-20 sm:text-[6vw]"
      >
        {HERO_CONTENT.brandText}
      </motion.p>

      <Container className="relative z-10 flex min-h-screen flex-col justify-between sm:pt-56 pb-44 pt-32  ">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeItem}>
            <Eyebrow align="center">{HERO_CONTENT.eyebrow}</Eyebrow>
          </motion.div>

          <h1 className="mt-5 font-semibold sm:text-5xl text-3xl uppercase leading-normal tracking-widest text-text">
            {HERO_CONTENT.headingLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span variants={maskLine} className="inline-block">
                  {line.map((word, j) => (
                    <span
                      key={j}
                      className={word.highlight ? "text-primary" : undefined}
                    >
                      {word.text}
                    </span>
                  ))}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-md rounded-lg border border-border/30 bg-card/20 p-6 backdrop-blur-md sm:p-7"
        >
          <motion.p
            variants={fadeItem}
            className="font-normal text-sm text-text-secondary"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div variants={fadeItem} className="mt-6 flex flex-wrap gap-3">
            <Magnetic>
              <Button
                href={HERO_CONTENT.primaryCta.href}
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                {HERO_CONTENT.primaryCta.label}
              </Button>
            </Magnetic>
            <Button
              href={HERO_CONTENT.secondaryCta.href}
              target="_blank"
              variant="ghost"
              size="md"
            >
              {HERO_CONTENT.secondaryCta.label}
              <FaWhatsapp size={16} />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
      <ScrollIndicator />

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: shouldReduceMotion ? 0 : 1.2,
          ease: EASE_SMOOTH,
        }}
        className="absolute inset-x-0 bottom-0 z-10 flex justify-center"
      >
        <div className="hero-social-bar flex flex-col items-center gap-2 bg-text px-10 pb-4 pt-5 backdrop-blur-md sm:px-14">
          <span className="font-medium text-caption uppercase tracking-widest text-background mb-1">
            Follow Us On
          </span>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-background transition-colors duration-400 hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
