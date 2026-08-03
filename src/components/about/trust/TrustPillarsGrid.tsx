"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrustPillarCard } from "@/components/ui/TrustPillarCard";
import { IconFeaturePanel } from "@/components/ui/IconFeaturePanel";
import { EASE_SMOOTH } from "@/lib/motion";
import {
  MapPin,
  Handshake,
  UserCheck,
  Eye,
  Headphones,
  TrendingUp,
} from "lucide-react";

const icons = {
  mapPin: MapPin,
  handshake: Handshake,
  userCheck: UserCheck,
  eye: Eye,
  headphones: Headphones,
  trendingUp: TrendingUp,
};

export interface TrustPillarItem {
  id: string;
  icon: keyof typeof icons;
  title: string;
  description: string;
}

interface TrustPillarsGridProps {
  items: TrustPillarItem[];
  className?: string;
}

export function TrustPillarsGrid({ items, className }: TrustPillarsGridProps) {
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
      className={`mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className ?? ""}`}
    >
      {items.map((pillar, index) => {
        const variant =
          index === 0
            ? "primary"
            : index === items.length - 1
              ? "elevated"
              : "default";
        const panelVariant = variant === "primary" ? "inverted" : "default";

        return (
          <motion.div key={pillar.id} variants={item}>
            <TrustPillarCard variant={variant} className="h-full">
              <IconFeaturePanel
                icon={icons[pillar.icon]}
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
