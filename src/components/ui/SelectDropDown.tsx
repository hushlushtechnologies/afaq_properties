"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectDropdownProps {
  label?: string;
  ariaLabel?: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function SelectDropdown({
  label,
  ariaLabel,
  value,
  options,
  onChange,
  placeholder = "All",
  disabled = false,
  className,
}: SelectDropdownProps) {
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useRef(
    `select-${Math.random().toString(36).slice(2, 9)}`,
  ).current;

  const selected = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleSelect(nextValue: string) {
    onChange(nextValue);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <span className="font-body text-caption font-medium uppercase tracking-wide text-text-secondary">
          {label}
        </span>
      )}

      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={ariaLabel ?? label ?? placeholder}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "flex w-full items-center justify-between gap-2 rounded border border-border bg-surface py-2.5 pl-3 pr-3 text-left font-body text-sm text-text transition-colors duration-300",
            open && "border-primary",
            !disabled && "hover:border-primary/50",
            disabled && "opacity-50",
          )}
        >
          <span className={cn(!selected && "text-muted")}>
            {selected ? selected.label : placeholder}
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: EASE_SMOOTH }}
            className="shrink-0 text-text-secondary"
          >
            <ChevronDown size={14} />
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              role="listbox"
              id={listId}
              aria-label={ariaLabel ?? label ?? placeholder}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.2,
                ease: EASE_SMOOTH,
              }}
              className="absolute left-0 right-0 top-full z-30 mt-1.5 max-h-64 scrollbar-hide overflow-y-auto rounded border border-border bg-surface py-1.5 shadow-lg"
            >
              <li role="option" aria-selected={value === ""}>
                <button
                  type="button"
                  onClick={() => handleSelect("")}
                  className={cn(
                    "flex w-full items-center justify-between  gap-2 px-3 py-2 text-left font-body text-sm transition-colors duration-200",
                    value === ""
                      ? "bg-primary/10 text-primary"
                      : "text-text-secondary hover:bg-elevated hover:text-text",
                  )}
                >
                  {placeholder}
                  {value === "" && <Check size={14} />}
                </button>
              </li>
              {options.map((opt) => (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={value === opt.value}
                >
                  <button
                    type="button"
                    onClick={() => handleSelect(opt.value)}
                    className={cn(
                      "flex w-full items-center justify-between  gap-2 px-3 py-2 text-left font-body text-sm transition-colors duration-200",
                      value === opt.value
                        ? "bg-primary/10 text-primary"
                        : "text-text hover:bg-elevated hover:text-primary",
                    )}
                  >
                    {opt.label}
                    {value === opt.value && <Check size={14} />}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
