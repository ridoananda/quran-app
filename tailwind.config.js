// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'head': ['Cairo', 'Nunito Sans', 'Helvetica'],
      'display': ['Oswald'],
    },
    colors: {
      primary: '#27AE60',
      'green-linear': '#1CE972',
      'text-color': '#828282',
      ...colors,
      'transparent': 'transparent'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
