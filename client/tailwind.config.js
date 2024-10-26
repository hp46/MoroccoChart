/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '50': '50vh',
        '30': '30vh',
      },
      width: {
        '50': '50wh',
      }
    },
    fontFamily: {
      'header': ['Roboto'],
    },
  },
  plugins: [],
}

