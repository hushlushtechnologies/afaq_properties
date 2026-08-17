import { LegalHero } from "@/components/legal/LegalHero";
import { LegalContent } from "@/components/legal/LegalContent";
import type { LegalSection } from "@/types/legal";

interface LegalPageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
  closingTitle: string;
  closingText: string;
}

export function LegalPageLayout({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
  closingTitle,
  closingText,
}: LegalPageLayoutProps) {
  return (
    <main>
      <LegalHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        lastUpdated={lastUpdated}
      />
      <LegalContent
        sections={sections}
        closingTitle={closingTitle}
        closingText={closingText}
      />
    </main>
  );
}
