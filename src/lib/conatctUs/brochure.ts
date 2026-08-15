import { z } from "zod";

export const brochureFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter your phone number.")
    .max(20, "Please enter a valid phone number."),
});

export type BrochureFormValues = z.infer<typeof brochureFormSchema>;
