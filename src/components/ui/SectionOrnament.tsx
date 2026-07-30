function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
    </svg>
  );
}

export function SectionOrnament() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden items-end gap-2 sm:flex"
      >
        <span className="h-10 w-px bg-gradient-to-t from-primary/50 to-transparent" />
        <SparkleIcon className="mb-1 h-3 w-3 text-primary/60" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 hidden items-end gap-2 sm:flex"
      >
        <SparkleIcon className="mb-1 h-3 w-3 text-primary/60" />
        <span className="h-10 w-px bg-gradient-to-t from-primary/50 to-transparent" />
      </div>
    </>
  );
}