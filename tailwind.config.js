/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          500: "#38bdf8", // Custom Sky color for buttons, links, etc.
        },
        realgreen: "#16a34a", // Custom Green for primary sections
        lightgray: "#f3f4f6", // Light background color
        darkgray: "#333333", // Dark text color for better readability
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"], // Custom font for the website
      },
      spacing: {
        128: "32rem", // Custom spacing for larger margins/paddings
        144: "36rem", // Custom spacing for larger margins/paddings
      },
      boxShadow: {
        lg: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Custom shadow effect for cards
      },
      screens: {
        xs: "480px", // Added a small breakpoint for mobile screens
      },
    },
  },
  plugins: [],
};
