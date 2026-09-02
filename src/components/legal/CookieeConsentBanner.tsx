"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getStoredConsent, setStoredConsent } from "@/lib/cookiee";
import { EASE_SMOOTH } from "@/lib/motion";

export function CookieConsentBanner() {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === null) {
      setVisible(true);
    }
  }, []);

  function handleChoice(status: "granted" | "denied") {
    setStoredConsent(status);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            y: shouldReduceMotion ? 0 : 80,
            opacity: shouldReduceMotion ? 1 : 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: shouldReduceMotion ? 0 : 80, opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.4,
            ease: EASE_SMOOTH,
          }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-xl flex-col gap-4 rounded-md border border-border bg-card p-5 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex gap-3">
            <Cookie size={20} className="mt-0.5 shrink-0 text-primary" />
            <p className="font-body text-body-sm text-text-secondary">
              We use cookies to understand how visitors use our site and improve
              your experience. Read our{" "}
              <Link
                href="/privacy-policy"
                className="text-primary underline underline-offset-2 hover:text-accent"
              >
                Privacy Policy
              </Link>{" "}
              to learn more.
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <Button
              type="button"
              onClick={() => handleChoice("denied")}
              variant="outline"
              size="sm"
              className="rounded"
            >
              Reject
            </Button>
            <Button
              type="button"
              onClick={() => handleChoice("granted")}
              variant="primary"
              size="sm"
              className="rounded"
            >
              Accept
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
