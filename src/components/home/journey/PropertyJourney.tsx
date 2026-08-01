import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { JourneyTimeline } from "@/components/home/journey/JourneyTimeline";
import type { JourneyStep } from "@/types/journey";

interface PropertyJourneyProps {
  image: string;
  steps: JourneyStep[];
}

export function PropertyJourney({ image, steps }: PropertyJourneyProps) {
  return (
    <Section
      ornament={false}
      className="border-y border-border"
      background={
        <>
          <Image
            src={image}
            alt="Afaq Properties - Property Journey"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40" />
        </>
      }
    >
      <JourneyTimeline steps={steps} />
    </Section>
  );
}
