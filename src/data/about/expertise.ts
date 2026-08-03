export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const OUR_EXPERTISE_CONTENT = {
  eyebrow: "Our Expertise",
  title: "Opportunities Across the UAE Real Estate Market.",
  highlight: "Opportunities",
  description:
    "Explore a curated selection of off-plan and secondary properties across the UAE, selected for their location, lifestyle, and potential.",
  ctaLabel: "View All Properties",
  ctaHref: "/properties",
};

export const OUR_EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: "off-plan",
    title: "Off-Plan Projects",
    description:
      "Explore carefully selected investment opportunities from leading UAE developers, with flexible payment plans, emerging communities, and opportunities for long-term growth.",
    image: "/assets/random/offplan.jpg",
    href: "/off-plan",
  },
  {
    id: "secondary",
    title: "Secondary Properties",
    description:
      "Discover completed and move-in ready properties across established UAE communities, offering immediate ownership opportunities for homeowners and investors.",
    image: "/assets/random/commercial.jpg",
    href: "/ready",
  },
  {
    id: "residential",
    title: "Residential Real Estate",
    description:
      "From contemporary apartments to luxury villas and premium residences, we help you find a home that reflects your lifestyle, aspirations, and future plans.",
    image: "/assets/random/residential.jpg",
    href: "/properties",
  },
  {
    id: "investment",
    title: "Real Estate Investment",
    description:
      "Navigate the UAE property market with a strategic approach focused on opportunities that align with your investment goals, rental potential, and long-term value.",
    image: "/assets/random/investment.jpg",
    href: "/services",
  },
];
