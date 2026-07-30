"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/config/social";
import { EASE_SMOOTH } from "@/lib/motion";

const HERO_CONTENT = {
  eyebrow: "UAE Real Estate",
  headingLines: [
    [{ text: "Luxury " }, { text: "Living.", highlight: true }],
    [{ text: "Smart " }, { text: "Investments.", highlight: true }],
  ],
  description:
    "Discover curated off-plan and secondary properties across the UAE, guided by a team that understands your needs.",
  primaryCta: { label: "Explore Properties", href: "/properties" },
  secondaryCta: { label: "WhatsApp Us", href: "https://wa.me/971500000000" },
  brandText: "AFAQ AL MANZIL PROPERTIES",
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_SMOOTH } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/85" />

      <motion.p
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: shouldReduceMotion ? 0 : 0.9, ease: EASE_SMOOTH }}
        className="text-stroke pointer-events-none absolute inset-x-0 bottom-16 select-none whitespace-nowrap text-center font-heading text-[14vw] font-semibold uppercase leading-none sm:bottom-20 sm:text-[9vw] lg:text-[7vw]"
      >
        {HERO_CONTENT.brandText}
      </motion.p>

      <Container className="relative z-10 flex min-h-screen flex-col justify-between py-28 sm:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item}>
            <Eyebrow align="center">{HERO_CONTENT.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 font-heading text-h1 uppercase leading-tight tracking-wide text-white"
          >
            {HERO_CONTENT.headingLines.map((line, i) => (
              <span key={i} className="block">
                {line.map((word, j) => (
                  <span key={j} className={word.highlight ? "text-primary" : undefined}>
                    {word.text}
                  </span>
                ))}
              </span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-md rounded-lg border border-white/10 bg-background/70 p-6 backdrop-blur-md sm:p-7"
        >
          <motion.p variants={item} className="font-body text-body text-text-secondary">
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
            <Button href={HERO_CONTENT.primaryCta.href} variant="primary" size="md" >
              {HERO_CONTENT.primaryCta.label}
              <ArrowRight size={16} />
            </Button>
            <Button
              href={HERO_CONTENT.secondaryCta.href}
              target="_blank"
              variant="outline"
              size="md"
              
            >
              
              {HERO_CONTENT.secondaryCta.label}
              <MessageCircle size={16} />
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 1.2, ease: EASE_SMOOTH }}
        className="absolute inset-x-0 bottom-0 z-10 flex justify-center"
      >
        <div className="hero-social-bar flex flex-col items-center gap-2 bg-background/90 px-10 pb-4 pt-5 backdrop-blur-md sm:px-14">
          <span className="font-body text-caption uppercase tracking-widest text-text-secondary">
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
                className="text-text transition-colors duration-400 hover:text-primary"
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