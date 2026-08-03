import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconFeaturePanelProps {
  icon: LucideIcon;
  label?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "right";
  variant?: "default" | "inverted";
  className?: string;
}

export function IconFeaturePanel({
  icon: Icon,
  label,
  title,
  description,
  ctaLabel,
  ctaHref,
  align = "left",
  variant = "default",
  className,
}: IconFeaturePanelProps) {
  const inverted = variant === "inverted";

  return (
    <div
      className={cn(
        "flex flex-col",
        align === "right" && "items-start sm:items-end sm:text-right",
        className,
      )}
    >
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border",
          inverted
            ? "border-background bg-none text-background"
            : "border-bgBorder bg-bgPrimary text-primary",
        )}
      >
        <Icon size={15} strokeWidth={1.75} />
      </span>

      {label && (
        <span
          className={cn(
            "mt-4 font-body text-caption font-medium uppercase tracking-widest",
            inverted ? "text-black" : "text-primary",
          )}
        >
          {label}
        </span>
      )}

      <h3
        className={cn(
          "mt-5 font-semibold md:text-xl text-lg ",
          inverted ? "text-background" : "text-text",
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "mt-3 max-w-xs font-medium md:text-sm text-xs ",
          inverted ? "text-background" : "text-text-secondary",
        )}
      >
        {description}
      </p>

      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className={cn(
            "group mt-5 inline-flex items-center gap-2 font-semibold text-sm  transition-colors duration-300 ",
            inverted
              ? "text-primary-foreground hover:text-primary-foreground/70"
              : "text-primary hover:text-accent",
            align === "right" && "sm:flex-row-reverse",
          )}
        >
          {ctaLabel}
          <ArrowRight
            size={15}
            className="transition-transform duration-300 ease-smooth group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </div>
  );
}
