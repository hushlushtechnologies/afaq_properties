"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrustPillarCard } from "@/components/ui/TrustPillarCard";
import { IconFeaturePanel } from "@/components/ui/IconFeaturePanel";
import { EASE_SMOOTH } from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Handshake,
  UserCheck,
  Eye,
  Headphones,
  TrendingUp,
  Sparkles,
  Target,
} from "lucide-react";

const icons = {
  mapPin: MapPin,
  handshake: Handshake,
  userCheck: UserCheck,
  eye: Eye,
  headphones: Headphones,
  trendingUp: TrendingUp,
  sparkles: Sparkles,
  target: Target,
} as const;

export type TrustPillarIcon =
  | "mapPin"
  | "handshake"
  | "userCheck"
  | "eye"
  | "headphones"
  | "trendingUp"
  | "sparkles"
  | "target";

export interface TrustPillarItem {
  id: string;
  icon: TrustPillarIcon;
  title: string;
  description: string;
}

interface TrustPillarsGridProps {
  items: TrustPillarItem[];
  /** When true, every card uses the plain "default" style — no auto gold/elevated first/last card */
  uniform?: boolean;
  columns?: 2 | 3;
  className?: string;
}

export function TrustPillarsGrid({
  items,
  uniform = false,
  columns = 3,
  className,
}: TrustPillarsGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE_SMOOTH },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={cn(
        "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2",
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2",
        className,
      )}
    >
      {items.map((pillar, index) => {
        const variant = uniform
          ? "default"
          : index === 0
            ? "primary"
            : index === items.length - 1
              ? "elevated"
              : "default";
        const panelVariant = variant === "primary" ? "inverted" : "default";
        const Icon = icons[pillar.icon];
        return (
          <motion.div key={pillar.id} variants={item}>
            <TrustPillarCard variant={variant} className="h-full">
              <IconFeaturePanel
                icon={Icon}
                title={pillar.title}
                description={pillar.description}
                variant={panelVariant}
              />
            </TrustPillarCard>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
