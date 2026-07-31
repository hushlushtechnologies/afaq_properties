import propertiesData from "@/data/properties.json";
import emiratesData from "@/data/emirates.json";
import communitiesData from "@/data/community.json";
import {
  AvailableUnit,
  Property,
  PropertyCategory,
  PropertyStatus,
  Emirate,
} from "@/types/property";
import { EmirateData } from "@/types/emirate";
import { Community } from "@/types/community";

export function getFeaturedProperties(limit = 6): Property[] {
  const properties = propertiesData as Property[];
  return properties
    .filter((p) => p.publishStatus === "published" && p.featured)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .slice(0, limit);
}

export function getAllPublishedProperties(): Property[] {
  const properties = propertiesData as Property[];
  return properties
    .filter((p) => p.publishStatus === "published")
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function formatPrice(amount: number): string {
  return `AED ${amount.toLocaleString("en-US")}`;
}

const BED_COUNT_MAP: Record<AvailableUnit["type"], number> = {
  studio: 0,
  "1-bedroom": 1,
  "2-bedroom": 2,
  "3-bedroom": 3,
  "4-bedroom": 4,
  penthouse: 5,
};

export function getBedRangeLabel(units: AvailableUnit[]): string {
  if (!units || units.length === 0) return "—";

  const label = (n: number) =>
    n === 0 ? "Studio" : n === 5 ? "Penthouse" : `${n} Bed`;
  const counts = units.map((u) => BED_COUNT_MAP[u.type]).sort((a, b) => a - b);
  const min = counts[0];
  const max = counts[counts.length - 1];

  if (min === max) return label(min);
  if (min === 0) return `Studio - ${label(max)}`;
  if (max === 5) return `${label(min)} - Penthouse`;
  return `${min} - ${max} Bed`;
}

const CATEGORY_LABELS: Record<PropertyCategory, string> = {
  apartment: "Apartments",
  villa: "Villas",
  penthouse: "Penthouses",
  townhouse: "Townhouses",
};

export function getCategoryLabel(category: PropertyCategory): string {
  return CATEGORY_LABELS[category] ?? category;
}

const STATUS_LABELS: Record<PropertyStatus, string> = {
  "off-plan": "Off Plan",
  completed: "Secondary",
  rental: "Rental",
};

export function getStatusLabel(status: PropertyStatus): string {
  return STATUS_LABELS[status] ?? status;
}

export function getEmirateLabel(emirateSlug: Emirate): string {
  const emirates = emiratesData as EmirateData[];
  return emirates.find((e) => e.slug === emirateSlug)?.name ?? emirateSlug;
}

export function getCommunityLabel(communitySlug: string): string {
  const communities = communitiesData as Community[];
  return (
    communities.find((c) => c.slug === communitySlug)?.name ?? communitySlug
  );
}
