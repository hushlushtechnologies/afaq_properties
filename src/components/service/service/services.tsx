import { Section } from "@/components/layout/Section";
import { SplitSectionHeading } from "@/components/ui/SplitSectionHeading";
import { ServiceGrid } from "@/components/home/service/ServiceGrid";

export function Services() {
  return (
    <Section>
      <SplitSectionHeading
        eyebrow="Our Services"
        title="Solutions for Every Property Goal."
        highlight="Property Goal."
        description="Whether you're looking to buy, sell, rent, invest, or manage a property, our team provides personalized real estate solutions designed around your goals across the UAE."
        ctaLabel="View All Services"
        ctaHref="/services"
      />
      <ServiceGrid />
    </Section>
  );
}
