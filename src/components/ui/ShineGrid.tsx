import { cn } from "@/lib/utils";

export function ShineGrid() {
  return (
    <div className="absolute flex  items-center justify-center pointer-events-none  inset-0 h-full w-full bg-hero-gradient">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "opacity-30",
          "[background-image:radial-gradient(#516A86_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-hero-gradient"></div>
    </div>
  );
}
