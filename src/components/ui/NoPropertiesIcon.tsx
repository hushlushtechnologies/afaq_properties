export function NoPropertiesIcon() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="48"
        cy="48"
        r="47"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <rect
        x="24"
        y="34"
        width="48"
        height="38"
        rx="6"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <path
        d="M32 34 l4 -8 h24 l4 8"
        stroke="var(--color-primary)"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 54 q8 -6 16 0"
        stroke="var(--color-text-secondary)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="40" cy="46" r="2" fill="var(--color-text-secondary)" />
      <circle cx="56" cy="46" r="2" fill="var(--color-text-secondary)" />
      <circle
        cx="72"
        cy="66"
        r="10"
        fill="var(--color-background)"
        stroke="var(--color-error)"
        strokeWidth="1.5"
      />
      <path
        d="M68 62 L76 70 M76 62 L68 70"
        stroke="var(--color-error)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
