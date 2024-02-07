/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        footerImg: "url('https://codeweekend.net/wp-content/uploads/2017/01/laptop-1571702_1280.jpg')",
      }
    },
  },
  plugins: [],
}