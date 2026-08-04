"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Career } from "@/types/careers";

interface JobCardProps {
  career: Career;
  className?: string;
}

export function JobCard({ career, className }: JobCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleApply() {
    try {
      await navigator.clipboard.writeText(career.applyEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — fail silently, same pattern as TeamCard
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col rounded-md border border-border bg-card p-6",
        className,
      )}
    >
      <h3 className="font-heading text-body-lg font-medium text-text">
        {career.title}
      </h3>
      <p className="mt-1 font-body text-body-sm text-muted">
        {career.department} / Real Estate
      </p>

      <p className="mt-3 font-body text-body-sm font-medium text-primary">
        Experience: {career.experienceRequired}
      </p>

      <p className="mt-3 flex-1 font-body text-body-sm text-text-secondary">
        {career.description}
      </p>

      <button
        type="button"
        onClick={handleApply}
        aria-label={
          copied
            ? "Email address copied"
            : `Copy email to apply for ${career.title}`
        }
        className="mt-5 inline-flex w-fit items-center gap-2 rounded bg-card-gradient border border-border px-4 py-2 font-body text-body-sm font-medium text-text transition-all duration-300 ease-smooth hover:bg-accent hover:scale-[1.015] active:scale-[0.985]"
      >
        {copied ? (
          <>
            Email Copied <Check size={14} />
          </>
        ) : (
          <>
            Apply via Email <Mail size={14} />
          </>
        )}
      </button>
    </div>
  );
}
