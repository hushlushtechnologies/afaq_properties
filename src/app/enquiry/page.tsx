import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Enquiry Now",
  description: "Get in touch with Afaq Al Manzil Properties.",
};

export default function EnquiryPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <h1 className="font-heading text-h1 text-text">Enquiry Now</h1>
        <p className="mt-4 max-w-2xl font-body text-body-lg text-text-secondary">
          Placeholder content — the enquiry form will be built in a future sprint.
        </p>
      </Container>
    </main>
  );
}