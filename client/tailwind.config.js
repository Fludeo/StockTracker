const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
 
    theme: {
      colors: {
        // Build your palette here
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.coolGray,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        green: colors.lime,
      },
  },
  variants: {
    extend: {},
  },
  plugins: [{
    
   divideWidth:  true,
  }],
}
