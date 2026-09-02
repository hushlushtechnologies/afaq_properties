import dynamic from "next/dynamic";

import { Hero } from "@/components/home/Hero";
import { LocationExplorer } from "@/components/home/location/LocationExplorer";
import { PropertyOpportunity } from "@/components/home/propertyJourney/PropertyOpportunity";
import { EmiratiOffers } from "@/components/ui/offers/EmiratiOffers";

const FeaturedProperties = dynamic(
  () =>
    import("@/components/home/featuredproperties/FeaturedProperties").then(
      (mod) => mod.FeaturedProperties,
    ),
  {
    loading: () => <div className="h-[600px] animate-pulse bg-card" />,
  },
);

const WhyAfaq = dynamic(() =>
  import("@/components/home/whyAfaq/WhyAfaq").then((mod) => mod.WhyAfaq),
);

const FeaturedDevelopers = dynamic(() =>
  import("@/components/home/developer/FeaturedDevelopers").then(
    (mod) => mod.FeaturedDevelopers,
  ),
);

const AboutAfaq = dynamic(() =>
  import("@/components/home/about/AboutAfaq").then((mod) => mod.AboutAfaq),
);

const TeamGrid = dynamic(() =>
  import("@/components/home/team/TeamGrid").then((mod) => mod.TeamGrid),
);
const Expertise = dynamic(() =>
  import("@/components/home/service/Expertise").then((mod) => mod.Expertise),
);

const PropertyJourney = dynamic(() =>
  import("@/components/home/journey/PropertyJourney").then(
    (mod) => mod.PropertyJourney,
  ),
);

const FinalCTA = dynamic(() =>
  import("@/components/home/cta/FinalCTA").then((mod) => mod.FinalCTA),
);

import {
  PROPERTY_JOURNEY_IMAGE,
  PROPERTY_JOURNEY_STEPS,
} from "@/data/hero/property-journey";

import { HOME_CTA_CONTENT } from "@/data/hero/home-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <LocationExplorer /> */}
      <PropertyOpportunity />
      <EmiratiOffers />
      {/* <FeaturedProperties /> */}
      <WhyAfaq />
      <FeaturedDevelopers />
      <AboutAfaq />
      {/* <TeamGrid /> */}
      <Expertise />
      <PropertyJourney
        image={PROPERTY_JOURNEY_IMAGE}
        steps={PROPERTY_JOURNEY_STEPS}
      />
      <FinalCTA {...HOME_CTA_CONTENT} />
    </main>
  );
}
