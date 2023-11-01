import { type Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blackRGB10: "rgb(10,10,10)",
        blackRGB30: "rgb(30,30,30)",
        blackRGB50: "rgb(50,50,50)",
        customBlack01: "rgb(40,40,40)",
        customWhite01: "rgb(210,210,210)",
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
