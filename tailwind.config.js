/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          violet: "#8257E5;",
          violet_hover: "#9871F5",
          inputs: "#F8F8FC",
          green: "#04BF58",
        },
      }, 
      textColor: {
        text_shape: "#D4C2FF",
        form_title: "#32264D",
      }
    },
  },
  plugins: [],
}

