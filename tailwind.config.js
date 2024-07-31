/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        pinkcolor: '#ff2266',
        dark: {
          DEFAULT: '#333333',
        },
        light: {
          DEFAULT: '#FFFFFF',
        },
      },
      textColor: ['active'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'dark-hover'],
      textColor: ['dark', 'dark-hover'],
    },
  },
  plugins: [],
};
