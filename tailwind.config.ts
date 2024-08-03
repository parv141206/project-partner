import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        comico: ["Comico", "sans-serif"],
        winkle: ["Winkle", "sans-serif"],
      },
      backgroundImage: {
        "main-bg": ` linear-gradient( to bottom, rgba(255, 255, 255, 0.480), rgba(255, 255, 255, 0.480)), url("/images/paper.jpg");`,
        "main-bg-dark": ` linear-gradient( to bottom, rgba(17, 24 ,39, 0.755), rgba(17, 24 ,39, 0.755)), url("/images/black-paper.jpg");`,
        circle: "radial-gradient(white , transparent);",
        "circle-dark": "radial-gradient(#111827, transparent);",
      },
    },
  },
  plugins: [],
};
export default config;
