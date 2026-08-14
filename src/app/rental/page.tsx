import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/offPlan/hero/OffPlanHero";
import { RENTAL_HERO_CONTENT } from "@/data/rental/rental-hero";
import { PropertiesListing } from "@/components/properties/grid/PropertyListing";
import { RENTAL_GRID_BACKGROUND } from "@/data/rental/rental-list";
import { FAQ } from "@/components/offPlan/faq/FAQ";
import { RENTAL_FAQ_CONTENT, RENTAL_FAQ_ITEMS } from "@/data/rental/rental-faq";
import { FinalCTA } from "@/components/home/cta/FinalCTA";
import { PROPERTIES_CTA_CONTENT } from "@/data/properties/properties-cta";

export const metadata: Metadata = {
  title: "Rental Properties",
  description: "Explore completed, ready-to-move-in properties across the UAE.",
};

export default function RentalPage() {
  return (
    <main>
      <PageHero {...RENTAL_HERO_CONTENT} />
      <Suspense fallback={null}>
        <PropertiesListing
          fixedStatus="rental"
          backgroundImage={RENTAL_GRID_BACKGROUND}
          resultsLabel="Rental Properties"
        />
      </Suspense>
      <FAQ
        eyebrow={RENTAL_FAQ_CONTENT.eyebrow}
        title={RENTAL_FAQ_CONTENT.title}
        highlight={RENTAL_FAQ_CONTENT.highlight}
        description={RENTAL_FAQ_CONTENT.description}
        items={RENTAL_FAQ_ITEMS}
      />
      <FinalCTA {...PROPERTIES_CTA_CONTENT} />
    </main>
  );
}
