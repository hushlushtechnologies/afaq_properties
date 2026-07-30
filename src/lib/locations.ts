import propertiesData from "@/data/properties.json";
import locationsData from "@/data/locations.json";
import { Property } from "@/types/property";
import { Location } from "@/types/location";

/**
 * Returns only the emirates that actually have at least one published
 * property, sourced from properties.json. Add more entries to
 * locations.json + a property with that emirate to make a new tile appear.
 */
export function getAvailableLocations(): Location[] {
  const properties = propertiesData as Property[];
  const availableSlugs = new Set(
    properties.filter((p) => p.publishStatus === "published").map((p) => p.emirate)
  );

  const locations = (locationsData as Location[]).filter((loc) =>
    availableSlugs.has(loc.slug)
  );

  return locations.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
}