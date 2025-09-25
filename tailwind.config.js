/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,njk,liquid}",
    "./src/**/*.njk"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Fira': ['Fira', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'Lexend': ['Lexend', 'sans-serif'],
        'Trueno': ['Trueno', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'light': '#f8f9fa',
        'dark': '#1a1a1a',
        'mustard': '#F7D533',
      }
    },
  },
  plugins: [],
}
