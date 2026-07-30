import { Emirate } from "@/types/property";

export interface Location {
  slug: Emirate;
  name: string;
  image: string;
  featured?: boolean;
}