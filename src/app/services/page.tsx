import { buildMetadata } from "@/lib/seo";
import { ServicesHero } from "@/components/service/hero/ServicesHero";
import { Services } from "@/components/service/service/services";
import { PropertyOpportunity } from "@/components/home/propertyJourney/PropertyOpportunity";
import { WhyAfaq } from "@/components/home/whyAfaq/WhyAfaq";
import { PropertyJourney } from "@/components/home/journey/PropertyJourney";
import {
  OUR_APPROACH_IMAGE,
  OUR_APPROACH_STEPS,
} from "@/data/service/approach";
import { FinalCTA } from "@/components/home/cta/FinalCTA";
import { SERVICE_CTA_CONTENT } from "@/data/service/service-cta";
import { EmiratiOffers } from "@/components/ui/offers/EmiratiOffers";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "From residential and commercial properties to investment advisory and property management, discover the real estate services offered by Afaq Al Manzil Properties.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <Services />
      <EmiratiOffers />
      <PropertyOpportunity />
      <WhyAfaq />
      <PropertyJourney image={OUR_APPROACH_IMAGE} steps={OUR_APPROACH_STEPS} />
      <FinalCTA {...SERVICE_CTA_CONTENT} />
    </main>
  );
}
