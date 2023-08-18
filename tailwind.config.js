/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ifkica: ["IFKICA", ...fontFamily.sans],
      },
      colors: {
        primaryBrown: "#EAC696",
        primaryBrownDarker: "#C8AE7D",
        secondaryBrownDark: "#765827",
        secondaryBrownDarker: "#65451F",
        primaryDarkMode: "#0D0D0D",
        scarletRed: "#FF2400",
        scarletRedDarker: "#A41700",
        
      },
    },
  },
  plugins: [],
};
