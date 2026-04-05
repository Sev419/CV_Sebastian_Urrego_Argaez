import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f5f7fb",
          100: "#e8ecf5",
          200: "#cfd8e6",
          300: "#aab9d2",
          400: "#7d91b5",
          500: "#5d7398",
          600: "#475979",
          700: "#374561",
          800: "#273247",
          900: "#141c2b",
          950: "#0b1020",
        },
        accent: {
          50: "#edfdfa",
          100: "#d0f7ef",
          200: "#a7efe0",
          300: "#72e3cf",
          400: "#39d2b8",
          500: "#14b89f",
          600: "#0f9381",
          700: "#127568",
          800: "#155d53",
          900: "#164d45",
        },
        sand: "#f6efe5",
        gold: "#d6b57a",
      },
      boxShadow: {
        glow: "0 25px 80px rgba(20, 184, 159, 0.18)",
        panel: "0 18px 60px rgba(11, 16, 32, 0.16)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(232, 236, 245, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(232, 236, 245, 0.08) 1px, transparent 1px)",
      },
      fontFamily: {
        display: ["var(--font-sora)"],
        sans: ["var(--font-manrope)"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
