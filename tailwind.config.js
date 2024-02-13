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

      screens: {
        sm: "640px",
        md: "768px",
        ipad: "960px",
        lg: "1024px",
        desktop: "1280px",
        mac: "1400px",
      },

      backgroundImage: {
        "hero-pattern": "url('../images/Earth.png')",
      },

      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        "25%": "25%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
