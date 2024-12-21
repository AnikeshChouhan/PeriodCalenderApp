/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle, #BE3DDA, #8B19A4, #8B19A4, #8B19A4)",
      },

      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
        DarkGro: ["Darker Grotesque", "serif"],
        workSans: ["Work Sans", "serif"],
        Montserat: ["Montserrat", "serif"],
      },
      screens: {
        extraSmall: { min: "290px", max: "360px" }, // Custom range for your media query
        moreExtraSmall: { min: "100px", max: "290px" }, // Custom range for your media query
        sizefordiv: { min: "250px", max: "380px" }, // Custom range for your media queryX
        sizefordivmore: { min: "100px", max: "250px" }, // Custom range for your media queryX
      },
    },
  },
  plugins: [],
};
