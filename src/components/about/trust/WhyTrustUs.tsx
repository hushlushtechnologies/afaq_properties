import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustPillarsGrid } from "@/components/about/trust/TrustPillarsGrid";
import { WHY_TRUST_CONTENT, WHY_TRUST_PILLARS } from "@/data/about/why-trust";

export function WhyTrustUs() {
  return (
    <Section>
      <SectionHeading
        eyebrow={WHY_TRUST_CONTENT.eyebrow}
        title={WHY_TRUST_CONTENT.title}
        highlight={WHY_TRUST_CONTENT.highlight}
        description={WHY_TRUST_CONTENT.description}
        align="center"
        className="mx-auto"
      />

      <TrustPillarsGrid items={WHY_TRUST_PILLARS} />
    </Section>
  );
}
