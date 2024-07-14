/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./UserProfile/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      minWidth: {
        "50%": "50%",
      },
    },
    letterSpacing: {
      "-0.2px": "-0.2px",
      "-0.4px": "-0.4px",
      "-0.8px": "-0.8px",
    },
  },
  plugins: [],
};
