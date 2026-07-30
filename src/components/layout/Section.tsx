import { cn } from "@/lib/utils";
import { SectionOrnament } from "@/components/ui/SectionOrnament";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  ornament?: boolean;
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  ornament = true,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 md:py-[140px]", className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
      {ornament && <SectionOrnament />}
    </section>
  );
}