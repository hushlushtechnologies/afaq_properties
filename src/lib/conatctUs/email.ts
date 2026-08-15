import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "@/lib/conatctUs/contact";
import type { EnquiryFormValues } from "@/lib/conatctUs/enquiry";
import type { BrochureFormValues } from "@/lib/conatctUs/brochure";
import type { BrochureProperty } from "@/types/brochure";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

function assertConfigured(templateId: string | undefined, label: string) {
  if (!SERVICE_ID || !templateId || !PUBLIC_KEY) {
    throw new Error(
      `EmailJS is not configured for ${label}. Check your environment variables.`,
    );
  }
}

export async function sendContactEmail(values: ContactFormValues) {
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  assertConfigured(templateId, "contact form");

  return emailjs.send(
    SERVICE_ID!,
    templateId!,
    {
      name: values.fullName,
      email: values.email,
      phone: values.phone,
      subject: values.subject || "General Enquiry",
      message: values.message || "—",
    },
    PUBLIC_KEY!,
  );
}

export async function sendEnquiryEmail(values: EnquiryFormValues) {
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_ENQUIRY_TEMPLATE_ID;
  assertConfigured(templateId, "enquiry form");

  return emailjs.send(
    SERVICE_ID!,
    templateId!,
    {
      name: values.fullName,
      email: values.email,
      phone: values.phone,
      interestedIn: values.interestedIn || "Not specified",
      emirate: values.interestedEmirate || "Not specified",
      propertyType: values.propertyType || "Not specified",
      budgetMin: `AED ${values.budgetMin.toLocaleString()}`,
      budgetMax: `AED ${values.budgetMax.toLocaleString()}`,
      message: values.message || "—",
    },
    PUBLIC_KEY!,
  );
}

export async function sendBrochureEmail(
  values: BrochureFormValues,
  property: BrochureProperty,
) {
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_BROCHURE_TEMPLATE_ID;
  assertConfigured(templateId, "brochure request");

  return emailjs.send(
    SERVICE_ID!,
    templateId!,
    {
      name: values.fullName,
      email: values.email,
      phone: values.phone,
      propertyName: property.propertyName,
      propertyId: property.propertyId,
      community: property.community ?? "Not specified",
      developer: property.developer ?? "Not specified",
      propertyStatus: property.propertyStatus ?? "Not specified",
      brochureRequested: property.brochureUrl
        ? "Yes — PDF available"
        : "Requested — PDF not yet uploaded",
    },
    PUBLIC_KEY!,
  );
}
