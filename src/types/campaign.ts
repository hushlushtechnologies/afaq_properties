import type { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface CampaignCta {
  label: string;
  href: string;
  icon?: LucideIcon | IconType;
  target?: string;
}

export interface OfferCampaignContent {
  eyebrow: string;
  title: string;
  highlight?: string | string[];
  description: string;
  primaryCta: CampaignCta;
  secondaryCta: CampaignCta;
  dateBadgeLines: [string, string, string];
  campaignBadgeImage: string;
  campaignBadgeAlt: string;
  propertyImage: string;
  propertyImageAlt: string;
  backgroundImage?: string;
}
