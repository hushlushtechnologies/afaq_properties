import { Suspense } from "react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/offPlan/hero/OffPlanHero";
import { PropertiesListing } from "@/components/properties/grid/PropertyListing";
import { READY_PROPERTIES_HERO_CONTENT } from "@/data/readyproperties/ready-properties-hero";
import { READY_PROPERTIES_GRID_BACKGROUND } from "@/data/readyproperties/ready-properties-listing";
import { FAQ } from "@/components/offPlan/faq/FAQ";
import {
  READY_PROPERTIES_FAQ_CONTENT,
  READY_PROPERTIES_FAQ_ITEMS,
} from "@/data/readyproperties/ready-properties-faq";
import { FinalCTA } from "@/components/home/cta/FinalCTA";
import { PROPERTIES_CTA_CONTENT } from "@/data/properties/properties-cta";
import { notFound } from "next/navigation";

export const metadata = buildMetadata({
  title: "Ready Properties",
  description:
    "Explore completed, ready-to-move-in secondary properties for sale across Dubai and the wider UAE.",
  path: "/secondary",
});

export default function ReadyPage() {
  // return (
  //   <main>
  //     <PageHero {...READY_PROPERTIES_HERO_CONTENT} />
  //     <Suspense fallback={null}>
  //       <PropertiesListing
  //         fixedStatus="completed"
  //         backgroundImage={READY_PROPERTIES_GRID_BACKGROUND}
  //         resultsLabel="Ready Properties"
  //       />
  //     </Suspense>
  //     <FAQ
  //       eyebrow={READY_PROPERTIES_FAQ_CONTENT.eyebrow}
  //       title={READY_PROPERTIES_FAQ_CONTENT.title}
  //       highlight={READY_PROPERTIES_FAQ_CONTENT.highlight}
  //       description={READY_PROPERTIES_FAQ_CONTENT.description}
  //       items={READY_PROPERTIES_FAQ_ITEMS}
  //     />
  //     <FinalCTA {...PROPERTIES_CTA_CONTENT} />
  //   </main>
  // );
  notFound();
}
