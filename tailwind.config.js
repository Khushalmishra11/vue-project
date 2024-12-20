const { Container } = require('postcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      }
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    Container: {
      center: true,
      padding: "2rem"
    },
    screens: {
      sm: "640px",
      md: "768px",
    },                         
  },
  plugins: [],
}

