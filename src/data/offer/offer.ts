import { Gift } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { OfferCampaignContent } from "@/types/campaign";

export const EMIRATI_WOMEN_OFFER_CONTENT: OfferCampaignContent = {
  eyebrow: "Emirati Women's Day Exclusive",
  title: "Exclusive Binghatti Property Offers for Emirati Women.",
  highlight: ["Emirati Women."],
  description:
    "Special opportunities exclusively for female Emirati nationals. Discover selected Binghatti property offers available for a limited time and connect with our property advisors for complete offer details.",
  primaryCta: {
    label: "Enquire for Offer Details",
    href: "/enquiry-now",
    icon: Gift,
  },
  secondaryCta: {
    label: "WhatsApp Us",
    href: "https://wa.me/971545813201?text=Hi%20AFAQ%20Al%20Manzil%20Properties,%20I%20have%20an%20enquiry.",
    target: "_blank",
    icon: FaWhatsapp,
  },
  dateBadgeLines: ["01 – 07", "September", "2026"],
  campaignBadgeImage: "/assets/random/off.svg",
  campaignBadgeAlt: "Happy Emirati Women's Day",
  propertyImage: "/assets/random/emirati.png",
  propertyImageAlt: "Binghatti property towers at sunset",
  backgroundImage: "/assets/bgAssets/offbg.jpg",
};
