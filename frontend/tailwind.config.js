/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#48a296",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to bottom, #12567b, #398593)",
      },
    },
  },
  plugins: [],
};
