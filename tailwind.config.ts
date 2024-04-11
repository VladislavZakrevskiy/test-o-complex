import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*",
  ],
  theme: {
    colors: {
      coolBlack: '#222',
      coolWhite: '#F0F0F0',
      coolGray: '#D9D9D9'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
