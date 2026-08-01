import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";

export const metadata = buildMetadata({
  title: "Properties",
  description:
    "Browse off-plan and secondary properties for sale across Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, and Ajman, with expert guidance from Afaq Al Manzil Properties.",
  path: "/properties",
});
export default function PropertiesPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <h1 className="font-heading text-h1 text-text">Properties</h1>
        <p className="mt-4 max-w-2xl font-body text-body-lg text-text-secondary">
          Placeholder content — all properties, with a status filter, will be
          built in Sprint 2.
        </p>
      </Container>
    </main>
  );
}
