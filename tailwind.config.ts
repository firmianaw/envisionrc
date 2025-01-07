import { nextui } from '@nextui-org/react';
import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        lightPurple: '#E6BDEF',
        purple: '#A669B5',
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"]
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;