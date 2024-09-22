/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#1C2536",
        secondaryBlack: "#111927",
        textGray: "#6C737F",
        white: "#fff",
        purple: "#6366F1",
      },
      fontFamily: {
        main: "Inter",
        secondary: "Jakarta",
      },
      fontSize: {
        normal: "16px",
        sm: "14px",
      },
      borderRadius: {
        round: "50%",
      },
    },
  },
  plugins: [],
};
