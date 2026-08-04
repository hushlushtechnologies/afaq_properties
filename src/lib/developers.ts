import developersData from "@/data/hero/developers.json";
import type { Developer } from "@/types/developer";

export function getAllDevelopers(): Developer[] {
  return developersData as Developer[];
}

export function getDeveloperLabel(slug: string): string {
  const developers = developersData as Developer[];
  return developers.find((d) => d.slug === slug)?.name ?? slug;
}
