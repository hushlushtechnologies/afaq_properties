import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Sparkle } from "@/components/ui/Sparkle";

interface SplitSectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function SplitSectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  ctaLabel,
  ctaHref,
  className,
}: SplitSectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div className="max-w-xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 flex items-center gap-3 font-semibold md:text-7xl text-3xl text-text ">
          <Sparkle className="h-6 w-6 shrink-0 text-primary" />
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
      </div>

      <div className="max-w-sm lg:text-right">
        <p className="font-medium md:text-sm text-xs text-text-secondary">
          {description}
        </p>
        {ctaLabel && ctaHref && (
          <Button
            href={ctaHref}
            variant="primary"
            size="sm"
            className="mt-4 rounded"
          >
            {ctaLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
