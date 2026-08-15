import { Section } from "@/components/layout/Section";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";

export function EnquirySection() {
  return (
    <Section id="enquiry-form">
      <div className="mx-auto max-w-3xl">
        <EnquiryForm />
      </div>
    </Section>
  );
}
