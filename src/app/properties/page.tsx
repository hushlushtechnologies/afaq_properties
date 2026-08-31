import { Suspense } from "react";
import { buildMetadata } from "@/lib/seo";
import { PropertiesHero } from "@/components/properties/hero/PropertiesHero";
import { PropertiesListing } from "@/components/properties/grid/PropertyListing";
import { FinalCTA } from "@/components/home/cta/FinalCTA";
import { PROPERTIES_CTA_CONTENT } from "@/data/properties/properties-cta";
import { notFound } from "next/navigation";

export const metadata = buildMetadata({
  title: "Properties",
  description:
    "Browse off-plan and secondary properties for sale across Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, and Ajman, with expert guidance from Afaq Al Manzil Properties.",
  path: "/properties",
});

export default function PropertiesPage() {
  // <main>
  //   <PropertiesHero />
  //   <Suspense fallback={null}>
  //     <PropertiesListing />
  //     <FinalCTA {...PROPERTIES_CTA_CONTENT} />
  //   </Suspense>
  // </main>
  notFound();
}
