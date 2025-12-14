/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', 'media'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#081026', // header and footer dark navy
          900: '#071224'
        },
        'pale-blue': '#E6F2F6', // sections background like about/services
        'muted-blue': '#4E8C9F',
        accent: '#FF7B3E', // orange call to action
        'accent-dark': '#F05A2B',
        'card-bg': '#ffffff',
        'soft-gray': '#EDEFF1',
        'text-dark': '#0A0D25',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
