import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        card: "var(--color-card)",
        elevated: "var(--color-elevated)",
        bgPrimary: "var(--color-bgPrimary)",
        bgBorder: "var(--color-borderPrimary)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        text: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
        },
        muted: "var(--color-muted)",
        subtle: "var(--color-subtle)",
        success: "var(--color-success)",
        error: "var(--color-error)",
      },
      backgroundImage: {
        // Hero Background
        "hero-gradient":
          "radial-gradient(50% 50% at 50% 50%, var(--color-card, #081120) 0%, var(--color-base, #000614) 100%)",

        // Card Background
        "card-gradient":
          "linear-gradient(103deg, var(--color-card, #050D24) 16.66%, var(--color-base, #000614) 81.61%)",

        // Gold Button
        "gold-gradient":
          "linear-gradient(149deg, #FFDF2D 9.71%, #EA8E25 94.41%)",

        // Gold Glow
        "gold-radial":
          "radial-gradient(90.09% 53.26% at 50.15% 97.4%, #EB8E25 0%, #E9CF3A 100%)",
      },
      fontFamily: {
        heading: ["var(--font-lora)", "serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 5vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.875rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.5rem, 2.4vw, 2rem)", { lineHeight: "1.2" }],
        h4: ["clamp(1.25rem, 1.8vw, 1.5rem)", { lineHeight: "1.25" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
        nav: ["0.9375rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        button: ["0.9375rem", { lineHeight: "1", letterSpacing: "0.02em" }],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(0,0,0,0.25)",
        DEFAULT: "0 8px 24px rgba(0,0,0,0.3)",
        lg: "0 20px 60px rgba(0,0,0,0.4)",
        gold: "0 8px 24px rgba(201,162,39,0.25)",
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

export default config;