import Image from "next/image";
import { MapPin, BedDouble, Ruler, Star, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { PropertyTypeBadge } from "@/components/ui/PropertyTypeBadge";
import { useBrochureModal } from "@/context/BrochureModal";
import type { Property } from "@/types/property";
import {
  formatPriceForStatus,
  getBedRangeLabel,
  getCategoryLabel,
  getStatusLabel,
  getEmirateLabel,
  getCommunityLabel,
  toBrochureProperty,
} from "@/lib/properties";

interface PropertyListCardProps {
  property: Property;
  className?: string;
}

export function PropertyListCard({
  property,
  className,
}: PropertyListCardProps) {
  const { openBrochureModal } = useBrochureModal();

  return (
    <div
      className={cn(
        "group flex flex-col gap-4 overflow-hidden rounded-md border border-border bg-card p-3 sm:flex-row sm:p-4",
        className,
      )}
    >
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded sm:h-auto sm:w-64">
        <Image
          src={property.propertyImage}
          alt={property.name}
          fill
          quality={90}
          sizes="(min-width: 640px) 256px, 100vw"
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
        {property.featured && (
          <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-primary bg-bgPrimary text-primary">
            <Star size={13} fill="currentColor" />
          </span>
        )}
        <div className="absolute left-2 top-2 flex flex-wrap gap-1.5">
          <PropertyTypeBadge>
            {getStatusLabel(property.status)}
          </PropertyTypeBadge>
          <PropertyTypeBadge>
            {getCategoryLabel(property.category)}
          </PropertyTypeBadge>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-heading text-body-lg font-medium text-text">
            {property.name}
          </h3>
          <p className="mt-1 flex items-center gap-1 font-body text-body-sm text-text-secondary">
            <MapPin size={13} /> {getCommunityLabel(property.community)},{" "}
            {getEmirateLabel(property.emirate)}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-body-sm text-text-secondary">
            <span className="flex items-center gap-1">
              <BedDouble size={14} />{" "}
              {getBedRangeLabel(property.availableUnits)}
            </span>
            <span className="flex items-center gap-1">
              <Ruler size={14} /> {property.areaSqFt} Sq.Ft
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-body text-caption text-text-secondary">From</p>
            <p className="font-heading text-h4 text-primary">
              {formatPriceForStatus(property.startingPrice, property.status)}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              onClick={() => openBrochureModal(toBrochureProperty(property))}
              variant="secondary"
              size="sm"
              icon={Download}
            >
              Get Brochure
            </Button>
            <Button
              href={`/contact-us?property=${property.slug}`}
              variant="ghost"
              size="sm"
            >
              Enquiry Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
