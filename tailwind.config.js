/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}" 
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      purple: '#5F0080',
      red: '#EE6A7B',
      darkGray: '#333333',
      middleGray: '#666666',
      lightGray: '#dddddd',
      white: '#FFFFFF',

    },
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
        w7: '20.813rem',
        w8: '3.86rem',
      },
      height : {
        h1: '2.875rem',
        h2: '2.75rem',
        h3: '1.934rem',
        h4: '4.934rem',  
        h5: '6.184rem',
        h6: '8.542rem',    
      },
      padding : {
        p1: '0.688rem',
        p2: '0.938rem',
      },
    },
  },
  plugins: [],
}

