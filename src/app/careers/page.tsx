import { buildMetadata } from "@/lib/seo";
import { CareersHero } from "@/components/careers/hero/CareersHero";
import { CareerGrowth } from "@/components/careers/career/CareerGrowth";
import { CurrentOpenings } from "@/components/careers/opening/CurrentOpening";
import { PropertyJourney } from "@/components/home/journey/PropertyJourney";
import {
  OUR_APPROACH_IMAGE,
  CAREER_JOURNEY_STEPS,
} from "@/data/careers/career-journey";
import { FinalCTA } from "@/components/home/cta/FinalCTA";
import { CAREER_CTA_CONTENT } from "@/data/careers/career-cta";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join the Afaq Al Manzil Properties team and build your career in UAE real estate.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <CareerGrowth />
      <CurrentOpenings />
      <PropertyJourney
        image={OUR_APPROACH_IMAGE}
        steps={CAREER_JOURNEY_STEPS}
      />
      <FinalCTA {...CAREER_CTA_CONTENT} />
    </main>
  );
}
