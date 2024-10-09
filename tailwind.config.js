/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      backgroundImage: {
      background :"url('./assets/images/background-pattern-desktop.svg')",
    },
    backgroundColor:{
      bgcolor:'#fae8ff'
    },
    colors: {
      customPurple: '#301534',
      lightPurple:'#a776ad',
    },
    fontFamily:{
      custom:['WorkSansBold'],
      // WorkSansBold:['WorkSansBold']
    }
  },
  },
  plugins: [],
}

