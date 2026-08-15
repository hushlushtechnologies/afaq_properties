"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import {
  Download,
  User,
  Mail,
  Phone as PhoneIcon,
  Check,
  X as XIcon,
  RotateCcw,
} from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  brochureFormSchema,
  type BrochureFormValues,
} from "@/lib/conatctUs/brochure";
import { sendBrochureEmail } from "@/lib/conatctUs/email";
import { EASE_SMOOTH } from "@/lib/motion";
import type { BrochureProperty } from "@/types/brochure";

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface BrochureDownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  property: BrochureProperty | null;
}

export function BrochureDownloadModal({
  open,
  onOpenChange,
  property,
}: BrochureDownloadModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BrochureFormValues>({
    resolver: zodResolver(brochureFormSchema),
    defaultValues: { fullName: "", email: "", phone: "" },
  });

  function handleClose(nextOpen: boolean) {
    if (nextOpen) return;
    onOpenChange(false);
    setTimeout(() => {
      setStatus("idle");
      reset();
    }, 300);
  }

  async function onSubmit(values: BrochureFormValues) {
    if (!property) return;
    setStatus("loading");
    try {
      await sendBrochureEmail(values, property);
      setStatus("success");

      if (property.brochureUrl) {
        const link = document.createElement("a");
        link.href = property.brochureUrl;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Brochure request failed:", error);
      setStatus("error");
    }
  }

  if (!property) return null;

  const fadeIn = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: EASE_SMOOTH },
  };

  return (
    <Modal
      open={open}
      onOpenChange={handleClose}
      title={
        status === "success" || status === "error"
          ? "Brochure Request"
          : "Get the Brochure"
      }
      description={
        status === "idle" || status === "loading"
          ? `Enter your details to receive the brochure for ${property.propertyName}.`
          : undefined
      }
    >
      {(status === "idle" || status === "loading") && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          <FormField
            label="Full Name"
            htmlFor="brochureFullName"
            required
            error={errors.fullName?.message}
          >
            <Input
              id="brochureFullName"
              icon={User}
              placeholder="Enter your Name"
              error={!!errors.fullName}
              {...register("fullName")}
            />
          </FormField>

          <FormField
            label="Email Address"
            htmlFor="brochureEmail"
            required
            error={errors.email?.message}
          >
            <Input
              id="brochureEmail"
              type="email"
              icon={Mail}
              placeholder="Enter your Email ID"
              error={!!errors.email}
              {...register("email")}
            />
          </FormField>

          <FormField
            label="Phone Number"
            htmlFor="brochurePhone"
            required
            error={errors.phone?.message}
          >
            <Input
              id="brochurePhone"
              type="tel"
              icon={PhoneIcon}
              placeholder="Enter your Phone Number"
              error={!!errors.phone}
              {...register("phone")}
            />
          </FormField>

          <Button
            type="submit"
            variant="primary"
            size="md"
            icon={Download}
            disabled={status === "loading"}
            className="mt-1 w-full rounded"
          >
            {status === "loading"
              ? "Preparing Brochure..."
              : "Download Brochure"}
          </Button>
        </form>
      )}

      {status === "success" && (
        <motion.div
          {...fadeIn}
          className="flex flex-col items-center py-2 text-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-success text-success">
            <Check size={24} />
          </span>
          <p className="mt-4 font-heading text-body-lg font-medium text-text">
            {property.brochureUrl
              ? "Your Brochure Is Ready."
              : "Request Received."}
          </p>
          <p className="mt-2 font-body text-body-sm text-text-secondary">
            {property.brochureUrl
              ? "Your download will begin shortly. We've also shared your enquiry with our team."
              : "This brochure isn't available for instant download yet — our team will send it to you directly by email shortly."}
          </p>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => handleClose(false)}
            className="mt-5 rounded"
          >
            Done
          </Button>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          {...fadeIn}
          className="flex flex-col items-center py-2 text-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-error text-error">
            <XIcon size={24} />
          </span>
          <p className="mt-4 font-heading font-bold text-body-lg  text-text">
            Something Went Wrong.
          </p>
          <p className="mt-2 font-body text-body-sm text-text-secondary">
            We couldn&apos;t process your request right now. Please try again.
          </p>
          <Button
            type="button"
            variant="success"
            size="md"
            icon={RotateCcw}
            onClick={() => setStatus("idle")}
            className="mt-5 "
          >
            Try Again
          </Button>
        </motion.div>
      )}
    </Modal>
  );
}
