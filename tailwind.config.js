/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ensure you include all relevant file types
  ],
  theme: {
    extend: {
      colors:{
        primary:"#001F3F",
        secondary:"#3A6D8C",
        tertiary:"#6A9AB0",
        quaternary:"#ebedeb",
        attention:"#d5a64c",
        light:"#ebedeb"
      },
      fontFamily:{
        primary:"Itim",
        secondary:"Mr Dafoe"
      },
      transitionDuration:{
        '1500': '1500ms',
        '3000': '3000ms'
      }
    },
  },
  plugins: [],
};
