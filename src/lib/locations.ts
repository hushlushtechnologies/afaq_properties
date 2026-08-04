import communitiesData from "@/data/hero/community.json";
import { Emirate } from "@/types/property";
import { Community } from "@/types/community";

/**
 * Returns communities explicitly marked "featured" within a given emirate,
 * regardless of whether a property references them yet — matches how a
 * content editor would toggle "Featured Community" in Sanity. Defaults to
 * Dubai + a max of 5 per current homepage requirement.
 */
export function getFeaturedCommunities(
  emirate: Emirate = "dubai",
  limit = 5,
): Community[] {
  const communities = communitiesData as Community[];
  return communities
    .filter((c) => c.emirate === emirate && c.featured)
    .slice(0, limit);
}
