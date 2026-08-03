"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ExpertiseItem } from "@/data/about/expertise";

interface ExpertiseCardProps {
  item: ExpertiseItem;
  priority?: boolean;
  className?: string;
}

export function ExpertiseCard({
  item,
  priority,
  className,
}: ExpertiseCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link
      href={item.href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-md border border-border bg-card",
        className,
      )}
    >
      <div className="relative h-60 w-full overflow-hidden">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="absolute inset-0"
        >
          <motion.div
            variants={{
              rest: { scale: 1 },
              hover: { scale: shouldReduceMotion ? 1 : 1.08 },
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={priority}
              quality={90}
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover "
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-body-lg font-medium text-text">
            {item.title}
          </h3>
          <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300 ease-smooth group-hover:border-primary group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight size={14} />
          </span>
        </div>
        <p className="mt-2 font-body text-body-sm text-text-secondary">
          {item.description}
        </p>
      </div>
    </Link>
  );
}
