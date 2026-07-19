/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        pageBg: "#111111",
        cardBg: "#282828",
      },
      colors: {
        cardTitleColor: "#d4d4d4",
      },
      fontFamily: {
        headerFonts: ["Montserrat", "sans-serif"],
        bodyFonts: ["Poppins", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 300s linear infinite",
        "sliding-up": "sliding-up 6s  ease-in-out infinite",
        "sliding-down": "sliding-down 6s ease-in-out infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "sliding-up": {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-50px)" },
          "50%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(50px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "sliding-down": {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(50px)" },
          "50%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  variants: {
    animation: ["hover"],
  },
  plugins: [],
};
