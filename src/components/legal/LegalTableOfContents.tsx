"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { LegalSection } from "@/types/legal";

interface LegalTableOfContentsProps {
  sections: LegalSection[];
}

export function LegalTableOfContents({ sections }: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Table of contents"
      className=" bg-card px-5 py-6 border border-border rounded-md w-full h-fit "
    >
      <p className="font-body text-caption font-medium uppercase tracking-widest text-text-secondary">
        Contents
      </p>
      <ul className="mt-4 flex flex-col gap-2 border-l border-border pl-4">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "block font-body text-sm text-nowrap transition-colors py-1.5  border-b border-b-border duration-300",
                activeId === section.id
                  ? "font-medium text-primary"
                  : "text-text-secondary hover:text-accent",
              )}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
