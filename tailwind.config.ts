import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        glow: "0 0 40px hsl(var(--primary) / 0.25)",
        "glow-lg": "0 0 80px hsl(var(--primary) / 0.35)",
        "glow-xl": "0 0 120px hsl(var(--primary) / 0.4)",
        "glow-green": "0 0 40px hsl(var(--secondary) / 0.3)",
        "card": "0 4px 24px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.05) inset",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px hsl(var(--primary) / 0.1)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(hsl(var(--primary)/0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.04) 1px, transparent 1px)",
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% -10%, hsl(var(--primary)/0.18), transparent 70%)",
        "cta-gradient": "linear-gradient(135deg, hsl(214 100% 12%), hsl(222 47% 8%), hsl(214 100% 10%))",
        "blue-gradient": "linear-gradient(135deg, hsl(214 100% 58%), hsl(200 100% 52%))",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
