/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {

    screens: {
      'm': '375px', //small mobile
      'l': '425px', //large mobile
      'sm': '640px', //small Tablet
      'md': '768px	', // tablet
      '2md': '894px',
      'lg': '1024px', //laptop
      'xl': '1280px	', //large laptop
      '2xl': '1536px	', //large screens



    },

    extend: {

    },
    colors: {
      'bg-primary': '#1E1E1E',
      'bg-secondary': '#393E46',
      'primary': '#EEEEEE',
      'secondary': '#00ADB5',
      'box': '#151414',
      'bg-primary2': '#191627',
      'bg-secondary2': '#6e57e0',
      'button-hover': '#5a43cb',
      'white': '#ffffff',
      'text-secondary': '#6d6a7c',
      'text-tertiary': '#BCB4B4',
      'primary-background': '#191627',
      'bottom-nav-background': '#5235a6'

    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto Mono', 'monospace'],
    },
  },
  plugins: [],
}

