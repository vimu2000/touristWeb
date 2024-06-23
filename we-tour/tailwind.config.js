/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xss':'590px',
        'xs1':'525px',
        'xs3':'450px',
        'xs2':'400px',
        '3xl': '2220px',
      },
    
    },
  },
  plugins: [],
}

