import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        schoolBlue: "#C3EBFA",
        schoolLightBlue: "#EDF9FD",
        schoolPurple: "#CFCEFF",
        schoolLightPurple: "#F1F0FF",
        schoolYellow: "#FAE27C",
        schoolLightYellow: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
