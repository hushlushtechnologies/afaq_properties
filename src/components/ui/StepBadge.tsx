import { cn } from "@/lib/utils";

export function StepBadge({
  step,
  label,
  className,
}: {
  step?: number;
  label?: string;
  className?: string;
}) {
  const text =
    label ??
    (step !== undefined ? `Step ${String(step).padStart(2, "0")}` : "");

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-body text-caption bg-elevated py-1 px-4 rounded-full border text-[10px] border-border font-medium uppercase tracking-widest text-primary",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {text}
    </span>
  );
}
