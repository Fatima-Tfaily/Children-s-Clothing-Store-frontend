module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/*.html"],
  theme: {
    screens: {
      sm: { max: "640px" },
      md: "768px",
    },
    extend: {
      colors: {
        customBlue: "#91B6BC",
        gray: "#696969",
      },
      fontFamily: {
        yellowtail: ["Yellowtail", "cursive"],
        kaisei: ["Kaisei Decol", "cursive"],
        imperial: ["Imperial Script", "cursive"],
      },
      fontSize: {
        "7xl": "2.5rem", // Custom font size example
        m: "1.2rem",
        r: "1rem",
      },
    },
  },
  plugins: [],
};
