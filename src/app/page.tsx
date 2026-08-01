import { Hero } from "@/components/home/Hero";
import { LocationExplorer } from "@/components/home/location/LocationExplorer";
import { PropertyOpportunity } from "@/components/home/propertyJourney/PropertyOpportunity";
import { FeaturedProperties } from "@/components/home/featuredproperties/FeaturedProperties";
import { WhyAfaq } from "@/components/home/whyAfaq/WhyAfaq";
import { FeaturedDevelopers } from "@/components/home/developer/FeaturedDevelopers";
import { AboutAfaq } from "@/components/home/about/AboutAfaq";
import { TeamGrid } from "@/components/home/team/TeamGrid";
import { Expertise } from "@/components/home/service/Expertise";
import {
  PROPERTY_JOURNEY_IMAGE,
  PROPERTY_JOURNEY_STEPS,
} from "@/data/property-journey";
import { PropertyJourney } from "@/components/home/journey/PropertyJourney";
import { FinalCTA } from "@/components/home/cta/FinalCTA";
import { HOME_CTA_CONTENT } from "@/data/home-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <LocationExplorer />
      <PropertyOpportunity />
      <FeaturedProperties />
      <WhyAfaq />
      <FeaturedDevelopers />
      <AboutAfaq />
      <TeamGrid />
      <Expertise />
      <PropertyJourney
        image={PROPERTY_JOURNEY_IMAGE}
        steps={PROPERTY_JOURNEY_STEPS}
      />
      <FinalCTA {...HOME_CTA_CONTENT} />
    </main>
  );
}
