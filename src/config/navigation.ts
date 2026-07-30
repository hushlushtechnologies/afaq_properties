export interface NavLink {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Properties", href: "/properties" },
  { label: "Off-Plan", href: "/off-plan" },
  { label: "Ready Proprties", href: "/ready" },
  { label: "Rental", href: "/rental" },
  { label: "Service", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
  
];

export const NAV_CTA: CTAButton = {
  label: "Enquire Now",
  href: "/enquiry",
};