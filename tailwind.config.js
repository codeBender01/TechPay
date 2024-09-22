/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#1C2536",
        secondaryBlack: "#111927",
        altBlack: "#2F3746",
        textGray: "#6C737F",
        secondaryGray: "#9DA4AE",
        white: "#fff",
        purple: "#6366F1",
        activeTabGray: "#252E3E",
      },
      fontFamily: {
        main: "Inter",
        secondary: "Jakarta",
      },
      fontSize: {
        normal: "16px",
        sm: "14px",
        sm2: "12px",
      },
      borderRadius: {
        round: "50%",
        md: "8px",
      },
    },
  },
  plugins: [],
};
