import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  {
    label: "WhatsApp",
    href: "https://wa.me/971545813201?text=Hi%20AFAQ%20Al%20Manzil%20Properties,%20I%20have%20an%20enquiry.",
    icon: FaWhatsapp,
  },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
];
