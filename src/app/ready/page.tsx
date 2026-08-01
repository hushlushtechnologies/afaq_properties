import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";

export const metadata = buildMetadata({
  title: "Secondary Properties",
  description:
    "Explore completed, ready-to-move-in secondary properties for sale across Dubai and the wider UAE.",
  path: "/secondary",
});

export default function ReadyPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <h1 className="font-heading text-h1 text-text">Ready Properties</h1>
        <p className="mt-4 max-w-2xl font-body text-body-lg text-text-secondary">
          Placeholder content — this page will be built in a future sprint.
        </p>
      </Container>
    </main>
  );
}
