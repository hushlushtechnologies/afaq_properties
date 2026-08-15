"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
}: ModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const titleId = useRef(
    `modal-title-${Math.random().toString(36).slice(2, 9)}`,
  ).current;
  const descId = useRef(
    `modal-desc-${Math.random().toString(36).slice(2, 9)}`,
  ).current;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusables?.[0]?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onOpenChange(false);
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const items = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [open, onOpenChange]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.3 }}
            onClick={() => onOpenChange(false)}
            aria-hidden="true"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={description ? descId : undefined}
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 40,
              scale: shouldReduceMotion ? 1 : 0.95,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 24,
              scale: shouldReduceMotion ? 1 : 0.97,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.35,
              ease: EASE_SMOOTH,
            }}
            className={cn(
              "relative z-10 w-full max-w-md rounded-md border border-border bg-card p-6 shadow-lg sm:p-7",
              className,
            )}
          >
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-text-secondary transition-colors duration-300 hover:text-primary"
            >
              <X size={16} />
            </button>

            <h2 id={titleId} className="pr-8 font-heading text-h4 text-text">
              {title}
            </h2>
            {description && (
              <p
                id={descId}
                className="mt-2 font-body text-body-sm text-text-secondary"
              >
                {description}
              </p>
            )}

            <div className="mt-5">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
