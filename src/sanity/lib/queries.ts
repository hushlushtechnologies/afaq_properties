// Shared projection: the exact set of fields every property query returns.
// Keeping this in one place means every query below stays consistent —
// change a field here once, and every query automatically includes it.
const PROPERTY_PROJECTION = `{
  _id,
  name,
  "slug": slug.current,
  status,
  featured,
  displayOrder,
  category,
  areaSqFt,
  availableUnits,
  startingPrice,
  featuredImage,
  propertyImage,
  "brochureUrl": brochure.asset->url,
  "emirate": emirate->{ name, "slug": slug.current },
  "community": community->{ name, "slug": slug.current },
  "developer": developer->{ name, "slug": slug.current, logo, website, description }
}`;

// Excludes Sanity's internal draft copies — belt-and-suspenders alongside
// the client's default published-only read access from Step 6.
const PUBLISHED_FILTER = `!(_id in path("drafts.**"))`;

export const allPublishedPropertiesQuery = `
  *[_type == "property" && ${PUBLISHED_FILTER}] | order(displayOrder asc) ${PROPERTY_PROJECTION}
`;

export const featuredPropertiesQuery = `
  *[_type == "property" && ${PUBLISHED_FILTER} && featured == true]
  | order(displayOrder asc) [0...$limit]
  ${PROPERTY_PROJECTION}
`;

export const propertiesByStatusQuery = `
  *[_type == "property" && ${PUBLISHED_FILTER} && status == $status]
  | order(displayOrder asc)
  ${PROPERTY_PROJECTION}
`;

export const propertyBySlugQuery = `
  *[_type == "property" && ${PUBLISHED_FILTER} && slug.current == $slug][0]
  ${PROPERTY_PROJECTION}
`;

export const allEmiratesQuery = `
  *[_type == "emirate"] | order(name asc) {
    name,
    "slug": slug.current,
    image
  }
`;

export const allCommunitiesQuery = `
  *[_type == "community"] | order(name asc) {
    name,
    "slug": slug.current,
    featured,
    image,
    "emirate": emirate->{ name, "slug": slug.current }
  }
`;

export const communitiesByEmirateQuery = `
  *[_type == "community" && emirate->slug.current == $emirateSlug] | order(name asc) {
    name,
    "slug": slug.current,
    featured,
    image
  }
`;

export const featuredCommunitiesQuery = `
  *[_type == "community" && featured == true && emirate->slug.current == $emirateSlug]
  | order(name asc) [0...$limit] {
    name,
    "slug": slug.current,
    image
  }
`;

export const allDevelopersQuery = `
  *[_type == "developer"] | order(name asc) {
    name,
    "slug": slug.current,
    logo,
    description,
    website
  }
`;
