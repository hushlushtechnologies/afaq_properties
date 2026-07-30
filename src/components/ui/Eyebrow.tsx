import { Gem } from "lucide-react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function Eyebrow({ children, align = "left", className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5",
        align === "center" && "mx-auto",
        className
      )}
    >
      <Gem size={12} className="shrink-0 text-primary" />
      <span className="font-body text-caption font-medium uppercase tracking-widest text-primary">
        {children}
      </span>
    </div>
  );
}