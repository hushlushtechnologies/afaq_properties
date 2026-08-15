"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

export function FormField({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: FormFieldProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={htmlFor}
          className="font-body text-body-sm font-medium text-text"
        >
          {label} {required && <span className="text-error">*</span>}
        </label>
        {hint && (
          <span className="font-body text-caption text-text-secondary">
            {hint}
          </span>
        )}
      </div>

      {children}

      <AnimatePresence>
        {error && (
          <motion.p
            role="alert"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
            className="font-body text-caption text-error"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
