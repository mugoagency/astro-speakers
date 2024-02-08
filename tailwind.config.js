module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5e7ef0",
        secondary: "#1c44d3",
        lightblue: "#85C1FC",
        darkblue: "#5F7FF0",
        white: "#FFFFFF",
        black: "#080a10",
        dark: "#0e1721",
        navy: "#16293f",
        grey: "#a3b5c6",
        green: "#1CF709",
        red: "#F70909",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
