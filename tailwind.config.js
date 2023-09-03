/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      Alata: ['Alata', 'serif'],
      Josefin_Sans: ['Josefin Sans', 'sans-serif'],
    },
    colors: {
      'DarkGray': 'hsl(0, 0%, 55%)'
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

