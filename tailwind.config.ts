import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./@/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      // if more screens are added, update useMediaQuery hook
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      aspectRatio: {
        card: "63/110",
      },
      backgroundImage: {
        book: "url('/backgrounds/book.png')",
        mobile: "url('/backgrounds/mobile.png')",
        iceland: "url('/backgrounds/iceland.jpg')",
        skyWithTower: "url('/backgrounds/skyWithTower.png')",
        lakeSetup: "url('/backgrounds/lakeSetup.jpg')",
        mossyWall: "url('/backgrounds/mossyWall.jpg')",
        snowyWaterfall: "url('/backgrounds/snowyWaterfall.jpg')",
        setupOnStump: "url('/backgrounds/setupOnStump.jpg')",
        lakeBox: "url('/backgrounds/lakeBox.jpg')",
      },
      fontFamily: {
        text: ["Carlito", "sans-serif"],
        title: ["Vinque", "sans-serif"],
      },
      colors: {
        golden: "#cf992c",
        paper: "#f2ecdf",
        paperGray: "#6d6854",
        cloud: "#b9ebf4",
        view: "#0698c5",
        brick: "#fa7307",
        redbrick: "#b02c09",
        tile: "#072755",
        destruction: "#dc2626",
        arcane: "#38b6ff",
        order: "#e19f3b",
        chaos: "#7030a0",
        creation: "#21a122",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-animated")],
} satisfies Config;

export default config;
