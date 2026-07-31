import { Emirate } from "@/types/property";

export interface Community {
  slug: string;
  name: string;
  emirate: Emirate;
  image: string;
  featured?: boolean;
}
