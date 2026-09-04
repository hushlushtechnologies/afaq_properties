"use client";

import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { copyToClipboard } from "@/lib/clipboard";
import { CopyToast } from "@/components/ui/CopyToast";
import type { Career } from "@/types/careers";
import { Button } from "@/components/ui/Button";

interface JobCardProps {
  career: Career;
  className?: string;
}

export function JobCard({ career, className }: JobCardProps) {
  const [copied, setCopied] = useState(false);
  const [fallback, setFallback] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleApply() {
    const success = await copyToClipboard(career.applyEmail);
    setFallback(!success);
    setCopied(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2200);
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
      <p className="mt-1 font-body text-body-sm text-subtle">
        {career.department} / Real Estate
      </p>

      <p className="mt-3 font-body text-body-sm font-medium text-primary">
        Experience: {career.experienceRequired}
      </p>

      <p className="mt-3 flex-1 font-body text-body-sm text-text-secondary">
        {career.description}
      </p>

      <div className="relative mt-5 w-fit">
        <Button
          type="button"
          onClick={handleApply}
          variant="ghost"
          size="md"
          aria-label={`Copy email to apply for ${career.title}`}
          className="w-full rounded sm:w-auto"
        >
          Apply via Email <Mail size={14} />
        </Button>

        <CopyToast
          visible={copied}
          label={fallback ? "Tap and hold to copy" : "Email Copied"}
          sublabel={career.applyEmail}
        />
      </div>
    </div>
  );
}
