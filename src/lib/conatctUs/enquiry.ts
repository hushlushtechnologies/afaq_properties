import { z } from "zod";

export const enquiryFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number"),
  interestedIn: z.string().optional().or(z.literal("")),
  interestedEmirate: z.string().optional().or(z.literal("")),
  propertyType: z.string().optional().or(z.literal("")),
  budgetMin: z.number(),
  budgetMax: z.number(),
  message: z
    .string()
    .trim()
    .max(500, "Message must be under 500 characters")
    .optional()
    .or(z.literal("")),
});

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;
