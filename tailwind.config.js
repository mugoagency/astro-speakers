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
        beige: "#F3F3F3",
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
        "hero-pattern-mobile": "url('../images/MobileEarth.png')",
      },

      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        "25%": "25%",
      },

      width: {
        "3.5/12": "28.5%",
        "8.5/12": "70.0%",
      },

      // minHeight: {
      //   half: "80vh",
      // },

      maxWidth: {
        mobile: "80%",
      },

      margin: {
        "Hero-margin": "-20rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
