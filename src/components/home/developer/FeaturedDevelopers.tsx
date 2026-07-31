import { Section } from "@/components/layout/Section";
import { DeveloperNetwork } from "@/components/home/developer/DeveloperNetwork";
import { BrandValueStrip } from "@/components/home/developer/BrandValueStrip";

export function FeaturedDevelopers() {
  return (
    <Section className="bg-hero-gradient">
      <DeveloperNetwork />
      <BrandValueStrip />
    </Section>
  );
}
