/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bevietnam: ['"Be Vietnam Pro"', 'sans-serif'],
        sans: ['Poppins', ...fontFamily.sans],
        display: ['Righteous', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}