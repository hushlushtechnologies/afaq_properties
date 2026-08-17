import { buildMetadata } from "@/lib/seo";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import {
  PRIVACY_POLICY_CONTENT,
  PRIVACY_POLICY_SECTIONS,
} from "@/data/legal/Legal-privacy";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Afaq Al Manzil Properties collects, uses, and protects your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow={PRIVACY_POLICY_CONTENT.eyebrow}
      title={PRIVACY_POLICY_CONTENT.title}
      description={PRIVACY_POLICY_CONTENT.description}
      lastUpdated={PRIVACY_POLICY_CONTENT.lastUpdated}
      sections={PRIVACY_POLICY_SECTIONS}
      closingTitle={PRIVACY_POLICY_CONTENT.closingTitle}
      closingText={PRIVACY_POLICY_CONTENT.closingText}
    />
  );
}
