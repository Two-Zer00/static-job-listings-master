/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayish: {
          50: 'hsl(180, 52%, 96%)',
          100: 'hsl(180, 31%, 95%)',
          200: 'hsl(180, 8%, 52%)',
          300: 'hsl(180, 14%, 20%)'
        },
        cyan: {
          50:'hsl(180, 29%, 50%)'
        }
      },
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}
