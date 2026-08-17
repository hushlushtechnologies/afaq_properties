export interface FooterLink {
  label: string;
  href: string;
}

export const FOOTER_EXPLORE_LINKS: FooterLink[] = [
  { label: "Properties", href: "/properties" },
  { label: "Off-Plan", href: "/off-plan" },
  { label: "Ready", href: "/ready" },
  { label: "Rental", href: "/rental " },
  { label: "Location", href: "/#locations" },
  { label: "FAQ", href: "/#faq" },
];

export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/#team" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Careers", href: "/careers" },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export const COMPANY_CONTACT = {
  phones: ["+971 54 581 3201"],
  email: "info@afaqalmanzilproperties.com",
  address:
    "AL Zarooni Building - Office no - 501 Sheikh Zayed Rd - near insurance market metro - Al Barsha First - Al Barsha - Dubai",
};
