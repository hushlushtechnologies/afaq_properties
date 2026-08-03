import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandValueStrip } from "@/components/home/developer/BrandValueStrip";
import { UAEPattern } from "@/components/ui/UAEPattern";
import {
  WHAT_WE_STAND_FOR_CONTENT,
  WHAT_WE_STAND_FOR_VALUES,
  WHAT_WE_STAND_FOR_IMAGE,
} from "@/data/about/what-we-stand-for";

export function WhatWeStandFor() {
  return (
    <Section className="relative bg-hero-gradient">
      <UAEPattern className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-24 h-auto w-[820px] opacity-60" />

      <div className="relative">
        <SectionHeading
          eyebrow={WHAT_WE_STAND_FOR_CONTENT.eyebrow}
          title={WHAT_WE_STAND_FOR_CONTENT.title}
          highlight={WHAT_WE_STAND_FOR_CONTENT.highlight}
          description={WHAT_WE_STAND_FOR_CONTENT.description}
          align="center"
          className="mx-auto"
        />

        <BrandValueStrip
          values={WHAT_WE_STAND_FOR_VALUES}
          image={WHAT_WE_STAND_FOR_IMAGE}
          imageAlt="Professional holding a digital trust and quality assurance icon"
        />
      </div>
    </Section>
  );
}
