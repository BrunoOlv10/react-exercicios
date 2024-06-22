/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#1977bc',
          '200': '#1922bc',
        }
      },
      spacing: {
        quad: '3rem'
      }
    },
  },
  plugins: [],
}

