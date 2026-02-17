import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          black: "#07060d",
          violet: "#1a1130",
          navy: "#091329",
          gold: "#f3c969"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(243, 201, 105, 0.35)",
        "glow-soft": "0 0 45px rgba(243, 201, 105, 0.2)"
      },
      backgroundImage: {
        "cosmic-gradient":
          "radial-gradient(circle at top, rgba(43,27,92,0.8) 0%, rgba(9,19,41,0.95) 45%, rgba(7,6,13,1) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
