"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, BedDouble, Ruler, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { PropertyTypeBadge } from "@/components/ui/PropertyTypeBadge";
import { Property } from "@/types/property";
import {
  formatPriceForStatus,
  getBedRangeLabel,
  getCategoryLabel,
  getStatusLabel,
  getEmirateLabel,
  getCommunityLabel,
} from "@/lib/properties";

interface PropertyCardProps {
  property: Property;
  className?: string;
  large?: boolean;
  priority?: boolean;
  imageVariant?: "featured" | "listing";
  showFeaturedBadge?: boolean;
}

export function PropertyCard({
  property,
  className,
  large,
  priority,
  imageVariant = "listing",
  showFeaturedBadge = false,
}: PropertyCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const imageSrc =
    imageVariant === "featured"
      ? property.featuredImage
      : property.propertyImage;
  const brochureHref =
    property.brochurePdf ??
    `/contact-us?type=brochure&property=${property.slug}`;

  return (
    <motion.div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      animate={isOpen ? "hover" : "rest"}
      initial="rest"
      whileHover="hover"
      className={cn(
        "group relative overflow-hidden rounded-md border border-border",
        className,
      )}
    >
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt={property.name}
          fill
          priority={priority}
          quality={90}
          sizes={
            large
              ? "(min-width: 1024px) 45vw, 100vw"
              : "(min-width: 1024px) 22vw, 100vw"
          }
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/40" />

      <div className="absolute left-3 top-3 z-20 flex flex-wrap gap-2">
        <PropertyTypeBadge>{getStatusLabel(property.status)}</PropertyTypeBadge>
        <PropertyTypeBadge>
          {getCategoryLabel(property.category)}
        </PropertyTypeBadge>
      </div>

      {showFeaturedBadge && property.featured && (
        <span className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-primary bg-bgPrimary text-primary">
          <Star size={13} fill="currentColor" />
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 z-20 p-4">
        <h3
          className={cn(
            "font-heading  text-text font-semibold",
            large ? "text-h4" : "text-body-lg",
          )}
        >
          {property.name}
        </h3>
        <p className="mt-1 font-body text-xs text-subtle">From</p>
        <p className="font-heading text-h4 text-primary font-medium">
          {formatPriceForStatus(property.startingPrice, property.status)}
        </p>

        <motion.div
          variants={{
            rest: { opacity: 0, height: 0, marginTop: 0 },
            hover: { opacity: 1, height: "auto", marginTop: 10 },
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-caption text-text-secondary">
            <span className="flex items-center gap-1">
              <MapPin size={12} /> {getCommunityLabel(property.community)},{" "}
              {getEmirateLabel(property.emirate)}
            </span>
            <span className="flex items-center gap-1">
              <BedDouble size={12} />{" "}
              {getBedRangeLabel(property.availableUnits)}
            </span>
            <span className="flex items-center gap-1">
              <Ruler size={12} /> {property.areaSqFt} Sq.Ft
            </span>
          </div>

          <div
            className="mt-3 flex flex-wrap gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              href={brochureHref}
              target={property.brochurePdf ? "_blank" : undefined}
              variant="secondary"
              size="sm"
            >
              Get Brochure
            </Button>
            <Button
              href={`/enquiry?property=${property.slug}`}
              variant="ghost"
              size="sm"
            >
              Enquiry Now
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
