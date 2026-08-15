"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  User,
  Mail,
  Phone as PhoneIcon,
  Building2,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { SelectDropdown } from "@/components/ui/SelectDropDown";
import { RangeSlider } from "@/components/ui/RangeSlider";
import { Button } from "@/components/ui/Button";
import { FormStatus } from "@/components/contactUs/form/FormStatus";
import {
  enquiryFormSchema,
  type EnquiryFormValues,
} from "@/lib/conatctUs/enquiry";
import { sendEnquiryEmail } from "@/lib/conatctUs/email";
import {
  getAllPublishedProperties,
  getStatusOptions,
  getCategoryOptions,
  getPriceBounds,
} from "@/lib/properties";
import emiratesData from "@/data/hero/emirates.json";
import type { EmirateData } from "@/types/emirate";

type SubmitStatus = "idle" | "loading" | "success" | "error";
const MESSAGE_MAX = 500;

export function EnquiryForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const allProperties = getAllPublishedProperties();
  const priceBounds = getPriceBounds(allProperties);

  const interestedInOptions = [
    ...getStatusOptions(allProperties),
    { value: "others", label: "Others" },
  ];
  const emirateOptions = (emiratesData as EmirateData[]).map((e) => ({
    value: e.slug,
    label: e.name,
  }));
  const propertyTypeOptions = getCategoryOptions(allProperties);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      interestedIn: "",
      interestedEmirate: "",
      propertyType: "",
      budgetMin: priceBounds.min,
      budgetMax: priceBounds.max,
      message: "",
    },
  });

  const interestedIn = watch("interestedIn") ?? "";
  const interestedEmirate = watch("interestedEmirate") ?? "";
  const propertyType = watch("propertyType") ?? "";
  const budgetMin = watch("budgetMin") ?? priceBounds.min;
  const budgetMax = watch("budgetMax") ?? priceBounds.max;
  const messageValue = watch("message") ?? "";

  async function onSubmit(values: EnquiryFormValues) {
    setStatus("loading");
    try {
      await sendEnquiryEmail(values);
      setStatus("success");
      reset();
    } catch (error) {
      console.error("Enquiry form submission failed:", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <FormStatus
        variant="success"
        title="Enquiry Received"
        subtitle="Thank You. Your Enquiry Is With Us."
        description="We've received your property enquiry and our team will review your requirements and get back to you shortly with suitable options. In the meantime, feel free to explore more properties or reach us directly on WhatsApp."
        primaryAction={{
          label: "Explore Properties",
          href: "/properties",
          icon: Building2,
          variant: "primary",
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

  if (status === "error") {
    return (
      <FormStatus
        variant="error"
        title="Something Went Wrong."
        description="Something went wrong while submitting your enquiry. Please try again, or contact our team directly through WhatsApp."
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
      className="rounded-md border border-border bg-card   p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h3 className="font-heading text-body-lg font-medium text-text">
            Your Details
          </h3>

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
            label="Phone Number / WhatsApp"
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
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-heading text-body-lg font-medium text-text">
            Your Requirements
          </h3>

          <FormField label="Interested In" htmlFor="interestedIn">
            <SelectDropdown
              id="interestedIn"
              value={interestedIn}
              options={interestedInOptions}
              onChange={(v) => setValue("interestedIn", v)}
              placeholder="Any Property Status"
            />
          </FormField>

          <FormField label="Interested Emirate" htmlFor="interestedEmirate">
            <SelectDropdown
              id="interestedEmirate"
              value={interestedEmirate}
              options={emirateOptions}
              onChange={(v) => setValue("interestedEmirate", v)}
              placeholder="Any Emirate"
            />
          </FormField>

          <FormField label="Property Type" htmlFor="propertyType">
            <SelectDropdown
              id="propertyType"
              value={propertyType}
              options={propertyTypeOptions}
              onChange={(v) => setValue("propertyType", v)}
              placeholder="Any Property Type"
            />
          </FormField>

          <div className="flex flex-col gap-2">
            <span className="font-body text-body-sm font-medium text-text">
              Budget
            </span>
            <RangeSlider
              min={priceBounds.min}
              max={priceBounds.max}
              step={10000}
              value={[budgetMin, budgetMax]}
              onChange={([min, max]) => {
                setValue("budgetMin", min);
                setValue("budgetMax", max);
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <FormField
          label="Tell Us More"
          htmlFor="message"
          error={errors.message?.message}
          hint={`${messageValue.length}/${MESSAGE_MAX}`}
        >
          <Textarea
            id="message"
            rows={4}
            placeholder="Write something..."
            maxLength={MESSAGE_MAX}
            error={!!errors.message}
            {...register("message")}
          />
        </FormField>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        icon={Send}
        disabled={status === "loading"}
        className="mt-6 w-full rounded"
      >
        {status === "loading" ? "Sending Enquiry..." : "Send Enquiry"}
      </Button>

      <p className="mt-4 text-center font-body text-caption text-subtle">
        By clicking &quot;Send Enquiry,&quot; you agree to our Privacy Policy
        and consent to being contacted regarding your property requirements.
      </p>
    </form>
  );
}
