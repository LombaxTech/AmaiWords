import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "cream-white": "#FFFDD0",
        "soft-pink": "#FFC0CB",
        "mint-green": "#98FB98",
        "pastel-yellow": "#FFFACD",
        lavender: "#E6E6FA",
        "sky-blue": "#87CEEB",
        "dark-grey": "#333333",

        "background-main": "#FFFDD0", // Cream White for the primary background
        "background-secondary": "#FFC0CB", // Soft Pink for secondary sections or highlights
        "background-accent": "#E6E6FA", // Lavender for accents or modal backgrounds

        "text-main": "#333333", // Dark Grey for primary text
        "text-highlight": "#87CEEB", // Sky Blue for links or CTA text
        "text-secondary": "#FFC0CB", // Soft Pink for secondary text or headings

        "button-primary": "#FFFACD", // Pastel Yellow for primary buttons
        "button-secondary": "#98FB98", // Mint Green for secondary buttons or icons
        "button-hover": "#87CEEB", // Sky Blue for button hover states
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
    themes: ["light", "dark", "cupcake"],
  },
  darkMode: "class",
};
export default config;
