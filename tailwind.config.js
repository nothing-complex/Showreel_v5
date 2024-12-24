/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'archivo-narrow': ['"Archivo Narrow"', 'sans-serif'],
      },
      colors: {
        cream: '#E5DCD3',
        black: '#0A0A0A',
        darkGray: '#1C1C1C'
      },
    },
  },
  plugins: [],
};