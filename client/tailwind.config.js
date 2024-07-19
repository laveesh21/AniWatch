/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'strawhat-bg': "url('./src/assets/strawhat.jpg')",
        'dbs-bg': "url('./src/assets/dbs_bg.jpg')",
        'naruto-bg': "url('./src/assets/naruto.jpg')",
      },
    },
  },
  plugins: [],
}
