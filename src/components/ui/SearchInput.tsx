"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className,
}: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <Search
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full rounded border border-border bg-elevated py-2.5 pl-9 pr-9 font-body text-body-sm text-text placeholder:text-subtle placeholder:text-sm transition-colors duration-300 focus-visible:border-primary focus-visible:outline-none focus:rounded"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-secondary transition-colors duration-300 hover:text-primary"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
