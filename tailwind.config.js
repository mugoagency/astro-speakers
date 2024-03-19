module.exports = {
  purge: {
    content: ["./*.html"],
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
        dotsBackground: "rgba(243, 243, 243, 0.2)",
      },

      screens: {
        se: "375px",
        xr: "400px",
        sm: "640px",
        md: "768px",
        ipad: "960px",
        lg: "1024px",
        smalldesktop: "1200px",
        desktop: "1280px",
        mac: "1400px",
      },

      backgroundImage: {
        "hero-pattern": "url('../images/Earth.png')",
        "hero-pattern-mobile": "url('../images/MobileEarth.png')",
        "hero-about-pattern": "url('../images/Hero-About.png')",
        "hero-about-pattern-mobile": "url('../images/Hero-About-Mobile.png')",
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
        CardWidthDesktop: "31.8%",
        HeartMobile: "35px",
        TabletCard: "45%",
        fit: "fit-content",
        sixtythree: "63%",
        fiftyseven: "57%",
        ninety: "90%",
      },

      maxWidth: {
        mobile: "80%",
      },

      margin: {
        "Hero-margin": "-20rem",
      },

      fonts: {
        LabGrotesque: "Lab Grotesque",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
