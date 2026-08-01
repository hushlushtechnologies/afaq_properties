import { Section } from "@/components/layout/Section";
import { SplitSectionHeading } from "@/components/ui/SplitSectionHeading";
import { ServiceGrid } from "@/components/home/service/ServiceGrid";

export function Expertise() {
  return (
    <Section>
      <SplitSectionHeading
        eyebrow="Our Expertise"
        title="Real Estate Solutions, Built Around Your Goals."
        highlight="Solutions,"
        description="Explore a curated selection of off-plan and secondary properties across the UAE, selected for their location, lifestyle, and potential."
        ctaLabel="View All Services"
        ctaHref="/services"
      />
      <ServiceGrid limit={6} />
    </Section>
  );
}
