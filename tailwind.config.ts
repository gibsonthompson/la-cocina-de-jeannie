import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Catering (upscale) palette — pulled from Jeannie's muted-flag logo
        ink: "#1B1418",
        "ink-soft": "#2A2127",
        vino: "#732637",
        "vino-soft": "#8C3346",
        gold: "#C7A45A",
        "gold-soft": "#E1C994",
        ivory: "#F5EFE4",
        sand: "#EAE0CF",
        cocoa: "#4A4248",
        // Food truck (street) palette — bright Puerto Rican flag
        "flag-blue": "#1A56C4",
        "flag-red": "#E23046",
        "flag-yellow": "#F6C544",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-mulish)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
