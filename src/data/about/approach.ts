import type { JourneyStep } from "@/types/journey";

export const OUR_APPROACH_IMAGE = "/assets/bgAssets/journey.jpg";

export const OUR_APPROACH_STEPS: JourneyStep[] = [
  {
    id: "start-with-you",
    icon: "MessageSquare",
    title: "Start With You",
    description:
      "We begin by understanding your lifestyle, preferences, budget, and investment objectives to create a clear picture of what the right opportunity looks like for you.",
  },
  {
    id: "find-the-right-fit",
    icon: "Search",
    title: "Find the Right Fit",
    description:
      "Using our knowledge of the UAE market and developer network, we identify properties and opportunities that align with your goals and priorities.",
  },
  {
    id: "decide-with-clarity",
    icon: "FileCheck",
    title: "Decide With Clarity",
    description:
      "We provide clear information, relevant market insights, and professional guidance so you can evaluate your options and make informed decisions with confidence.",
  },
  {
    id: "support-your-journey",
    icon: "Users",
    title: "Support Your Journey",
    description:
      "Our relationship doesn't end with the property selection. We remain available to support you through the next steps and help make the overall experience as smooth as possible.",
  },
];
