"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Mail, ThumbsUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ShineGrid } from "@/components/ui/ShineGrid";
import { COMPANY_CONTACT } from "@/config/footer";
import { SOCIAL_LINKS } from "@/config/social";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";

const CONTACT_ROWS = [
  { icon: MapPin, label: "Address", value: COMPANY_CONTACT.address },
  { icon: Phone, label: "Phone", value: COMPANY_CONTACT.phones[0] },
  { icon: Mail, label: "Mail", value: COMPANY_CONTACT.email },
];

export function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const fadeItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.reveal, ease: EASE_SMOOTH },
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
    <section className="relative w-full max-w-5xl mx-auto overflow-hidden bg-background  pb-16 pt-40 sm:pb-20 sm:pt-56">
      <ShineGrid />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="overflow-hidden">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={maskLine}
              className="font-heading text-h1 leading-tight text-text font-bold"
            >
              Get in <br /> Touch.
            </motion.h1>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 sm:w-3/4 w-full"
          >
            {CONTACT_ROWS.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={fadeItem}
                className="flex items-start gap-3"
              >
                <Icon size={18} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-heading text-body-lg font-medium text-text">
                    {label}
                  </p>
                  <p className="mt-1 font-body text-sm text-text-secondary">
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeItem} className="flex items-start gap-3">
              <ThumbsUp size={18} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="font-heading text-body-lg font-medium text-text">
                  Follow Us On
                </p>
                <div className="mt-2 flex items-center gap-3">
                  {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-300 hover:border-primary hover:text-primary"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
