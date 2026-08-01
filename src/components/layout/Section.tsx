import { cn } from "@/lib/utils";
import { SectionOrnament } from "@/components/ui/SectionOrnament";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  ornament?: boolean;
  background?: React.ReactNode;
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  ornament = true,
  background,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-20 md:py-[140px]", className)}
    >
      {background && <div className="absolute inset-0">{background}</div>}
      <div
        className={cn(
          "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
      {ornament && <SectionOrnament />}
    </section>
  );
}
