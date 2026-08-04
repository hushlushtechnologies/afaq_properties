import { cn } from "@/lib/utils";

export function PropertyCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative animate-pulse overflow-hidden rounded-md border border-border bg-card",
        className,
      )}
    >
      <div className="absolute inset-0 bg-elevated" />
    </div>
  );
}
