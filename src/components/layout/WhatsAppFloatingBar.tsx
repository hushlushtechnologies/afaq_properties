"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { EASE_SMOOTH } from "@/lib/motion";

const ATTENTION_MESSAGES = [
  "Looking for the right property?",
  "Need help with an investment?",
  "Have a question? Chat with our team.",
];

const CYCLE_INTERVAL = 10000;
const BUBBLE_VISIBLE_DURATION = 6000;
const DISMISS_STORAGE_KEY = "afaq-whatsapp-bubble-dismissed";
const getWhatsAppLink = (message: string) =>
  `https://wa.me/971545813201?text=${encodeURIComponent(message)}`;

function subscribeToDismissal(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("afaq-whatsapp-dismissed", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("afaq-whatsapp-dismissed", callback);
  };
}

function getDismissedSnapshot() {
  return sessionStorage.getItem(DISMISS_STORAGE_KEY) === "true";
}

function getDismissedServerSnapshot() {
  return true;
}

export function WhatsAppFloatingBar() {
  const shouldReduceMotion = useReducedMotion();
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const permanentlyDismissed = useSyncExternalStore(
    subscribeToDismissal,
    getDismissedSnapshot,
    getDismissedServerSnapshot,
  );

  useEffect(() => {
    if (permanentlyDismissed) return;

    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % ATTENTION_MESSAGES.length);
      setBubbleVisible(true);

      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(
        () => setBubbleVisible(false),
        BUBBLE_VISIBLE_DURATION,
      );
    }, CYCLE_INTERVAL);

    return () => {
      clearInterval(interval);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [permanentlyDismissed]);

  function dismissPermanently() {
    setBubbleVisible(false);
    sessionStorage.setItem(DISMISS_STORAGE_KEY, "true");

    window.dispatchEvent(new Event("afaq-whatsapp-dismissed"));
  }

  function handleBubbleClick() {
    dismissPermanently();
    window.open(
      getWhatsAppLink("Hi! I'd like to know more about your properties."),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div
      className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <AnimatePresence>
        {bubbleVisible && !permanentlyDismissed && (
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 12,
              scale: shouldReduceMotion ? 1 : 0.95,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 8,
              scale: shouldReduceMotion ? 1 : 0.95,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.3,
              ease: EASE_SMOOTH,
            }}
            className="relative max-w-[220px] rounded-md border border-border bg-hero-gradient p-3 pr-8 shadow-lg"
          >
            <button
              type="button"
              onClick={dismissPermanently}
              aria-label="Dismiss message"
              className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full text-text-secondary transition-colors duration-300 hover:text-primary"
            >
              <X size={12} />
            </button>
            <button
              type="button"
              onClick={handleBubbleClick}
              className="text-left font-body text-body-sm text-text transition-colors duration-300 hover:text-primary"
            >
              {ATTENTION_MESSAGES[messageIndex]}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={getWhatsAppLink(
          "Hi! I'd like to know more about your properties.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onClick={dismissPermanently}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg transition-transform duration-300 ease-smooth hover:scale-105"
      >
        {!shouldReduceMotion && (
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-success"
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <FaWhatsapp size={26} className="relative z-10" />
      </a>
    </div>
  );
}
