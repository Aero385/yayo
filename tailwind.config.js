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
      backgroundImage: {
        'forest': "url('/public/lake.png')",
      },
      screens: {
        xs: '480px',
      },
      fontFamily: {
        manrop: ['Manrop', 'sans-serif'],
      },
      colors: {
        test1: '#FAD02C',
        test2: '#333652',
        test3: '#90ADC6',
        primary: '#00EBC7',
        secondary: '#f76ce9',
        basic: '#2e71f7',
        custRose: '#FF5470',
        custYel: '#FDE24F',
        custPurp: 'rgba(153, 79, 243, 0.46)',
        custGrey: '#E9E4ED',
        custOrang: '#FF5470',
        bgExp: "#094067",
        jan:"#FCCE5E",
        feb:"#E5A94E",
        mar:"#FA8A89",
        apr:"#F775A7",
        may:"#DB77EB",
        jun:"#FA79D6",
        jul:"#7198FD",
        aug:"#60A9D2",
        sep:"#71DBFD",
        oct:"#58E3B1",
        nov:"#62E557",
        dec:"#CBED45",
      },
     

    },
  },
  // variants: {
  //   extend: {
  //     linearGradients: ['responsive'],
  //   },
  // },
  plugins: [],
}
