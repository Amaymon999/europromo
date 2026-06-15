/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        dark: "#141414",
        graphite: "#2A2A2A",
        mist: "#E8E8E8",
        paper: "#FAFAFA",
        blue: {
          DEFAULT: "#0052FF",
          dark: "#0040CC",
          light: "#3D7AFF",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "Geist", "sans-serif"],
        body: ["Geist", "Inter", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      lineHeight: {
        tight: "0.95",
        snug: "1.1",
        relaxed: "1.7",
      },
      spacing: {
        section: "8rem",
        "section-lg": "10rem",
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        industrial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
