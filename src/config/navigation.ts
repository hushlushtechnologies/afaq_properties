export interface NavLink {
  label: string;
  href: string;
  enabled?: boolean;
}

export interface CTAButton {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", enabled: true },
  { label: "About Us", href: "/about-us", enabled: true },
  { label: "Properties", href: "/properties", enabled: false },
  { label: "Off-Plan", href: "/off-plan", enabled: false },
  { label: "Ready Properties", href: "/ready", enabled: false },
  { label: "Rental", href: "/rental", enabled: false },
  { label: "Service", href: "/services", enabled: true },
  { label: "Careers", href: "/careers", enabled: true },
  { label: "Contact Us", href: "/contact-us", enabled: true },
];

export const NAV_CTA: CTAButton = {
  label: "Enquire Now",
  href: "/enquiry",
};
