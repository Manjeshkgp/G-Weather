import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:{
          900:"#171717",
          800:"#1f1f1f",
          700:"#202124",
          650:"#3C4043",
          600:"#38393d",
          500:"#454648",
          400:"#5f6368",
          300:"#bfbfbf",
          200:"#DADCE0",
          100:"#e8e8e8",
          50:"#F8F9FA",
        }
      },
      
    },
  },
  plugins: [],
  darkMode:"class"
};
export default config;
