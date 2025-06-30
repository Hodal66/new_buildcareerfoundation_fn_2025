/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        widthOfScreen: "1000px",
        widthOfScreenTablet: "700px",
        widthOfScreenLaptop: "900px",
        widthOfScreenPhone: "400px",
      },
      screens: {
        // sm: "640px",
        md: "768px",
        // lg: "1024px",
        // xl: "1280px",
        "2xl": "1536px",

        phone: "415px",

        tablet: "768px",

        laptop: "1024px",

        desktop: "1280px",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: "0.5em",
      },
      colors: {
        gradColor: "#AB324B",
        transparent: "transparent",
        current: "currentColor",
        textBluePhant: "#0077B6",
        fullBlackPhant: "#000000",
        blackPhant: "#212529",
        aquaMarine: "#7fffd4",
        whitePhant: "#ffffff",
        darkBluePhant: "#369FD7",
        errorText: "#f51c1c",
        adminFooterBackground: "#AFDCF3",
        adminformbgcolor: "#F1F1F1",
        thankYouColor: "#FE9000",
        bgGray:"#F3F3F3",
        // first gradient color
        grad1: "#23297A",
        // grad1: "#4A4362",
        grad2: "#008080",
        // grad2: "#843B67",
        grad3: "#0ABAB5",
        // grad3: "#AB324B",
        // second gradient color
        secondGrad1: "#355E3B",
        secondGrad2: "#138808",
        secondGrad3: "#228C22",

        grayColor: "#E1E1E1",

        // third section background color
        thirdSectionBg: "#4A4362",

        // form of the contact page colors
        bgInputColor: "#F7F7F7",
        borderInputColor: "#C4C4C4",

        // form of the contact page color on the message of guidance to fill the form
        guidanceMessageColorOnForm: "#999999",

        // //the color on the impact page at the "medica research"
        // background: #4A4362;

        // fourth section Background color
        fourthSectionBg: "#FFFFFF",
      },
  
      gridTemplateRows: {
        // Simple 12 row grid
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      borderRadius: {
        roundedBox: "30px",
        roundedMin: "10px",
      },
      fontSize: {
        thankYouSize: "64px",
        titleSize: "34.28px",
        paragraSize: "20px",
        btnSize: "16px",
        normalSize: "32px",
        verySmall: "10px",
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "3/10": "30%",
        "6/25": "24%",
        "19/50": "38%",
        "64/100": "64%",
      },
      fontFamily: {
        montiseramwa: ["Montserrat", '"san-serif"'],
        josefin: ["Josefin Slab", "serif"],
        Sensation: ["Sansation", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        LogoFont: ["Comic Neue", "cursive"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("flowbite/plugin"),
    require("tailwind-scrollbar-hide"),
    // require("@tailwindcss/forms")
    // ...
  ],
};
