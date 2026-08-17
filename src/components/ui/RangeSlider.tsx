"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  className?: string;
}

export function RangeSlider({
  min,
  max,
  step = 10000,
  value,
  onChange,
  className,
}: RangeSliderProps) {
  const [local, setLocal] = useState(value);

  function handleMinChange(next: number) {
    const clamped = Math.min(next, local[1] - step);
    const updated: [number, number] = [clamped, local[1]];
    setLocal(updated);
    onChange(updated);
  }

  function handleMaxChange(next: number) {
    const clamped = Math.max(next, local[0] + step);
    const updated: [number, number] = [local[0], clamped];
    setLocal(updated);
    onChange(updated);
  }

  const minPercent = ((local[0] - min) / (max - min)) * 100;
  const maxPercent = ((local[1] - min) / (max - min)) * 100;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center justify-between font-body text-caption font-medium text-primary">
        <span>AED {local[0].toLocaleString("en-US")}</span>
        <span>AED {local[1].toLocaleString("en-US")}</span>
      </div>
      <div className="relative h-1.5 w-full rounded-full bg-border">
        <div
          className="absolute h-1.5 rounded-full bg-gold-gradient"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={local[0]}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          aria-label="Minimum price"
          className="range-thumb pointer-events-none absolute inset-0 h-1.5 w-full appearance-none bg-transparent"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={local[1]}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          aria-label="Maximum price"
          className="range-thumb pointer-events-none absolute inset-0 h-1.5 w-full appearance-none bg-transparent"
        />
      </div>
    </div>
  );
}
