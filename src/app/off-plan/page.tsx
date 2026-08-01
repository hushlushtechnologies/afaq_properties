import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";

export const metadata = buildMetadata({
  title: "Off-Plan Properties",
  description:
    "Explore off-plan property investment opportunities from leading UAE developers across Dubai, Abu Dhabi, and Sharjah.",
  path: "/off-plan",
});

export default function OffPlanPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <h1 className="font-heading text-h1 text-text">Off-Plan Properties</h1>
        <p className="mt-4 max-w-2xl font-body text-body-lg text-text-secondary">
          Placeholder content — this page will be built in a future sprint.
        </p>
      </Container>
    </main>
  );
}
