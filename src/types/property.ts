export type PropertyStatus = "off-plan" | "completed" | "rental";
export type PropertyCategory =
  | "apartment"
  | "villa"
  | "penthouse"
  | "townhouse";
export type Emirate =
  | "dubai"
  | "abu-dhabi"
  | "sharjah"
  | "ras-al-khaimah"
  | "ajman"
  | "fujairah"
  | "umm-al-quwain";

export interface AvailableUnit {
  type:
    | "studio"
    | "1-bedroom"
    | "2-bedroom"
    | "3-bedroom"
    | "4-bedroom"
    | "penthouse";
  startingPrice?: number;
}

export interface SEO {
  title?: string;
  description?: string;
  ogImage?: string;
}

export interface Property {
  id: string;
  name: string;
  slug: string;
  publishStatus: "draft" | "published";
  featured: boolean;
  displayOrder: number;

  featuredImage: string; // used only in the homepage Featured Properties section
  propertyImage: string; // used on listing cards (Off-Plan / Secondary / Properties pages)
  gallery: string[];
  brochurePdf?: string;

  emirate: Emirate;
  community: string; // references Community.slug

  status: PropertyStatus;
  category: PropertyCategory;
  developer: string; // references Developer.slug

  startingPrice: number;
  areaSqFt: number;

  availableUnits: AvailableUnit[];

  seo?: SEO;
}
