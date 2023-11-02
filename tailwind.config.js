/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "576px",
        sm: "640px",
        md: "872px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        espoHover: "#7282F4",
        purple: "#8390F5",
        purpleAlpha: "#8390F520",
        accessiblePurple: "#5A6DD8",
        accentRed: "#CF5F5F",
        bgGray: "#F3F3F3",
        dark: "#0E0D0D",
        accentGreen: "#4FBB92",
        accentBlue: "#4BA0D7",
        darkGray: "#ECECEC",
      },
      fontFamily: {
        slussenExtended: ["Slussen Extended"],
        slussen: ["Slussen"],
      },
    },
  },
  plugins: [],
};
