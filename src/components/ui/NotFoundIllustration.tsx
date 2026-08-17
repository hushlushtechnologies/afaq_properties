export function NotFoundIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M60 150C60 90 110 50 180 55C230 58 240 20 290 30C340 40 360 90 340 140C320 190 350 220 320 250C290 280 230 260 190 265C140 271 90 250 70 210C55 180 60 175 60 150Z"
        fill="var(--color-elevated)"
        opacity="0.6"
      />

      <text
        x="30"
        y="200"
        fontFamily="var(--font-lora), serif"
        fontSize="150"
        fontWeight="600"
        fill="var(--color-secondary-foreground)"
        opacity="0.9"
      >
        4
      </text>
      <text
        x="255"
        y="200"
        fontFamily="var(--font-lora), serif"
        fontSize="150"
        fontWeight="600"
        fill="var(--color-secondary-foreground)"
        opacity="0.9"
      >
        4
      </text>

      <circle cx="200" cy="130" r="62" fill="var(--color-primary)" />
      <circle
        cx="180"
        cy="105"
        r="8"
        fill="var(--color-accent)"
        opacity="0.5"
      />
      <circle
        cx="222"
        cy="140"
        r="12"
        fill="var(--color-accent)"
        opacity="0.5"
      />
      <circle
        cx="195"
        cy="160"
        r="6"
        fill="var(--color-accent)"
        opacity="0.5"
      />
      <circle
        cx="230"
        cy="100"
        r="5"
        fill="var(--color-accent)"
        opacity="0.4"
      />

      <path
        d="M300 60C320 75 330 100 320 140"
        stroke="var(--color-secondary-foreground)"
        strokeOpacity="0.3"
        strokeWidth="2"
        fill="none"
      />

      <g transform="translate(150 165) rotate(-18)">
        <ellipse cx="35" cy="55" rx="16" ry="22" fill="var(--color-primary)" />
        <rect
          x="10"
          y="30"
          width="20"
          height="34"
          rx="8"
          fill="var(--color-primary)"
          transform="rotate(-25 20 47)"
        />
        <rect
          x="45"
          y="30"
          width="20"
          height="34"
          rx="8"
          fill="var(--color-primary)"
          transform="rotate(20 55 47)"
        />
        <rect
          x="20"
          y="0"
          width="16"
          height="30"
          rx="7"
          fill="var(--color-secondary)"
          transform="rotate(-10 28 15)"
        />
        <rect
          x="42"
          y="0"
          width="16"
          height="30"
          rx="7"
          fill="var(--color-secondary)"
          transform="rotate(35 50 15)"
        />
        <circle
          cx="35"
          cy="12"
          r="16"
          fill="var(--color-background)"
          stroke="var(--color-primary)"
          strokeWidth="3"
        />
        <circle cx="35" cy="12" r="10" fill="#F5D6B8" />
      </g>

      <g fill="var(--color-primary)" opacity="0.6">
        <circle cx="90" cy="90" r="2" />
        <circle cx="330" cy="200" r="2.5" />
        <circle cx="100" cy="230" r="2" />
        <circle cx="270" cy="60" r="1.5" />
      </g>
    </svg>
  );
}
