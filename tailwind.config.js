const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "default": {
          extend: "light",
          colors:{
            neutral: {
              white: "#FFFFFF",
              black: "#000000",
              grey: "#767E86",
              blue: "#172432",
            },
            primary: {
              25: "#FFF8F1",
              50: "#FFE6DE",
              100: "#FFDFD5",
              200: "#FFD0C2",
              300: "#FFC2AF",
              400: "#FFB39D",
              500: "#FFA58A",
              600: "#D68B74",
              700: "#AD705E",
              800: "#855648",
              900: "#5C3B32",
              DEFAULT: "#FF7654",
            },
            secondary: {
              50: "#C6C6C6",
              100: "#B6B6B6",
              300: "#747474",
              500: "#333333",
              700: "#232323",
              900: "#121212",
              DEFAULT: "#333333",
            },
          }
        },
      }
    })
  ],
  theme: {
    extend: {
      maxWidth:{
        '8xl' : '105rem',
      },
      fontSize: {
        displayLarge: ["5.25rem", "6.25rem"],
        displayMobile: ["3rem", "3.5rem"],
        h1: ["3rem", "3.5rem"],
        h2: ["2.5rem", "3rem"],
        h3: ["1.75rem", "2.25rem"],
        h4: ["1.5rem", "2rem"],
        h5: ["1.25rem", "1.75rem"],
        p1: ["1rem", "1.5rem"],
        p2: ["0.875rem", "1.375rem"],
        micro: ["0.75rem", "1rem"],
      },
      boxShadow:{
        'cardShadow-1': '8px 8px 8px rgba(0, 0, 0, 0.2)',
        'cardShadow-2': '1px 4px 8px rgba(0, 0, 0, 0.2)',
        'cardShadow-3': '0px 0px 8px rgba(0, 0, 0, 0.2)',
      }
    },
  },
};
