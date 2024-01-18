/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#011126',
      'secondary': '#1F6373',
      'neutral': '#D9C6BA',
      'complementary': '#8C6568',
      'highlight': '#01090D'
    },
    extend: {
      fontFamily: {
        serif: ['Gloock', 'serif', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
