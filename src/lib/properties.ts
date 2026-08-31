import propertiesData from "@/data/hero/properties.json";
import emiratesData from "@/data/hero/emirates.json";
import communitiesData from "@/data/hero/community.json";
import {
  AvailableUnit,
  Property,
  PropertyCategory,
  PropertyStatus,
  Emirate,
} from "@/types/property";
import { EmirateData } from "@/types/emirate";
import { Community } from "@/types/community";
import { getDeveloperLabel } from "@/lib/developers";

import { sanityClient } from "@/sanity/lib/client";
import {
  allPublishedPropertiesQuery,
  featuredPropertiesQuery,
} from "@/sanity/lib/queries";
import { mapSanityProperties } from "@/sanity/lib/mappers";
import type { SanityProperty } from "@/types/sanity/sanity-property";

import type { BrochureProperty } from "@/types/brochure";

export async function fetchAllPublishedProperties(): Promise<Property[]> {
  const raw = await sanityClient.fetch<SanityProperty[]>(
    allPublishedPropertiesQuery,
  );
  return mapSanityProperties(raw);
}

export async function fetchFeaturedProperties(limit = 6): Promise<Property[]> {
  const raw = await sanityClient.fetch<SanityProperty[]>(
    featuredPropertiesQuery,
    { limit },
  );
  return mapSanityProperties(raw);
}

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
export function formatPriceForStatus(
  amount: number,
  status: PropertyStatus,
): string {
  const base = formatPrice(amount);
  return status === "rental" ? `${base} / year` : base;
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

export const BEDROOM_FILTER_OPTIONS = [
  { value: "studio", label: "Studio" },
  { value: "1", label: "1 Bedroom" },
  { value: "2", label: "2 Bedrooms" },
  { value: "3", label: "3 Bedrooms" },
  { value: "4+", label: "4+ Bedrooms" },
];

export function propertyMatchesBedroom(
  property: Property,
  filter: string,
): boolean {
  if (!filter) return true;
  return property.availableUnits.some((u) => {
    const count = BED_COUNT_MAP[u.type];
    if (filter === "4+") return count >= 4;
    if (filter === "studio") return count === 0;
    return String(count) === filter;
  });
}

const CATEGORY_LABELS: Record<PropertyCategory, string> = {
  apartment: "Apartments",
  villa: "Villas",
  penthouse: "Penthouses",
  townhouse: "Townhouses",
  duplex: "Duplexes",
};

export function getCategoryLabel(category: PropertyCategory): string {
  return CATEGORY_LABELS[category] ?? category;
}

export function getCategoryOptions(
  properties: Property[],
): { value: string; label: string }[] {
  const categories = Array.from(new Set(properties.map((p) => p.category)));
  return categories.map((c) => ({ value: c, label: getCategoryLabel(c) }));
}

const STATUS_LABELS: Record<PropertyStatus, string> = {
  "off-plan": "Off Plan",
  completed: "Ready Properties",
  rental: "Rental",
};

export function getStatusLabel(status: PropertyStatus): string {
  return STATUS_LABELS[status] ?? status;
}

export function getStatusOptions(
  properties: Property[],
): { value: string; label: string }[] {
  const statuses = Array.from(new Set(properties.map((p) => p.status)));
  return statuses.map((s) => ({ value: s, label: getStatusLabel(s) }));
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

export function getPriceBounds(properties: Property[]): {
  min: number;
  max: number;
} {
  if (properties.length === 0) return { min: 0, max: 5000000 };
  const prices = properties.map((p) => p.startingPrice);
  return {
    min: Math.floor(Math.min(...prices) / 10000) * 10000,
    max: Math.ceil(Math.max(...prices) / 10000) * 10000,
  };
}

export interface PropertyFilterValues {
  search: string;
  emirate: string;
  community: string;
  status: string;
  category: string;
  bedrooms: string;
  developer: string;
  minPrice: number;
  maxPrice: number;
}

export function filterProperties(
  properties: Property[],
  filters: PropertyFilterValues,
): Property[] {
  const query = filters.search.trim().toLowerCase();
  return properties.filter((p) => {
    if (query) {
      const haystack =
        `${p.name} ${getCommunityLabel(p.community)} ${getDeveloperLabel(p.developer)}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    if (filters.emirate && p.emirate !== filters.emirate) return false;
    if (filters.community && p.community !== filters.community) return false;
    if (filters.status && p.status !== filters.status) return false;
    if (filters.category && p.category !== filters.category) return false;
    if (filters.developer && p.developer !== filters.developer) return false;
    if (filters.bedrooms && !propertyMatchesBedroom(p, filters.bedrooms))
      return false;
    if (
      p.startingPrice < filters.minPrice ||
      p.startingPrice > filters.maxPrice
    )
      return false;
    return true;
  });
}

export type PropertySort =
  "featured" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

export function sortProperties(
  properties: Property[],
  sort: PropertySort,
): Property[] {
  const sorted = [...properties];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.startingPrice - b.startingPrice);
    case "price-desc":
      return sorted.sort((a, b) => b.startingPrice - a.startingPrice);
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "featured":
    default:
      return sorted.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured) ||
          a.displayOrder - b.displayOrder,
      );
  }
}

export const SORT_OPTIONS: { value: PropertySort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  const properties = propertiesData as Property[];
  return properties.find(
    (p) => p.slug === slug && p.publishStatus === "published",
  );
}

export function toBrochureProperty(property: Property): BrochureProperty {
  return {
    propertyId: property.id,
    propertyName: property.name,
    brochureUrl: property.brochurePdf,
    community: getCommunityLabel(property.community),
    developer: getDeveloperLabel(property.developer),
    propertyStatus: getStatusLabel(property.status),
  };
}
