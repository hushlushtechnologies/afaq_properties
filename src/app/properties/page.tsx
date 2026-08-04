import { buildMetadata } from "@/lib/seo";
import { PropertiesHero } from "@/components/properties/hero/PropertiesHero";

export const metadata = buildMetadata({
  title: "Properties",
  description:
    "Browse off-plan and secondary properties for sale across Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, and Ajman, with expert guidance from Afaq Al Manzil Properties.",
  path: "/properties",
});

export default function PropertiesPage() {
  return (
    <main>
      <PropertiesHero />
    </main>
  );
}
