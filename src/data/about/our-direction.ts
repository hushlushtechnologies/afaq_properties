import { Target, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DirectionItem {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  image: string;
}

export const OUR_DIRECTION_CONTENT = {
  eyebrow: "Our Direction",
  title: "Building a More Trusted Future for UAE Real Estate.",
  highlight: "UAE Real Estate.",
};

export const OUR_DIRECTION_ITEMS: {
  vision: DirectionItem;
  mission: DirectionItem;
} = {
  vision: {
    icon: Target,
    label: "Our Vision",
    title: "To Be a Trusted Name in UAE Real Estate.",
    description:
      "To become one of the UAE's most trusted and innovative real estate partners, setting new standards in excellence, transparency, integrity, and client success.",
    image: "/assets/random/vision.jpg",
  },
  mission: {
    icon: HeartHandshake,
    label: "Our Mission",
    title: "Helping Every Client Move Forward With Confidence.",
    description:
      "To empower our clients with expert advice, carefully selected property opportunities, and personalized real estate solutions that create long-term value.",
    image: "/assets/random/mission.jpg",
  },
};
