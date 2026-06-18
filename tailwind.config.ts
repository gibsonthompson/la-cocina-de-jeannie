import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Catering palette — locked to the navy/gold seal
        navy: "#1E2B4D",
        "navy-deep": "#16203B",
        gold: "#C6A24F",
        "gold-soft": "#E0C98A",
        cream: "#F3EEE0",
        "cream-deep": "#E9E1CE",
        charcoal: "#232026",
        silver: "#B8BCC0",
        // Food truck palette — locked to the bright flag badge
        "truck-blue": "#1F4FD8",
        "truck-red": "#E12B2B",
        "truck-gold": "#F6C21C",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
        prose2: "640px",
      },
      letterSpacing: {
        label: "0.24em",
      },
    },
  },
  plugins: [],
};

export default config;