/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultGreen: "#55c57a",
      },
      backgroundImage: {
        "green-gradient":
          "linear-gradient(to right bottom,rgba(126, 213, 111, 0.8), rgba(40, 180, 131, 0.8))",
      },
      keyframes: {
        "move-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },

          "80%": {
            transform: "translateX(10px)",
          },

          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },

        "move-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },

          "80%": {
            transform: "translateX(-10px)",
          },

          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },
        "move-in-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },

          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
