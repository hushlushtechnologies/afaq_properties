"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { EASE_SMOOTH } from "@/lib/motion";

interface FormStatusAction {
  label: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  variant?: "primary" | "ghost" | "success";
}

interface FormStatusProps {
  variant: "success" | "error";
  title: string;
  subtitle?: string;
  description: string;
  primaryAction: FormStatusAction;
  secondaryAction: FormStatusAction;
}

export function FormStatus({
  variant,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
}: FormStatusProps) {
  const shouldReduceMotion = useReducedMotion();
  const isSuccess = variant === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_SMOOTH }}
      className="flex flex-col items-center rounded-md border border-border bg-card p-8 text-center"
    >
      <motion.span
        initial={{
          scale: shouldReduceMotion ? 1 : 0.5,
          opacity: shouldReduceMotion ? 1 : 0,
        }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: EASE_SMOOTH,
          delay: shouldReduceMotion ? 0 : 0.1,
        }}
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full border-2",
          isSuccess ? "border-success text-success" : "border-error text-error",
        )}
      >
        {isSuccess ? <Check size={28} /> : <X size={28} />}
      </motion.span>

      <h3 className="mt-5 font-heading font-semibold text-h4 text-text">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-1 font-heading font-semibold text-body-lg text-text">
          {subtitle}
        </p>
      )}

      <p className="mt-3 max-w-sm font-body text-body-sm text-text-secondary">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {[primaryAction, secondaryAction].map((action, i) => (
          <Button
            key={i}
            href={action.href}
            target={action.target}
            type={action.href ? undefined : "button"}
            onClick={action.onClick}
            variant={action.variant ?? (i === 0 ? "primary" : "ghost")}
            size="md"
            icon={action.icon}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
