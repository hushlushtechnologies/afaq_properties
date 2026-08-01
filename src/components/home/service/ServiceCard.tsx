"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
  index: number;
  className?: string;
  priority?: boolean;
}

export function ServiceCard({
  service,
  index,
  className,
  priority,
}: ServiceCardProps) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className={cn(
        "group relative block h-72 overflow-hidden rounded-md border border-border",
        className,
      )}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="absolute inset-0"
      >
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority={priority}
            quality={90}
            sizes="(min-width: 640px) 30vw, 90vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/40" />

        <span className="absolute right-4 top-3 font-heading text-4xl font-semibold text-white/15">
          {String(index + 1).padStart(2, "0")}
        </span>

        <motion.span
          variants={{
            rest: { opacity: 0, scale: 0.8 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground"
        >
          <ArrowUpRight size={16} />
        </motion.span>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-heading text-body-lg font-medium text-white">
            {service.title}
          </h3>
          <motion.p
            variants={{
              rest: { opacity: 0, height: 0, marginTop: 0 },
              hover: { opacity: 1, height: "auto", marginTop: 6 },
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden font-body text-body-sm text-white/75"
          >
            {service.description}
          </motion.p>
        </div>
      </motion.div>
    </Link>
  );
}
