import { cn } from "@/lib/utils";

export function PropertyTypeBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-bgBorder bg-bgPrimary px-3 py-1 font-body  font-normal text-text backdrop-blur-sm text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}
