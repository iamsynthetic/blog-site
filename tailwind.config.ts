import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md900: "900px",
      // => @media (min-width:900px) { ... }
    },
    extend: {
      colors: {
        dark: "#3B3C40",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
