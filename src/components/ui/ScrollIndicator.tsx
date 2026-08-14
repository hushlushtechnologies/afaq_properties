"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      aria-hidden="true"
    >
      <span className="text-muted text-xs font-normal font-body tracking-widest uppercase">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="border-border h-9 w-5 rounded-full border p-1"
      >
        <div className="bg-gold-gradient h-1.5 w-1.5 rounded-full" />
      </motion.div>
    </motion.div>
  );
}
