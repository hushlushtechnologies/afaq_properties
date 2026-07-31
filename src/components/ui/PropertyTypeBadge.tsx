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
        "inline-flex items-center rounded-full border border-blue-600/10 bg-bgPrimary px-3 py-1 font-body text-caption font-normal text-background backdrop-blur-sm text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}
