import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  highlight?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  highlight,
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow align={align} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className="font-semibold md:text-2xl text-xl text-text">
        <span>
          {parts.length > 1 ? (
            <>
              {parts[0]}
              <span className="text-primary">{highlight}</span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </span>
      </h2>
      {description && (
        <p className="mt-4 font-medium md:text-sm text-xs text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
