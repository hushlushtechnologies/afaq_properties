"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ServiceCard } from "@/components/home/service/ServiceCard";
import { SERVICES } from "@/data/hero/service";
import { EASE_SMOOTH } from "@/lib/motion";

interface ServiceGridProps {
  limit?: number;
}

export function ServiceGrid({ limit }: ServiceGridProps) {
  const shouldReduceMotion = useReducedMotion();
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

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
      className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service, index) => (
        <motion.div key={service.id} variants={item}>
          <ServiceCard service={service} index={index} priority={index < 3} />
        </motion.div>
      ))}
    </motion.div>
  );
}
