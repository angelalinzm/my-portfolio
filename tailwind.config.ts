import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#ffffff",
          "page-bg": "#f0f0ed",
          text: "#0d0d0d",
          green: "#16a34a",
          violet: "#a78bfa",
          amber: "#fb923c",
          blue: "#38bdf8",
          pink: "#f472b6",
          teal: "#2dd4bf",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
