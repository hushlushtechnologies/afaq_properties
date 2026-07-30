import {   MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: MessageCircle },
  { label: "WhatsApp", href: "https://wa.me/971500000000", icon: MessageCircle },
  { label: "Facebook", href: "https://facebook.com", icon: MessageCircle },
  { label: "LinkedIn", href: "https://linkedin.com", icon: MessageCircle },
];