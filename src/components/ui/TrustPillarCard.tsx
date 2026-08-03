"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "primary" | "elevated" | "default";

interface TrustPillarCardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
}

const variantStyles: Record<CardVariant, string> = {
  primary: "bg-primary border-primary",
  elevated: "bg-elevated border-border",
  default: "bg-card border-border",
};

export function TrustPillarCard({
  children,
  variant = "default",
  className,
}: TrustPillarCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-md border p-6 transition-colors duration-300",
        variantStyles[variant],
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-smooth group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(248,210,86,0.08), transparent 90%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
