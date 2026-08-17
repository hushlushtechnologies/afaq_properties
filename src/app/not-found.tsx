"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { GridPattern } from "@/components/ui/GridPattern";
import { NotFoundIllustration } from "@/components/ui/NotFoundIllustration";
import { EASE_SMOOTH, DURATION } from "@/lib/motion";

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };
  const fadeItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.reveal, ease: EASE_SMOOTH },
    },
  };
  const illustrationIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: DURATION.cinematic, ease: EASE_SMOOTH },
    },
  };

  return (
    <main className="relative flex min-h-screen w-full items-center overflow-hidden bg-background pb-16 pt-32 sm:pt-40">
      <GridPattern className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]" />

      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-xl text-center"
        >
          <motion.div variants={fadeItem}>
            <Eyebrow align="center">404 Error</Eyebrow>
          </motion.div>

          <motion.div
            variants={illustrationIn}
            className="mx-auto mt-6 w-full max-w-sm"
            animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.9,
                  }
            }
          >
            <NotFoundIllustration className="h-auto w-full" />
          </motion.div>

          <motion.h1
            variants={fadeItem}
            className="mt-6 font-heading font-bold text-h2 leading-tight text-text"
          >
            Looks Like This <br /> Address Doesn&apos;t Exist.
          </motion.h1>

          <motion.p
            variants={fadeItem}
            className="mx-auto mt-4 max-w-md font-body text-body text-text-secondary"
          >
            The page you&apos;re looking for may have moved, been removed, or
            the address may be incorrect.
          </motion.p>

          <motion.div
            variants={fadeItem}
            className="mt-7 flex flex-wrap justify-center gap-3"
          >
            <Button href="/" variant="primary" size="md" icon={ArrowRight}>
              Back to Home
            </Button>
            <Button href="/properties" variant="ghost" size="md" icon={Search}>
              View Properties
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}
