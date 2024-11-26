const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        beep: "beep 1.5s infinite",
        typing: "typing 3s steps(40) 1s 1 normal both",
        colorChange: "color-change 5s linear infinite",
      },
      keyframes: {
        beep: {
          "0%": {
            transform: "scale(.6)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(.6)",
            opacity: "1",
          },
        },
        typing: {
          "0%": {
            width: "0",
            opacity: "0",
          },
          "100%": {
            width: "100%",
            opacity: "1",
          },
        },
        colorChange: {
          "0%": {
            color: "#1D4ED8",
          },
          "25%": {
            color: "#9333EA", // Purple color
          },
          "50%": {
            color: "#10B981", // Green color
          },
          "75%": {
            color: "#F59E0B", // Yellow color
          },
          "100%": {
            color: "#1D4ED8", // Back to blue
          },
        },
      },
    },
  },
  plugins: [],
});
