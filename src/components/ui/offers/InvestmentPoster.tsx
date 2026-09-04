"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

import { COMPANY_CONTACT } from "@/config/footer";
import { copyToClipboard } from "@/lib/clipboard";
import { trackEvent } from "@/lib/analytics";

import { EASE_SMOOTH } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { CopyToast } from "@/components/ui/CopyToast";

interface InvestmentPosterSectionProps {
  id?: string;
  desktopPoster: string;
  mobilePoster?: string;
  posterAlt: string;
  whatsappMessage?: string;
  aspectRatio?: string;
  campaignName?: string;
  className?: string;
}

export function InvestmentPosterSection({
  id = "investment-opportunity",
  desktopPoster,
  mobilePoster,
  posterAlt,
  whatsappMessage,
  aspectRatio = "1200/675",
  campaignName = "investment-offer",
  className,
}: InvestmentPosterSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [copyFallback, setCopyFallback] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phone = COMPANY_CONTACT.phones[0];

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleCallClick() {
    const success = await copyToClipboard(phone);
    setCopyFallback(!success);
    setCopied(true);
    trackEvent("investment_phone_copy", { campaign: campaignName, success });

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2800);
  }

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };
  const posterIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: EASE_SMOOTH },
    },
  };
  const ctaIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section id={id} ornament={true} className={cn("relative", className)}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        onViewportEnter={() =>
          trackEvent("investment_section_view", { campaign: campaignName })
        }
        className="relative mx-auto max-w-7xl"
      >
        <div aria-hidden="true" className="investment-glow-bg" />

        <motion.div variants={posterIn} className="investment-frame relative">
          <div className="investment-frame-inner relative">
            {mobilePoster ? (
              <>
                <div
                  className="relative hidden w-full sm:block"
                  style={{ aspectRatio }}
                >
                  <Image
                    src={desktopPoster}
                    alt={posterAlt}
                    fill
                    quality={100}
                    sizes="(min-width: 1024px) 900px, 90vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="relative block w-full sm:hidden"
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src={mobilePoster}
                    alt={posterAlt}
                    fill
                    quality={95}
                    sizes="90vw"
                    className="object-cover"
                  />
                </div>
              </>
            ) : (
              <div className="relative w-full" style={{ aspectRatio }}>
                <Image
                  src={desktopPoster}
                  alt={posterAlt}
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 900px, 90vw"
                  className="object-cover"
                />
              </div>
            )}

            <div aria-hidden="true" className="investment-sweep" />
          </div>
        </motion.div>

        <motion.div
          variants={ctaIn}
          className="relative z-10 mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Button
            href="https://wa.me/971545813201?text=Hi%20AFAQ%20Al%20Manzil%20Properties,%20Intrested%20in%20an%20your%20investment%20opportunity."
            target="_blank"
            variant="primary"
            size="md"
            icon={MessageCircle}
            onClick={() =>
              trackEvent("investment_whatsapp_click", {
                campaign: campaignName,
              })
            }
            className="w-full rounded sm:w-auto"
          >
            WhatsApp Us
          </Button>

          <div className="relative w-full sm:w-auto">
            <Button
              type="button"
              onClick={handleCallClick}
              variant="ghost"
              size="md"
              icon={Phone}
              className="w-full rounded sm:w-auto"
            >
              Call Us
            </Button>

            <CopyToast
              visible={copied}
              label={
                copyFallback ? "Tap and hold to copy" : "Phone Number Copied"
              }
              sublabel={phone}
            />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
