import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow align={align} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className="font-heading text-h2 text-text">{title}</h2>
      {description && (
        <p className="mt-4 font-body text-body-lg text-text-secondary">{description}</p>
      )}
    </div>
  );
}