/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cuaed_blue: "#25387E",
        cuaed_gold: "#E99F1D",
        cuaed_white: "#FCFCFC",
      },
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

