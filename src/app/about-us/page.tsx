import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Afaq Al Manzil Properties, a trusted real estate consultancy helping buyers and investors navigate off-plan and secondary properties across Dubai, Abu Dhabi, and Sharjah.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <h1 className="font-heading text-h1 text-text">About Us</h1>
        <p className="mt-4 max-w-2xl font-body text-body-lg text-text-secondary">
          Placeholder content — this page will be built in a future sprint.
        </p>
      </Container>
    </main>
  );
}
