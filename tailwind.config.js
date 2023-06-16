/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        manrop: ['Manrop', 'sans-serif'],
      },
      colors: {
        primary: '#00EBC7',
        custRose: '#FF5470',
        custYel: '#FDE24F',
        custPurp: 'rgba(153, 79, 243, 0.46)',
        custGrey: '#E9E4ED',
        custOrang: '#FF5470',
      },
    
    },
  },
  plugins: [],
}
