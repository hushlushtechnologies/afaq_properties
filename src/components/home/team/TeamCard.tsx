"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types/teams";

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

type CopiedField = "email" | "phone" | null;

export function TeamCard({ member, className }: TeamCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState<CopiedField>(null);

  async function handleCopy(field: "email" | "phone") {
    const value = field === "email" ? member.email : member.phone;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(field);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently
    }
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md border border-border",
        className,
      )}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        priority
        sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
        className="object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#000614] via-black/10 to-transparent" />

      <div className="absolute inset-x-3 bottom-3 z-10 flex items-end justify-between gap-2 rounded-md border border-white/10 bg-background/60 p-4 backdrop-blur-md">
        <div>
          <h3 className="font-heading text-body-lg font-medium text-text ">
            {member.name}
          </h3>
          <p className="mt-0.5 font-body text-caption text-subtle">
            {member.role}
          </p>
        </div>

        <div className="relative shrink-0">
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-full right-0 mb-2 flex flex-col items-center gap-2"
              >
                <ContactIconButton
                  label="Copy email"
                  onClick={() => handleCopy("email")}
                  copied={copied === "email"}
                  copiedLabel="Email copied"
                >
                  <Mail size={15} />
                </ContactIconButton>
                <ContactIconButton
                  label="Copy phone number"
                  onClick={() => handleCopy("phone")}
                  copied={copied === "phone"}
                  copiedLabel="Phone copied"
                >
                  <Phone size={15} />
                </ContactIconButton>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            aria-label={
              expanded ? "Close contact options" : "Show contact options"
            }
            aria-expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground transition-transform duration-300 ease-smooth hover:scale-105",
              expanded
                ? "bg-transparent border-border text-text"
                : "bg-primary border-primary",
            )}
          >
            {expanded ? <X size={15} /> : <ArrowUpRight size={15} />}
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactIconButton({
  children,
  label,
  copiedLabel,
  copied,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  copiedLabel: string;
  copied: boolean;
  onClick: () => void;
}) {
  return (
    <div className="relative">
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded bg-elevated border border-border px-2.5 py-1 font-body text-caption text-text shadow"
          >
            {copiedLabel}
          </motion.span>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label={label}
        onClick={onClick}
        className="flex h-8 w-8 items-center justify-center text-text rounded-full border border-primary bg-gold-gradient  transition-transform duration-300 ease-smooth hover:scale-105"
      >
        {children}
      </button>
    </div>
  );
}
