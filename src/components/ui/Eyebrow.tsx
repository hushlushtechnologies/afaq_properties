import { Sparkles} from "lucide-react";
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
        "inline-flex items-center gap-2 rounded-full border border-bgBorder bg-bgPrimary backdrop-blur-md px-4 py-2 ",
        align === "center" && "mx-auto",
        className
      )}
    >
      
      <Sparkles size={12} className="shrink-0 text-primary " />
      <span className="font-body sm:text-xs text-[10px] font-normal uppercase tracking-widest text-text">
        {children}
      </span>
    </div>
  );
}