import type { LegalSection } from "@/types/legal";

export const PRIVACY_POLICY_CONTENT = {
  eyebrow: "Legal Information",
  title: "Privacy Policy",
  description:
    "We value your trust and are committed to handling your personal information responsibly. This Privacy Policy explains what information we collect, how we use it, and the choices available to you.",
  lastUpdated: "August 15, 2026",
  closingTitle: "Your Privacy Matters",
  closingText:
    "We value your trust and are committed to handling your personal information responsibly. If you have any questions or privacy-related concerns, our team is here to assist you.",
};

export const PRIVACY_POLICY_SECTIONS: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    blocks: [
      {
        type: "paragraph",
        text: "Depending on how you interact with us, we may collect:",
      },
      {
        type: "list",
        items: [
          "Full name",
          "Email address",
          "Phone or WhatsApp number",
          "Property preferences and requirements",
          "Preferred location or emirate",
          "Property type and budget range",
          "Enquiry details and messages",
          "Information about a property you are interested in",
        ],
      },
      {
        type: "paragraph",
        text: "We may also automatically collect limited technical information, such as your IP address, browser type, device information, pages visited, and website usage data.",
      },
    ],
  },
  {
    id: "how-we-use-your-information",
    title: "2. How We Use Your Information",
    blocks: [
      { type: "paragraph", text: "We may use your information to:" },
      {
        type: "list",
        items: [
          "Respond to your enquiries and requests",
          "Provide property information and brochures",
          "Assist you in finding suitable property opportunities",
          "Understand your property requirements",
          "Connect you with our property advisors",
          "Arrange consultations and follow-ups",
          "Improve our website and services",
          "Maintain website security",
          "Comply with applicable legal and regulatory requirements",
        ],
      },
    ],
  },
  {
    id: "property-enquiries-and-developer-partners",
    title: "3. Property Enquiries and Developer Partners",
    blocks: [
      {
        type: "paragraph",
        text: "When you enquire about a specific property or development, we may share relevant information with the applicable property developer or authorized partner when necessary to respond to your enquiry or provide requested information.",
      },
      {
        type: "paragraph",
        text: "Third-party developers and partners may process your information according to their own privacy policies and applicable laws.",
      },
    ],
  },
  {
    id: "how-we-share-your-information",
    title: "4. How We Share Your Information",
    blocks: [
      {
        type: "paragraph",
        text: "We do not sell your personal information. Where necessary, we may share relevant information with:",
      },
      {
        type: "list",
        items: [
          "Our authorized team members and representatives",
          "Property developers and relevant partners",
          "Website and technology service providers",
          "Form processing and communication providers",
          "Analytics and security service providers",
          "Government or regulatory authorities where required by law",
        ],
      },
      {
        type: "paragraph",
        text: "We only share information where reasonably necessary for legitimate business, service, or legal purposes.",
      },
    ],
  },
  {
    id: "contact-forms-and-enquiries",
    title: "5. Contact Forms and Enquiries",
    blocks: [
      {
        type: "paragraph",
        text: "Information submitted through our Contact Form is used to respond to your message or request.",
      },
      {
        type: "paragraph",
        text: "Information submitted through our Property Enquiry Form may be used to understand your requirements and provide relevant property assistance.",
      },
      {
        type: "paragraph",
        text: "When you request a property brochure, we may use your contact information to provide the requested material and, where appropriate, follow up regarding your enquiry.",
      },
    ],
  },
  {
    id: "whatsapp-and-third-party-services",
    title: "6. WhatsApp and Third-Party Services",
    blocks: [
      {
        type: "paragraph",
        text: "Our website may provide links to WhatsApp and other third-party services.",
      },
      {
        type: "paragraph",
        text: "If you choose to communicate through these platforms, your information may be processed according to the respective platform's privacy policy and terms.",
      },
      {
        type: "paragraph",
        text: "Our website may also use third-party technology providers for hosting, forms, analytics, security, content management, and other website operations.",
      },
    ],
  },
  {
    id: "cookies-and-analytics",
    title: "7. Cookies and Analytics",
    blocks: [
      {
        type: "paragraph",
        text: "Our website may use cookies and similar technologies to provide essential functionality, improve performance, understand website usage, and enhance your experience.",
      },
      {
        type: "paragraph",
        text: "We may use analytics services, such as Google Analytics, to understand general website traffic and user interactions.",
      },
      {
        type: "paragraph",
        text: 'When you first visit our website, you\'ll be asked to accept or reject non-essential cookies such as analytics. You can change your choice at any time using the "Cookie Settings" link in the footer, or manage cookies directly through your browser settings.',
      },
    ],
  },
  {
    id: "data-security-and-retention",
    title: "8. Data Security and Retention",
    blocks: [
      {
        type: "paragraph",
        text: "We take reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, loss, or disclosure.",
      },
      {
        type: "paragraph",
        text: "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, to provide our services, maintain business records, or comply with applicable legal requirements.",
      },
    ],
  },
  {
    id: "your-privacy-rights",
    title: "9. Your Privacy Rights",
    blocks: [
      {
        type: "paragraph",
        text: "Subject to applicable UAE laws and regulations, you may have rights relating to your personal information, including the right to:",
      },
      {
        type: "list",
        items: [
          "Request access to your personal information",
          "Request correction of inaccurate information",
          "Request deletion where legally applicable",
          "Withdraw consent where applicable",
          "Object to certain processing activities",
        ],
      },
      {
        type: "paragraph",
        text: "To make a privacy-related request, please contact us using the details below. We may need to verify your identity before processing your request.",
      },
    ],
  },
  {
    id: "marketing-communications",
    title: "10. Marketing Communications",
    blocks: [
      {
        type: "paragraph",
        text: "If we send promotional or marketing communications, you may request to stop receiving them where applicable.",
      },
      {
        type: "paragraph",
        text: "You may also use an unsubscribe option provided in marketing communications where available.",
      },
      {
        type: "paragraph",
        text: "You may continue to receive essential communications relating to your enquiries, services, or transactions.",
      },
    ],
  },
  {
    id: "external-links",
    title: "11. External Links",
    blocks: [
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites, including developer websites, social media platforms, WhatsApp, and other external services.",
      },
      {
        type: "paragraph",
        text: "We are not responsible for the privacy practices or content of third-party websites. We recommend reviewing their privacy policies before providing personal information.",
      },
    ],
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "12. Changes to This Privacy Policy",
    blocks: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time to reflect changes to our services, website, technology, or applicable legal requirements.",
      },
      {
        type: "paragraph",
        text: 'Any updates will be published on this page with a revised "Last Updated" date.',
      },
    ],
  },
  {
    id: "contact-us",
    title: "13. Contact Us",
    blocks: [
      {
        type: "paragraph",
        text: "If you have questions about this Privacy Policy or how your personal information is handled, please contact us.",
      },
      { type: "contact" },
    ],
  },
];
