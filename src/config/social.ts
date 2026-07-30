import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import type { IconType } from "react-icons";



export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "WhatsApp", href: "https://wa.me/971500000000", icon: FaWhatsapp },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
];