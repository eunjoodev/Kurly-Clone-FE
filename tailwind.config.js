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
      },
      minHeight: {
        1075: "67.1875rem",
        942: "58.875rem",
      },
    },
  },
  plugins: [],
};
