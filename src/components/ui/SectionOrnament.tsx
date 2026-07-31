export function SectionOrnament() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden md:block"
    >
      {/* Left vertical line */}
      <span className="absolute left-8 top-0 h-full w-px bg-border" />

      {/* Right vertical line */}
      <span className="absolute right-8 top-0 h-full w-px bg-border" />

      {/* Bottom line */}
      <span className="absolute bottom-8 left-8 right-0 h-px bg-border" />

      {/* Left bottom cross */}
      <div className="absolute bottom-8 left-8">
        <span
          className="absolute left-0 top-1/2 h-8 w-px -translate-y-1/2 
          bg-gradient-to-b from-transparent via-[#ffffff] to-transparent"
        />

        <span
          className="absolute left-1/2 top-0 h-px w-8 -translate-x-1/2 
          bg-gradient-to-r from-transparent via-[#ffffff] to-transparent"
        />
      </div>

      {/* Right bottom cross */}
      <div className="absolute bottom-8 right-8">
        <span
          className="absolute left-0 top-1/2 h-8 w-px -translate-y-1/2 
          bg-gradient-to-b from-transparent via-[#ffffff] to-transparent"
        />

        <span
          className="absolute left-1/2 top-0 h-px w-8 -translate-x-1/2 
          bg-gradient-to-r from-transparent via-[#ffffff] to-transparent"
        />
      </div>
    </div>
  );
}
