"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, NAV_CTA } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full  inset-0 z-[60] flex flex-col bg-card-gradient/80 backdrop-blur-xl lg:hidden"
        >
          <div className="flex items-center justify-between px-6 py-6">
            <Link
              href="/"
              onClick={onClose}
              aria-label="Afaq Al Manzil Properties — Home"
            >
              <Logo />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="rounded-full p-2 text-text"
            >
              <X size={26} />
            </button>
          </div>

          <motion.nav
            aria-label="Mobile"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.06, delayChildren: 0.1 },
              },
            }}
            className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-4"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "block border-b border-border py-4 font-heading text-sm text-text-secondary transition-colors",
                      isActive && "text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          <div className="px-6 py-6">
            <Button
              href={NAV_CTA.href}
              onClick={onClose}
              size="lg"
              className="w-full"
            >
              {NAV_CTA.label}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
