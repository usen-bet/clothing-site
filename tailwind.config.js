/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    width: {
      body: "400px",
      sidebar: "600px", 
      full: "100%",
      width: '100vw',
      btn: '150px'
    },
    height: {
      body: "400px",
      parts: '33px',
      sidebar: "600px",
      full: "100%",
      fit:"fit-content",
      smoke: '50px',
      width: '100vh'
    },

    extend: {},
  },
  plugins: [],
}