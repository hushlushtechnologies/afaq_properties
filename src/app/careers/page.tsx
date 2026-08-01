import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join the Afaq Al Manzil Properties team and build your career in UAE real estate.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <h1 className="font-heading text-h1 text-text">Careers</h1>
        <p className="mt-4 max-w-2xl font-body text-body-lg text-text-secondary">
          Placeholder content — this page will be built in a future sprint.
        </p>
      </Container>
    </main>
  );
}
