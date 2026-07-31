import { cn } from "@/lib/utils";

interface UaeFlagBadgeProps {
  className?: string;
}

// Recreated in CSS — three horizontal bands + one vertical hoist band,
// clipped to a circle. No image asset needed.
export function UaeFlagBadge({ className }: UaeFlagBadgeProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-full", className)}>
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/3 bg-[#00732F]" />
        <div className="h-1/3 bg-white" />
        <div className="h-1/3 bg-black" />
      </div>
      <div className="absolute inset-y-0 left-0 w-1/4 bg-[#FF0000]" />
    </div>
  );
}
