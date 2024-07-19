/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        1050: "65.625rem",
        742: "46.375rem",
        284: "17.75rem",
        w1: '65.625rem',
        w2: '40rem',
        w3: '20.813rem',
        w4: '7.5rem',
        w5: '6.056rem',
        w6: '8.688rem',
        w7: '20.813rem',
        w8: '3.86rem',
      },
      height: {
        1075: "67.1875rem",
        942: "58.875rem",
        h1: '2.875rem',
        h2: '2.75rem',
        h3: '1.934rem',
        h4: '4.934rem',  
        h5: '6.184rem',
        h6: '8.542rem',
      },
      minWidth: {
        1050: "65.625rem",
        742: "46.375rem",
        284: "17.75rem",
        "50%": "50%",
      },
      minHeight: {
        1075: "67.1875rem",
        942: "58.875rem",
      },
      padding: {
        p1: '0.688rem',
        p2: '0.938rem',
      },
      gap: {
        "5px": "5px",
      },
      spacing: {
        "13px": "13px",
        "16px": "16px",
        "18px": "18px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "54px": "54px",
        "81px": "81px",
        "375px": "375px",
      },
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
      fontSize: {
        mySize: '1.75rem',
        t1: '0.813rem',
      },
    },
    letterSpacing: {
      "-0.2px": "-0.2px",
      "-0.4px": "-0.4px",
      "-0.8px": "-0.8px",
    },
    backgroundImage: {
      emptyImg: "url('./Empty.svg')",
    },
  },
  plugins: [],
};

