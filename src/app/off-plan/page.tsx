import { Suspense } from "react";
import { buildMetadata } from "@/lib/seo";
import { PropertiesListing } from "@/components/properties/grid/PropertyListing";
import { OFF_PLAN_GRID_BACKGROUND } from "@/data/offPlan/off-plan-listing";
import { PageHero } from "@/components/offPlan/hero/OffPlanHero";
import { OFF_PLAN_HERO_CONTENT } from "@/data/offPlan/off-plan-hero";
import { FAQ } from "@/components/offPlan/faq/FAQ";
import {
  OFF_PLAN_FAQ_CONTENT,
  OFF_PLAN_FAQ_ITEMS,
} from "@/data/offPlan/off-plan-faq";
import { FinalCTA } from "@/components/home/cta/FinalCTA";
import { PROPERTIES_CTA_CONTENT } from "@/data/properties/properties-cta";

export const metadata = buildMetadata({
  title: "Off-Plan Properties",
  description:
    "Explore off-plan property investment opportunities from leading UAE developers across Dubai, Abu Dhabi, and Sharjah.",
  path: "/off-plan",
});

export default function OffPlanPage() {
  return (
    <main>
      <main>
        <PageHero {...OFF_PLAN_HERO_CONTENT} />
        <Suspense fallback={null}>
          <PropertiesListing
            fixedStatus="off-plan"
            backgroundImage={OFF_PLAN_GRID_BACKGROUND}
            resultsLabel="Off Plan Properties"
          />
        </Suspense>
        <FAQ
          eyebrow={OFF_PLAN_FAQ_CONTENT.eyebrow}
          title={OFF_PLAN_FAQ_CONTENT.title}
          highlight={OFF_PLAN_FAQ_CONTENT.highlight}
          description={OFF_PLAN_FAQ_CONTENT.description}
          items={OFF_PLAN_FAQ_ITEMS}
        />
        <FinalCTA {...PROPERTIES_CTA_CONTENT} />
      </main>
    </main>
  );
}
