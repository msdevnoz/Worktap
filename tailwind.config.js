module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f6fafd",
          100: "#f2f0fe",
          300: "#dcdfe6",
          400: "#c4c4c4",
          500: "#909399",
          600: "#717171",
          700: "#606266",
          900: "#1f1a17",
          "50_01": "#f7f5ff",
          "900_0a": "#2222220a",
          "100_01": "#f2f2f2",
          "700_01": "#606060",
          "500_01": "#9c9ca1",
          "500_02": "#939498",
          "900_02": "#1a202c",
          "600_01": "#a0616a",
          "900_01": "#222222",
          "300_01": "#e6e6e6",
        },
        red: {
          100: "#ffdbdb",
          200: "#e2abab",
          500: "#ff4343",
          800: "#b94029",
          "500_01": "#ff2a2a",
        },
        green: { A700_01: "#04c35c", A700: "#1dbf73", A700_71: "#1dbf7371" },
        deep_orange: { 100: "#ffb8b8", 800: "#c85929", "100_01": "#ffb7b7" },
        amber: {
          100: "#fbf4af",
          300: "#ffc85e",
          600: "#efb502",
          700: "#dea301",
          A700_02: "#e5a800",
          A700_01: "#e3a900",
          A700: "#e6ac01",
          A700_03: "#e6a901",
          "700_01": "#e2a401",
          "700_02": "#e3a401",
          "600_01": "#e9b000",
          "600_02": "#efb400",
          "600_03": "#eeb301",
        },
        deep_purple: { 50: "#ebe8ff", 100: "#d0cde1", 200: "#afaad0" },
        yellow: { 400: "#f6e266", 800: "#e7a52e", 900: "#e28424" },
        light_green: { 600: "#67c23a" },
        blue_gray: {
          100: "#cbcbcb",
          600: "#656083",
          700: "#454b69",
          800: "#3f3d56",
          900: "#2f2e41",
          "900_01": "#2d3748",
        },
        pink: { 100: "#efb7b9" },
        black: { 900: "#000000", "900_0a": "#0000000a", "900_1e": "#0000001e" },
        orange: {
          50: "#ffeddd",
          100: "#ffd6b1",
          300: "#fba457",
          600: "#d69b00",
          "200_e5": "#ffbc82e5",
          "300_01": "#eab14d",
        },
        indigo: { 400: "#5e4edb" },
        white: { A700: "#ffffff" },
        teal: { 50: "#d7ffec" },
      },
      boxShadow: {
        bs1: "0px 0px  20px 0px #ffbc82e5",
        bs3: "0px 8px  16px 0px #0000000a",
        bs: "0px 16px  16px 0px #0000000a",
        bs2: "0px 16px  16px 0px #2222220a",
        bs4: "0px 16px  20px 0px #0000001e",
      },
      fontFamily: {
        montserrat: "Montserrat",
        notosanssc: "Noto Sans SC",
        roboto: "Roboto",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(180deg ,#d69b00,#dea301,#e3a900,#e6ac01,#e9b000,#efb502)",
        gradient1:
          "linear-gradient(180deg ,#e2a401,#e6a901,#e3a401,#e5a800,#eeb301,#efb400)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};