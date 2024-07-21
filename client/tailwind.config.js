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
      boxShadow: {
        'white-glow': "0 0 40px 20px rgba(255, 255, 255, 0.7), 0 0 120px 80px rgba(255, 255, 255, 0.6), 0 0 220px 160px rgba(255, 255, 255, 0.4), 0 0 400px 340px rgba(255, 255, 255, 0.2), 0 0 15px 5px rgba(255, 255, 255, 0.9)",
        'blue-glow': "0 0 50px 25px rgba(32, 188, 255, 0.805), 0 0 150px 100px rgba(32, 188, 255, 0.69), 0 0 275px 200px rgba(32, 188, 255, 0.46), 0 0 500px 425px rgba(32, 188, 255, 0.23), 0 0 15px 0px rgba(32, 188, 255, 1)",
        'orange-glow': "0 0 50px 25px rgba(218, 136, 15, 0.805), 0 0 150px 100px rgba(218, 136, 15, 0.69), 0 0 275px 200px rgba(218, 136, 15, 0.46), 0 0 500px 425px rgba(218, 136, 15, 0.23), 0 0 15px 0px rgba(218, 136, 15, 1)",
      },
    },
  },
  plugins: [],
}

