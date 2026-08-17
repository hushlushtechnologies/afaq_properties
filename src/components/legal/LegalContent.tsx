"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { LegalTableOfContents } from "@/components/legal/LegalTableOfContents";
import { COMPANY_CONTACT } from "@/config/footer";
import { EASE_SMOOTH } from "@/lib/motion";
import type { LegalSection, LegalBlock } from "@/types/legal";

interface LegalContentProps {
  sections: LegalSection[];
  closingTitle: string;
  closingText: string;
}

function BlockRenderer({ block }: { block: LegalBlock }) {
  if (block.type === "paragraph") {
    return (
      <p className="font-body text-body-sm leading-relaxed text-text-secondary">
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="flex flex-col gap-2">
        {block.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 font-body text-body-sm leading-relaxed text-text-secondary"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex flex-col gap-2 font-body text-body-sm text-text-secondary">
      <p className="font-heading text-body-lg font-medium text-text">
        Afaq Al Manzil Properties
      </p>
      <a
        href={`mailto:${COMPANY_CONTACT.email}`}
        className="flex items-center gap-2 transition-colors duration-300 hover:text-primary"
      >
        <Mail size={14} className="text-primary" /> {COMPANY_CONTACT.email}
      </a>
      {COMPANY_CONTACT.phones.map((phone, i) => (
        <a
          key={i}
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="flex items-center gap-2 transition-colors duration-300 hover:text-primary"
        >
          <Phone size={14} className="text-primary" /> {phone}
        </a>
      ))}
      <span className="flex items-start gap-2">
        <MapPin size={14} className="mt-0.5 shrink-0 text-primary" />{" "}
        {COMPANY_CONTACT.address}
      </span>
    </div>
  );
}

export function LegalContent({
  sections,
  closingTitle,
  closingText,
}: LegalContentProps) {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.4fr_1fr] lg:gap-16">
        <LegalTableOfContents sections={sections} />

        <div className="flex max-w-3xl flex-col gap-12">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h2 className="font-heading text-h4 text-text">
                {section.title}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.blocks.map((block, i) => (
                  <BlockRenderer key={i} block={block} />
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="rounded-md border border-border  p-6 text-center sm:p-8 bg-hero-gradient"
          >
            <h3 className="font-heading text-h4 text-text">{closingTitle}</h3>
            <p className="mx-auto mt-3 max-w-md font-body text-body-sm text-text-secondary">
              {closingText}
            </p>
            <Button
              href="/contact-us"
              variant="primary"
              size="md"
              className="mt-5"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
