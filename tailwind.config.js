/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'didact': ['Didact Gothic', 'sans-serif'],
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  darkMode: 'class', // o 'media' si prefieres detectar automáticamente el modo oscuro
  variants: {
    extend: {
      // Configura tus variantes aquí si necesitas
    },
  },
  plugins: [],
};
