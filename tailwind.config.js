/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Small devices
      }
    }
  },
  plugins: [],
}
