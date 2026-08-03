import { COMPANY_CONTACT } from "@/config/footer";
import { SOCIAL_LINKS } from "@/config/social";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.afaqalmanzil.com";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Afaq Al Manzil Properties",
    url: SITE_URL,
    image: `${SITE_URL}/og-default.jpg`,
    logo: `${SITE_URL}/og-default.jpg`,
    telephone: COMPANY_CONTACT.phones[0]?.replace(/\s+/g, ""),
    email: COMPANY_CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_CONTACT.address,
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Dubai" },
      { "@type": "AdministrativeArea", name: "Abu Dhabi" },
      { "@type": "AdministrativeArea", name: "Sharjah" },
      { "@type": "AdministrativeArea", name: "Ras Al Khaimah" },
      { "@type": "AdministrativeArea", name: "Ajman" },
    ],
    sameAs: SOCIAL_LINKS.map((s) => s.href),
  };
}
