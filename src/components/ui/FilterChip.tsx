"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  onRemove: () => void;
  className?: string;
}

export function FilterChip({ label, onRemove, className }: FilterChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-bgBorder bg-bgPrimary px-3 py-1 font-body text-xs font-medium text-primary",
        className,
      )}
    >
      {label}
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${label} filter`}
        className="flex h-3.5 w-3.5 items-center justify-center rounded-full transition-colors duration-300 hover:text-accent"
      >
        <X size={11} />
      </button>
    </span>
  );
}
