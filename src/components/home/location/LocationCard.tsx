import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Community } from "@/types/community";

interface LocationCardProps {
  community: Community;
  className?: string;
  priority?: boolean;
  large?: boolean;
}

export function LocationCard({
  community,
  className,
  priority,
  large,
}: LocationCardProps) {
  return (
    <Link
      href={`/properties?community=${community.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-md border border-border",
        className,
      )}
    >
      <Image
        src={community.image}
        alt={`Properties in ${community.name}`}
        fill
        priority={priority}
        quality={90}
        sizes={
          large
            ? "(min-width: 640px) 40vw, 100vw"
            : "(min-width: 640px) 20vw, 100vw"
        }
        className="object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#000614] via-black/20 to-transparent" />

      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-borderPrimary bg-bgPrimary text-white backdrop-blur-sm transition-transform duration-400 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-primary group-hover:text-primary">
        <ArrowUpRight size={16} />
      </span>

      <span
        className={cn(
          "absolute bottom-4 left-4 font-heading font-medium text-white",
          large ? "md:text-2xl text-lg" : "md:text-xl text-lg",
        )}
      >
        {community.name}
      </span>
    </Link>
  );
}
