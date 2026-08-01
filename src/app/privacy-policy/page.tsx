import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Afaq Al Manzil Properties collects, uses, and protects your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <h1 className="font-heading text-h1 text-text">Privacy Policy</h1>
        <p className="mt-4 max-w-2xl font-body text-body-lg text-text-secondary">
          Placeholder content — this page will be built in a future sprint.
        </p>
      </Container>
    </main>
  );
}
