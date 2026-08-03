import type { JourneyStep } from "@/types/journey";

export const PROPERTY_JOURNEY_IMAGE = "/assets/bgAssets/property-journey.jpg";

export const PROPERTY_JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "tell-us",
    icon: "ClipboardList",
    title: "Tell Us What You Need",
    description:
      "Share your goals, preferences, budget, and the type of property you're looking for.",
  },
  {
    id: "explore",
    icon: "Compass",
    title: "Explore the Right Opportunities",
    description:
      "Our team helps you discover carefully selected properties that match your lifestyle or investment objectives.",
  },
  {
    id: "move",
    icon: "Handshake",
    title: "Make Your Move",
    description:
      "From enquiry to decision, we provide the guidance and support you need to move forward with confidence.",
  },
];
