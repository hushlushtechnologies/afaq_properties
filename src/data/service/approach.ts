import type { JourneyStep } from "@/types/journey";

export const OUR_APPROACH_IMAGE = "/assets/bgAssets/service-journey.jpg";

export const OUR_APPROACH_STEPS: JourneyStep[] = [
  {
    id: "tell-us-what-you-need",
    icon: "MessageSquare",
    title: "Tell Us What You Need",
    description:
      "Share your property requirements, lifestyle preferences, budget, or investment objectives with our team.",
  },
  {
    id: "explore-your-options",
    icon: "Search",
    title: "Explore Your Options",
    description:
      "We identify relevant properties and opportunities based on your requirements and goals across the UAE market.",
  },
  {
    id: "make-a-confident-decision",
    icon: "FileCheck",
    title: "Make a Confident Decision",
    description:
      "Receive clear information, relevant market insights, and professional guidance to help you evaluate your options.",
  },
  {
    id: "move-forward-with-confidence",
    icon: "Users",
    title: "Move Forward With Confidence",
    description:
      "Once you've found the right opportunity, our team remains available to help you navigate the next steps of your property journey.",
  },
];
