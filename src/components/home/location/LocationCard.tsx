import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Location } from "@/types/location";

interface LocationCardProps {
  location: Location;
  className?: string;
  priority?: boolean;
  large?: boolean;
}

export function LocationCard({ location, className, priority, large }: LocationCardProps) {
  return (
    <Link
      href={`/properties?emirate=${location.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-md border border-border",
        className
      )}
    >
      <Image
        src={location.image}
        alt={`Properties in ${location.name}`}
        fill
        priority={priority}
        sizes={large ? "(min-width: 640px) 40vw, 100vw" : "(min-width: 640px) 20vw, 100vw"}
        className="object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-transform duration-400 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-primary group-hover:text-primary">
        <ArrowUpRight size={16} />
      </span>

      <span
        className={cn(
          "absolute bottom-4 left-4 font-heading font-medium text-white",
          large ? "text-h3" : "text-body-lg"
        )}
      >
        {location.name}
      </span>
    </Link>
  );
}