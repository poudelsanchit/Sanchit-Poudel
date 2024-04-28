/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       'bg-dark': '#0d0d0d',
       'txtprimary':'#b7ab98 ',
       
       'txtsecondary': '#c84c31',
       'txttertiary':'#4b4b4b'
      }
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      Roboto: ['Roboto Mono', 'monospace']
    },
    backgroundImage:{
      hero: 'url(src/assets/kendrit.png)',
      shape: 'url(src/assets/blob.svg)'

    }
  },
  plugins: [],
}