import type {
  Property,
  PropertyStatus,
  PropertyCategory,
  Emirate,
  AvailableUnit,
} from "@/types/property";
import type { SanityProperty } from "@/types/sanity/sanity-property";
import { toImageUrl } from "@/sanity/lib/image";

export function mapSanityPropertyToProperty(sp: SanityProperty): Property {
  return {
    id: sp._id,
    name: sp.name,
    slug: sp.slug,
    publishStatus: "published", // the query already excludes drafts — see Step 7
    featured: sp.featured ?? false,
    displayOrder: sp.displayOrder ?? 0,

    featuredImage: toImageUrl(sp.featuredImage, 1600),
    propertyImage: toImageUrl(sp.propertyImage, 1000),
    gallery: [], // not used by the current UI — see the Step 4 decision
    brochurePdf: sp.brochureUrl ?? undefined,

    emirate: sp.emirate.slug as Emirate,
    community: sp.community.slug,
    status: sp.status as PropertyStatus,
    category: sp.category as PropertyCategory,
    developer: sp.developer.slug,

    startingPrice: sp.startingPrice,
    areaSqFt: sp.areaSqFt,
    availableUnits: (sp.availableUnits ?? []) as AvailableUnit[],
  };
}

export function mapSanityProperties(list: SanityProperty[]): Property[] {
  return list.map(mapSanityPropertyToProperty);
}
