"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, User, Mail, Phone as PhoneIcon } from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";
import { FormStatus } from "@/components/contactUs/form/FormStatus";
import { Home, Building2, RotateCcw, MessageCircle } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/conatctUs/contact";
import { sendContactEmail } from "@/lib/conatctUs/email";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const SUBJECT_MAX = 100;
const MESSAGE_MAX = 1000;

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const subjectValue = watch("subject") ?? "";
  const messageValue = watch("message") ?? "";

  async function onSubmit(values: ContactFormValues) {
    setStatus("loading");
    try {
      await sendContactEmail(values);
      setStatus("success");
      reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <FormStatus
        variant="success"
        title="Message Received"
        subtitle="Thank You for Reaching Out."
        description="We've received your message successfully. Our team will review your enquiry and get back to you as soon as possible. We appreciate your interest in Afaq Al Manzil Properties and look forward to connecting with you."
        primaryAction={{
          label: "Back to Home Page",
          href: "/",
          icon: Home,
          variant: "primary",
        }}
        secondaryAction={{
          label: "Visit Our Properties Page",
          href: "/properties",
          icon: Building2,
          variant: "ghost",
        }}
      />
    );
  }

  if (status === "error") {
    return (
      <FormStatus
        variant="error"
        title="Something Went Wrong."
        description="We couldn't send your message right now. Please try again, or contact our team directly using WhatsApp."
        primaryAction={{
          label: "Try Again",
          onClick: () => setStatus("idle"),
          icon: RotateCcw,
          variant: "success",
        }}
        secondaryAction={{
          label: "WhatsApp Us",
          href: "https://wa.me/971545813201?text=Hi%20AFAQ%20Al%20Manzil%20Properties,%20I%20have%20an%20enquiry.",
          target: "_blank",
          icon: MessageCircle,
          variant: "ghost",
        }}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-md   p-6 sm:p-7"
    >
      <FormField
        label="Full Name"
        htmlFor="fullName"
        required
        error={errors.fullName?.message}
      >
        <Input
          id="fullName"
          icon={User}
          placeholder="Enter your Name"
          error={!!errors.fullName}
          {...register("fullName")}
        />
      </FormField>

      <FormField
        label="Email Address"
        htmlFor="email"
        required
        error={errors.email?.message}
      >
        <Input
          id="email"
          type="email"
          icon={Mail}
          placeholder="Enter your Email ID"
          error={!!errors.email}
          {...register("email")}
        />
      </FormField>

      <FormField
        label="Phone Number (+971)"
        htmlFor="phone"
        required
        error={errors.phone?.message}
      >
        <Input
          id="phone"
          type="tel"
          icon={PhoneIcon}
          placeholder="Enter your Phone Number"
          error={!!errors.phone}
          {...register("phone")}
        />
      </FormField>

      <FormField
        label="Subject"
        htmlFor="subject"
        error={errors.subject?.message}
        hint={`${subjectValue.length}/${SUBJECT_MAX}`}
      >
        <Input
          id="subject"
          placeholder="Enter the Subject"
          maxLength={SUBJECT_MAX}
          error={!!errors.subject}
          {...register("subject")}
        />
      </FormField>

      <FormField
        label="Message"
        htmlFor="message"
        error={errors.message?.message}
        hint={`${messageValue.length}/${MESSAGE_MAX}`}
      >
        <Textarea
          id="message"
          rows={5}
          placeholder="Write Something..."
          maxLength={MESSAGE_MAX}
          error={!!errors.message}
          {...register("message")}
        />
      </FormField>

      <Button
        type="submit"
        variant="primary"
        size="md"
        icon={Send}
        disabled={status === "loading"}
        className="w-full rounded"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-center font-body text-caption text-subtle">
        By clicking &quot;Send Message,&quot; you agree to our Privacy Policy
        and consent to being contacted regarding your enquiry.
      </p>
    </form>
  );
}
