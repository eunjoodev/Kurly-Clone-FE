/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        1050: "65.625rem",
        742: "46.375rem",
        284: "17.75rem",
      },
      height: {
        1075: "67.1875rem",
        942: "58.875rem",
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
        "50px": "50px",
      },
      gap: {
        "5px": "5px",
      },
      spacing: {
        "13px": "13px",
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
        "#f2f2f2": "#f2f2f2",
        "#666666": "#666666",
        "#333333": "#333333",
        "#999999": "#999999",
        "#e2e2e2": "#e2e2e2",
        "#eeeeee": "#eeeeee",
        "#b5b5b5": "#b5b5b5",
        "#5f0080": "#5f0080",
        "#dddddd80": "#dddddd80",
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
