import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "From residential and commercial properties to investment advisory and property management, discover the real estate services offered by Afaq Al Manzil Properties.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <h1 className="font-heading text-h1 text-text">Services</h1>
        <p className="mt-4 max-w-2xl font-body text-body-lg text-text-secondary">
          Placeholder content — this page will be built in Phase 11.
        </p>
      </Container>
    </main>
  );
}
