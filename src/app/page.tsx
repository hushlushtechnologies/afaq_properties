import { Hero } from "@/components/home/Hero";
import { LocationExplorer } from "@/components/home/location/LocationExplorer";
import { PropertyOpportunity } from "@/components/home/propertyJourney/PropertyOpportunity";
import { FeaturedProperties } from "@/components/home/featuredproperties/FeaturedProperties";
import { WhyAfaq } from "@/components/home/whyAfaq/WhyAfaq";
import { FeaturedDevelopers } from "@/components/home/developer/FeaturedDevelopers";
import { AboutAfaq } from "@/components/home/about/AboutAfaq";
import { TeamGrid } from "@/components/home/team/TeamGrid";

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
    </main>
  );
}
