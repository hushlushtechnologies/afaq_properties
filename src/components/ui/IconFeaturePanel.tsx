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
  className,
}: IconFeaturePanelProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "right" && "items-start sm:items-end sm:text-right",
        className,
      )}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bgBorder bg-bgPrimary text-primary">
        <Icon size={15} strokeWidth={1.75} />
      </span>

      {label && (
        <span className="mt-4 font-body text-caption font-medium uppercase tracking-widest text-primary">
          {label}
        </span>
      )}

      <h3 className="mt-5 font-semibold md:text-2xl text-xl text-text">
        {title}
      </h3>

      <p className="mt-3 max-w-xs font-medium md:text-base text-sm text-text-secondary">
        {description}
      </p>

      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className={cn(
            "group mt-5 inline-flex items-center gap-2 font-semibold text-sm text-primary transition-colors duration-300 hover:text-accent",
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
