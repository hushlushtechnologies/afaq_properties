"use client";

import Image from "next/image";
import type { Developer } from "@/types/developer";

interface DeveloperMarqueeProps {
  developers: Developer[];
  speedSeconds?: number;
}

export function DeveloperMarquee({
  developers,
  speedSeconds = 28,
}: DeveloperMarqueeProps) {
  if (developers.length === 0) return null;

  // Duplicate the list so the CSS animation can loop seamlessly (translate -50%)
  const loopItems = [...developers, ...developers];

  return (
    <div
      className="group/marquee relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center gap-14 group-hover/marquee:[animation-play-state:paused]"
        style={{
          animation: `marquee-scroll ${speedSeconds}s linear infinite`,
        }}
      >
        {loopItems.map((developer, index) => (
          <a
            key={`${developer.id}-${index}`}
            href={developer.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={developer.name}
            className="relative h-10 w-32 shrink-0 opacity-60 grayscale transition-all duration-400 ease-smooth hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src={developer.logo}
              alt={developer.name}
              fill
              sizes="128px"
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
