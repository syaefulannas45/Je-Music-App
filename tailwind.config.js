/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          100: '#1E1E1E',
          200: '#171717',
          gradient1: '#161B33',
          gradient2: '#4C2A6A',
        },
        highlight: {
          100: '#FF6B6B',
          200: '#5AC8E6',
          300: '#7D53E7',
          400: '#738678',
        },
        text: {
          100: '#FFFFFF',
          200: '#F2D024',
          300: '#D1D1D1',
          400: '#D9A574',
          500: '#4ECDC4',
          600: '#6A6A6A',
        },
        border: {
          100: '#2E2E2E',
          200: '#7D53E7',
          300: '#555555',
          400: '#91CFF4',
        },
        input: {
          100: '#333333',
          200: '#6A6A6A',
        },
      },
      fontFamily: {
        400: ['Poppins-Regular'],
        500: ['Poppins-Medium'],
        600: ['Poppins-SemiBold'],
        700: ['Poppins-Bold'],
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
