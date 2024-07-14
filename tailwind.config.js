/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}" 
  ],
  theme: {
    extend: {
      fontSize: {
        mySize: '1.75rem',
        t1: '0.813rem',
      },
      width : {
        w1: '65.625rem',
        w2: '40rem',
        w3: '20.813rem',
        w4: '7.5rem',
        w5: '6.056rem',
        w6: '8.688rem',
      },
      height : {
        h1: '2.875rem',
        h2: '2.75rem',
      },
    },
  },
  plugins: [],
}

