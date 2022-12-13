/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      brand: ' #1DA1F2',
      ...colors
    },
    extend: {
      flexGrow: {
        '2': 2
      }
    },
    screens: {
      sm: '500px',
      md: '617px',
      lg: '1005px',
      xl: '1282px',
    }
  },
}
