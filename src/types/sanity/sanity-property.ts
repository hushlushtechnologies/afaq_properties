export interface SanityImageRef {
  asset?: { _ref?: string; _id?: string; url?: string };
  [key: string]: unknown;
}

export interface SanityRelatedDoc {
  name: string;
  slug: string;
}

export interface SanityDeveloperRef extends SanityRelatedDoc {
  logo?: SanityImageRef;
  website?: string;
  description?: string;
}

export interface SanityAvailableUnit {
  type: string;
  startingPrice?: number;
}

export interface SanityProperty {
  _id: string;
  name: string;
  slug: string;
  status: string;
  featured: boolean;
  displayOrder: number;
  category: string;
  areaSqFt: number;
  availableUnits: SanityAvailableUnit[];
  startingPrice: number;
  featuredImage: SanityImageRef;
  propertyImage: SanityImageRef;
  brochureUrl?: string | null;
  emirate: SanityRelatedDoc;
  community: SanityRelatedDoc;
  developer: SanityDeveloperRef;
}
