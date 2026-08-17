import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaSnapchatGhost,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/afaq_almanzil_properties/",
    icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/971545813201?text=Hi%20AFAQ%20Al%20Manzil%20Properties,%20I%20have%20an%20enquiry.",
    icon: FaWhatsapp,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Afaq-Al-Manzil-Properties/61588670230954/",
    icon: FaFacebook,
  },
  { label: "Twiiter", href: "https://x.com/AfaqProperties2", icon: FaTwitter },
  {
    label: "Snapchat",
    href: "https://www.snapchat.com/@afaqalmanzilp26?share_id=2oqy99WSz9w&locale=en-AE",
    icon: FaSnapchatGhost,
  },
];
