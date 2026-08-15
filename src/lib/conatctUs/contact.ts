import { z } from "zod";

export const contactFormSchema = z.object({
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
  subject: z
    .string()
    .trim()
    .max(100, "Subject must be under 100 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(1000, "Message must be under 1000 characters")
    .optional()
    .or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
