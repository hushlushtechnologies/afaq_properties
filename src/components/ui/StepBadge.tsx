import { cn } from "@/lib/utils";

export function StepBadge({
  step,
  className,
}: {
  step: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-body text-caption bg-elevated py-2 px-4 rounded-full border text-xs border-border font-medium uppercase tracking-widest text-primary",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      Step {String(step).padStart(2, "0")}
    </span>
  );
}
