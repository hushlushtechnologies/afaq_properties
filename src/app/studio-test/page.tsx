import { sanityClient } from "@/sanity/lib/client";
import { allPublishedPropertiesQuery } from "@/sanity/lib/queries";
import { mapSanityProperties } from "@/sanity/lib/mappers";
import { PropertyCard } from "@/components/home/featuredproperties/PropertyCard";

export default async function StudioTestPage() {
  const raw = await sanityClient.fetch(allPublishedPropertiesQuery);
  const properties = mapSanityProperties(raw);

  return (
    <main className="min-h-screen bg-background p-10">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            className="h-80"
          />
        ))}
      </div>
    </main>
  );
}
