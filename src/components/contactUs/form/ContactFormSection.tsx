"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StepBadge } from "@/components/ui/StepBadge";
import { ContactMap } from "@/components/contactUs/form/ContactMap";
import { ContactForm } from "@/components/contactUs/form/ContactForm";
import {
  CONTACT_FORM_CONTENT,
  CONTACT_TAGS,
} from "@/data/contact/contact-form-section";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";

export function ContactFormSection() {
  const shouldReduceMotion = useReducedMotion();
  const parts = CONTACT_FORM_CONTENT.highlight
    ? CONTACT_FORM_CONTENT.title.split(CONTACT_FORM_CONTENT.highlight)
    : [CONTACT_FORM_CONTENT.title];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
  };
  const fadeItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.reveal, ease: EASE_SMOOTH },
    },
  };
  const maskItem = {
    hidden: { y: shouldReduceMotion ? 0 : "100%" },
    visible: {
      y: "0%",
      transition: { duration: DURATION.reveal, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section id="contact-form">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeItem}>
            <Eyebrow>{CONTACT_FORM_CONTENT.eyebrow}</Eyebrow>
          </motion.div>

          <div className="mt-4 overflow-hidden">
            <motion.h2
              variants={maskItem}
              className="font-heading font-bold text-h2 leading-tight text-text"
            >
              {parts.length > 1 ? (
                <>
                  {parts[0]}
                  <span className="text-primary">
                    {CONTACT_FORM_CONTENT.highlight}
                  </span>
                  {parts[1]}
                </>
              ) : (
                CONTACT_FORM_CONTENT.title
              )}
            </motion.h2>
          </div>

          <motion.p
            variants={fadeItem}
            className="mt-4 max-w-md font-body text-sm text-text-secondary"
          >
            {CONTACT_FORM_CONTENT.description}
          </motion.p>

          <motion.div
            variants={fadeItem}
            className="mt-5 flex flex-wrap gap-x-5 gap-y-2"
          >
            {CONTACT_TAGS.map((tag) => (
              <StepBadge key={tag} label={tag} />
            ))}
          </motion.div>

          <motion.div variants={fadeItem} className="mt-20">
            <ContactMap />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: DURATION.reveal, ease: EASE_SMOOTH }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  );
}
