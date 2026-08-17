import type { LegalSection } from "@/types/legal";

export const TERMS_CONDITIONS_CONTENT = {
  eyebrow: "Legal Information",
  title: "Terms & Conditions",
  description:
    "Please read these Terms & Conditions carefully before using our website or services. By accessing this website, you agree to be bound by the terms outlined below.",
  lastUpdated: "August 15, 2026",
  closingTitle: "Questions About These Terms?",
  closingText:
    "If you have any questions about these Terms & Conditions or how they apply to your use of our website, our team is here to help.",
};

export const TERMS_CONDITIONS_SECTIONS: LegalSection[] = [
  {
    id: "our-services",
    title: "1. Our Services",
    blocks: [
      {
        type: "paragraph",
        text: "Afaq Al Manzil Properties provides real estate information and assistance across the UAE, including property buying, selling, investment consulting, rental assistance, commercial properties, property management, off-plan projects, residential properties, and completed or secondary properties.",
      },
      {
        type: "paragraph",
        text: "Submitting an enquiry does not reserve a property or create a binding agreement.",
      },
    ],
  },
  {
    id: "property-information",
    title: "2. Property Information",
    blocks: [
      {
        type: "paragraph",
        text: "We make reasonable efforts to provide accurate and updated property information. However, property prices, availability, images, specifications, payment plans, and other details may change without notice.",
      },
      {
        type: "paragraph",
        text: "Users should confirm the latest information with our team or the relevant developer before making any property or investment decision.",
      },
    ],
  },
  {
    id: "property-enquiries",
    title: "3. Property Enquiries",
    blocks: [
      {
        type: "paragraph",
        text: "Submitting a property enquiry or requesting a brochure does not guarantee property availability, pricing, or reservation.",
      },
      {
        type: "paragraph",
        text: "Your enquiry may be shared with the relevant property developer or authorized partner when necessary to respond to your request.",
      },
    ],
  },
  {
    id: "investment-disclaimer",
    title: "4. Investment Disclaimer",
    blocks: [
      {
        type: "paragraph",
        text: "Information about property investments, rental returns, capital appreciation, or potential returns is provided for general information only and should not be considered financial, investment, legal, or tax advice.",
      },
      {
        type: "paragraph",
        text: "Afaq Al Manzil Properties does not guarantee any specific investment return or property value.",
      },
    ],
  },
  {
    id: "third-party-developers",
    title: "5. Third-Party Developers",
    blocks: [
      {
        type: "paragraph",
        text: "Some properties displayed on our website may be offered by third-party developers or property partners. Their own terms and conditions may apply.",
      },
      {
        type: "paragraph",
        text: "We are not responsible for changes made by third parties regarding property prices, availability, payment plans, project specifications, or completion timelines.",
      },
    ],
  },
  {
    id: "website-use",
    title: "6. Website Use",
    blocks: [
      {
        type: "paragraph",
        text: "You agree to use this website lawfully and not to:",
      },
      {
        type: "list",
        items: [
          "Submit false or misleading information",
          "Attempt unauthorized access",
          "Interfere with website security or functionality",
          "Introduce harmful software",
          "Copy or misuse website content without permission",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property",
    blocks: [
      {
        type: "paragraph",
        text: "The Afaq Al Manzil Properties brand, website design, text, graphics, images, videos, and other original content are protected by applicable intellectual property laws.",
      },
      {
        type: "paragraph",
        text: "Third-party logos, images, brochures, and property materials remain the property of their respective owners.",
      },
    ],
  },
  {
    id: "external-links",
    title: "8. External Links",
    blocks: [
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites and services, including developer websites, WhatsApp, social media, and other platforms.",
      },
      {
        type: "paragraph",
        text: "We are not responsible for the content, security, privacy practices, or availability of third-party websites.",
      },
    ],
  },
  {
    id: "disclaimer-and-liability",
    title: "9. Disclaimer and Liability",
    blocks: [
      {
        type: "paragraph",
        text: "Website content is provided for general informational purposes. While we aim to keep information accurate and current, we do not guarantee that all content will always be complete, accurate, or up to date.",
      },
      {
        type: "paragraph",
        text: "To the extent permitted by applicable law, Afaq Al Manzil Properties is not responsible for losses arising from reliance on outdated property information, changes in pricing or availability, third-party actions, or website interruptions.",
      },
    ],
  },
  {
    id: "privacy",
    title: "10. Privacy",
    blocks: [
      {
        type: "paragraph",
        text: "Your personal information is handled in accordance with our Privacy Policy.",
      },
    ],
  },
  {
    id: "changes-to-these-terms",
    title: "11. Changes to These Terms",
    blocks: [
      {
        type: "paragraph",
        text: "We may update these Terms & Conditions from time to time. Updates will be published on this page with a revised Last Updated date.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "12. Governing Law",
    blocks: [
      {
        type: "paragraph",
        text: "These Terms & Conditions are intended to be governed by the applicable laws of the United Arab Emirates and the relevant jurisdiction applicable to Afaq Al Manzil Properties.",
      },
    ],
  },
  {
    id: "contact-us",
    title: "13. Contact Us",
    blocks: [
      {
        type: "paragraph",
        text: "If you have questions about these Terms & Conditions, please contact us.",
      },
      { type: "contact" },
    ],
  },
];
