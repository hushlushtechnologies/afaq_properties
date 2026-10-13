"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

interface PropertyCardProps {
  property: Property;
  className?: string;
  large?: boolean;
  priority?: boolean;
  imageVariant?: "featured" | "listing";
  showFeaturedBadge?: boolean;
}

// Booking status configuration
const BOOKING_STATUS_CONFIG = {
  "booking-open": {
    label: "Booking Open",
    className: "border-emerald-400/30 bg-emerald-600 text-white",
  },
  "eoi-open": {
    label: "EOI Submission Open",
    className: "border-primary/40 bg-bgPrimary text-primary",
  },
} as const;

export function PropertyCard({
  property,
  className,
  large,
  priority,
  imageVariant = "listing",
  showFeaturedBadge = false,
}: PropertyCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { openBrochureModal } = useBrochureModal();

  const imageSrc =
    imageVariant === "featured"
      ? property.featuredImage
      : property.propertyImage;

  // Get booking status from JSON
  const bookingStatus =
    property.bookingStatus && property.bookingStatus !== "none"
      ? BOOKING_STATUS_CONFIG[property.bookingStatus]
      : null;

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
      {/* Property Image */}
      <motion.div
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.08 },
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
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

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/40" />

      {/* Property Type Badges */}
      <div className="absolute left-3 top-3 z-20 flex flex-wrap gap-2">
        <PropertyTypeBadge>{getStatusLabel(property.status)}</PropertyTypeBadge>

        <PropertyTypeBadge>
          {getCategoryLabel(property.category)}
        </PropertyTypeBadge>
      </div>

      {/* Featured Badge */}
      {showFeaturedBadge && property.featured && (
        <span
          className={cn(
            "absolute right-3 top-3 z-20",
            "flex h-7 w-7 items-center justify-center",
            "rounded-full border border-primary",
            "bg-bgPrimary text-primary",
          )}
          aria-label="Featured property"
          title="Featured Property"
        >
          <Star size={13} fill="currentColor" />
        </span>
      )}

      {/* Booking / EOI Status Badge */}
      {bookingStatus && (
        <span
          className={cn(
            "absolute right-3 z-20",
            showFeaturedBadge && property.featured ? "top-12" : "top-3",
            "inline-flex items-center",
            "rounded-full border border-primary",
            "px-3 py-1.5",
            "font-body text-[10px] font-semibold",
            "uppercase tracking-wider",
            "shadow-lg backdrop-blur-sm",
            bookingStatus.className,
          )}
        >
          {bookingStatus.label}
        </span>
      )}

      {/* Property Information */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-4">
        {/* Property Name */}
        <h3
          className={cn(
            "font-heading font-semibold text-text",
            large ? "text-h4" : "text-body-lg",
          )}
        >
          {property.name}
        </h3>

        {/* Starting Price */}
        <p className="mt-1 font-body text-xs text-subtle">From</p>

        <p className="font-heading text-h4 font-medium text-primary">
          {formatPriceForStatus(property.startingPrice, property.status)}
        </p>

        {/* Expandable Property Details */}
        <motion.div
          variants={{
            rest: {
              opacity: 0,
              height: 0,
              marginTop: 0,
            },
            hover: {
              opacity: 1,
              height: "auto",
              marginTop: 10,
            },
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden"
        >
          {/* Property Specifications */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-caption text-text-secondary">
            {/* Location */}
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {getCommunityLabel(property.community)},{" "}
              {getEmirateLabel(property.emirate)}
            </span>

            {/* Bedrooms */}
            <span className="flex items-center gap-1">
              <BedDouble size={12} />

              {getBedRangeLabel(property.availableUnits ?? [])}
            </span>

            {/* Area */}
            {property.areaSqFt > 0 && (
              <span className="flex items-center gap-1">
                <Ruler size={12} />
                {property.areaSqFt} Sq.Ft
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div
            className="mt-3 flex flex-wrap gap-2"
            onClick={(e) => e.stopPropagation()}
          >
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
