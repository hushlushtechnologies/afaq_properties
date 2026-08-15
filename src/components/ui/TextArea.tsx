import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ error, className, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-none rounded border bg-surface px-3 py-2.5 font-body text-body-sm text-text placeholder:text-subtle placeholder:text-sm transition-colors duration-300 focus-visible:outline-none focus:rounded",
          error
            ? "border-error focus-visible:border-error"
            : "border-border focus-visible:border-primary",
          className,
        )}
        {...props}
      />
    );
  },
);
