"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaWhatsapp } from "react-icons/fa";

const tips = [
  "Need help finding your perfect property?",
  "Chat with our property advisor.",
  "Looking for your next investment?",
  "Let's find the right property together.",
];

export function WhatsAppFloatingBar() {
  const [show, setShow] = useState(false);
  const [i, setI] = useState(0);
  useEffect(() => {
    const tick = () => {
      setI((v) => (v + 1) % tips.length);
      setShow(true);
      setTimeout(() => setShow(false), 3500);
    };
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex justify-end items-center gap-3">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-3 rounded-xl bg-card-gradient px-4 py-3 border-border border max-w-xs"
          >
            <p className="text-sm font-medium text-muted">{tips[i]}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href="https://wa.me/971545813201?text=Hi%20AFAQ%20Al%20Manzil%20Properties,%20I%20have%20an%20enquiry."
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          animate={{ scale: [1, 1.06, 1], rotate: [0, -3, 3, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 13.8 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#20B038] to-[#60D66A] px-4 py-4 text-text shadow-2xl"
        >
          <FaWhatsapp className="h-6 w-6" />
        </motion.button>
      </Link>
    </div>
  );
}
