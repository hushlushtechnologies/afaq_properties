import { buildMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import {
  TERMS_CONDITIONS_CONTENT,
  TERMS_CONDITIONS_SECTIONS,
} from "@/data/legal/legal-terms";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Afaq Al Manzil Properties collects, uses, and protects your information.",
  path: "/privacy-policy",
});

export default function TermsConditionsPage() {
  return (
    <LegalPageLayout
      eyebrow={TERMS_CONDITIONS_CONTENT.eyebrow}
      title={TERMS_CONDITIONS_CONTENT.title}
      description={TERMS_CONDITIONS_CONTENT.description}
      lastUpdated={TERMS_CONDITIONS_CONTENT.lastUpdated}
      sections={TERMS_CONDITIONS_SECTIONS}
      closingTitle={TERMS_CONDITIONS_CONTENT.closingTitle}
      closingText={TERMS_CONDITIONS_CONTENT.closingText}
    />
  );
}
