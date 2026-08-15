import { Suspense } from "react";
import { buildMetadata } from "@/lib/seo";
import { ContactHero } from "@/components/contactUs/hero/ContactHero";
import { ContactFormSection } from "@/components/contactUs/form/ContactFormSection";
import { FAQ } from "@/components/offPlan/faq/FAQ";
import {
  CONTACT_FAQ_CONTENT,
  CONTACT_FAQ_ITEMS,
} from "@/data/contact/contact-faq";
import { FinalCTA } from "@/components/home/cta/FinalCTA";
import { CONTACT_CTA_CONTENT } from "@/data/contact/contact-cta";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Afaq Al Manzil Properties for property enquiries, brochure requests, or investment guidance across the UAE.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <main>
      <ContactHero />
      <Suspense fallback={null}>
        <ContactFormSection />
      </Suspense>
      <FAQ
        eyebrow={CONTACT_FAQ_CONTENT.eyebrow}
        title={CONTACT_FAQ_CONTENT.title}
        highlight={CONTACT_FAQ_CONTENT.highlight}
        description={CONTACT_FAQ_CONTENT.description}
        items={CONTACT_FAQ_ITEMS}
      />
      <FinalCTA {...CONTACT_CTA_CONTENT} />
    </main>
  );
}
