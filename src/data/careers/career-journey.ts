import type { JourneyStep } from "@/types/journey";

export const OUR_APPROACH_IMAGE = "/assets/bgAssets/career-journey.jpg";

export const CAREER_JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "apply",
    icon: "FileText",
    title: "Apply",
    description: "Submit your CV and application for a suitable position.",
  },
  {
    id: "connect",
    icon: "Users",
    title: "Connect",
    description:
      "Our team reviews your application and reaches out if your profile matches.",
  },
  {
    id: "meet",
    icon: "Handshake",
    title: "Meet",
    description:
      "Meet with our team to discuss your experience, skills, and career goals.",
  },
  {
    id: "join-us",
    icon: "Sparkles",
    title: "Join Us",
    description:
      "We'll be delighted to welcome you to Afaq Al Manzil for each other's opportunities.",
  },
];
