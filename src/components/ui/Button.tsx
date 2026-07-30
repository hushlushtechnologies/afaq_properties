"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-gold-radial text-background hover:bg-accent shadow-[0_6px_6px_0_rgba(255,255,255,0.40)_inset,0_6px_180px_0_#FFAE17,0_3px_0_0_rgba(0,0,0,0.07),0_-2px_0_0_rgba(0,0,0,0.20)_inset]",
  secondary: "bg-gold-gradient text-background hover:bg-accent",
  ghost: "border border-border text-text hover:bg-hero-gradient  bg-card-gradient",
  outline: "text-text text-primary hover:border-text-secondary hover:text-text-secondary bg-transparent border border-primary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-body font-semibold transition-colors duration-400 ease-smooth disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}