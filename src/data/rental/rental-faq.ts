import type { FAQItem } from "@/types/faq";

export const RENTAL_FAQ_CONTENT = {
  eyebrow: "Frequently Asked Questions",
  title: "Everything You Need to Know Before You Renting.",
  highlight: "You Renting.",
  description:
    "Explore answers to common questions about renting, required documents, viewings, and the rental process in the UAE.",
};

export const RENTAL_FAQ_ITEMS: FAQItem[] = [
  {
    id: "how-rental-process-works",
    question: "How does the rental process work?",
    answer:
      "Once you find a property you're interested in, we arrange a viewing, guide you through the offer and contract terms, and support you through signing and move-in, ensuring a smooth end-to-end experience.",
  },
  {
    id: "documents-required",
    question: "What documents are required to rent a property?",
    answer:
      "Typically you'll need a valid passport and Emirates ID (or visa page for new residents), and in some cases proof of income or an employment letter, depending on the landlord's requirements.",
  },
  {
    id: "popular-rental-areas",
    question: "What areas are popular for rentals?",
    answer:
      "Communities like Dubai Marina, Downtown Dubai, and Business Bay are popular for their lifestyle and connectivity, though the right area depends on your budget, commute, and lifestyle preferences.",
  },
  {
    id: "help-with-viewings",
    question: "Can Afaq help with property viewings?",
    answer:
      "Yes. Our team arranges and accompanies property viewings so you can see the unit, building amenities, and surrounding community before making a decision.",
  },
  {
    id: "rental-costs",
    question: "What rental costs should I expect?",
    answer:
      "Beyond the annual rent, expect a security deposit, agency commission, and DEWA/utility connection fees. We'll walk you through the full cost breakdown before you commit.",
  },
  {
    id: "furnished-property",
    question: "Can I rent a furnished property?",
    answer:
      "Yes, many rental properties across the UAE are available furnished or unfurnished. Let us know your preference and we'll filter options that match.",
  },
];
