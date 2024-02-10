import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        text: ["Carlito", "sans-serif"],
        title: ["Vinque", "sans-serif"],
      },
      colors: {
        cloud: "#b9ebf4",
        sky: "#0698c5",
        brick: "#fa7307",
        redbrick: "#b02c09",
        tile: "#072755",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
