import { buildMetadata } from "@/lib/seo";
import { AboutHero } from "@/components/about/hero/AboutHero";
import { AboutStory } from "@/components/about/story/AboutStory";
import { OurDirection } from "@/components/about/direction/OurDirection";
import { WhatWeStandFor } from "@/components/about/whatWeStand/WhatWeStandFor";
import { OurExpertise } from "@/components/about/expertise/OurExpertise";

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
      <OurDirection />
      <WhatWeStandFor />
      <OurExpertise />
    </main>
  );
}
