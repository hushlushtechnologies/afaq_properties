import { forwardRef } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { icon: Icon, error, className, ...props },
  ref,
) {
  return (
    <div className="relative">
      {Icon && (
        <Icon
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />
      )}
      <input
        ref={ref}
        className={cn(
          "w-full rounded border bg-surface py-2.5 pr-3 font-body text-body-sm text-text placeholder:text-subtle placeholder:text-xs transition-colors duration-300 focus-visible:outline-none focus:rounded",
          Icon ? "pl-10" : "pl-4",
          error
            ? "border-error focus-visible:border-error"
            : "border-border focus-visible:border-primary",
          className,
        )}
        {...props}
      />
    </div>
  );
});
