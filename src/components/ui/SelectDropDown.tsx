"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectDropdownProps {
  label?: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function SelectDropdown({
  label,
  value,
  options,
  onChange,
  placeholder = "All",
  disabled = false,
  className,
}: SelectDropdownProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label className="font-body text-caption font-medium uppercase tracking-wide text-text-secondary">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          aria-label={label ?? placeholder}
          className="w-full appearance-none rounded border border-border bg-surface py-2.5 pl-3 pr-8 font-body text-body-sm text-text transition-colors duration-300 focus-visible:border-primary focus-visible:outline-none disabled:opacity-50 focus:rounded"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary"
        />
      </div>
    </div>
  );
}
