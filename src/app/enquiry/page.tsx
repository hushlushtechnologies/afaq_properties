import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/offPlan/hero/OffPlanHero";
import { ENQUIRY_HERO_CONTENT } from "@/data/enquiry/enquiry-hero";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FAQ } from "@/components/offPlan/faq/FAQ";
import {
  CONTACT_FAQ_CONTENT,
  CONTACT_FAQ_ITEMS,
} from "@/data/contact/contact-faq";

export const metadata = buildMetadata({
  title: "Property Enquiry",
  description:
    "Share your property requirements with Afaq Al Manzil Properties and let our team help you find the right opportunity across the UAE.",
  path: "/enquiry-now",
});

export default function EnquiryPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <PageHero {...ENQUIRY_HERO_CONTENT} />
      <EnquirySection />
      <FAQ
        eyebrow={CONTACT_FAQ_CONTENT.eyebrow}
        title={CONTACT_FAQ_CONTENT.title}
        highlight={CONTACT_FAQ_CONTENT.highlight}
        description={CONTACT_FAQ_CONTENT.description}
        items={CONTACT_FAQ_ITEMS}
      />
    </main>
  );
}
