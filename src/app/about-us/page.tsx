import { buildMetadata } from "@/lib/seo";
import { AboutHero } from "@/components/about/hero/AboutHero";
import { AboutStory } from "@/components/about/story/AboutStory";
import { OurDirection } from "@/components/about/direction/OurDirection";
import { WhatWeStandFor } from "@/components/about/whatWeStand/WhatWeStandFor";
import { OurExpertise } from "@/components/about/expertise/OurExpertise";
import { WhyTrustUs } from "@/components/about/trust/WhyTrustUs";
import { OUR_APPROACH_IMAGE, OUR_APPROACH_STEPS } from "@/data/about/approach";
import { PropertyJourney } from "@/components/home/journey/PropertyJourney";
import { Section } from "@/components/layout/Section";
import { DeveloperNetwork } from "@/components/home/developer/DeveloperNetwork";
import { TeamGrid } from "@/components/home/team/TeamGrid";
import { FinalCTA } from "@/components/home/cta/FinalCTA";
import { ABOUT_CTA_CONTENT } from "@/data/about/about-cta";
import { EmiratiOffers } from "@/components/ui/offers/EmiratiOffers";
import { InvestmentPosterSection } from "@/components/ui/offers/InvestmentPoster";
import { INVESTMENT_POSTER_CONTENT } from "@/data/offer/investment";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Afaq Al Manzil Properties, a trusted real estate consultancy helping buyers and investors navigate off-plan and secondary properties across Dubai, Abu Dhabi, and Sharjah.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <InvestmentPosterSection {...INVESTMENT_POSTER_CONTENT} />
      <OurDirection />
      <EmiratiOffers />
      <WhatWeStandFor />
      <OurExpertise />
      <WhyTrustUs />
      <PropertyJourney image={OUR_APPROACH_IMAGE} steps={OUR_APPROACH_STEPS} />
      <Section className="bg-hero-gradient">
        <DeveloperNetwork />
      </Section>
      {/* <TeamGrid /> */}
      <FinalCTA {...ABOUT_CTA_CONTENT} />
    </main>
  );
}
