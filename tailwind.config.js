/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "jost": ['Jost', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        "bold-400": "400",
        "bold-500": "500",
        "bold-900": "900",
        "bold-600": "600",
        "bold-700": "700"
      },
      borderRadius: {
        "half": "50px"
      },
      colors: {
        "okoce-light-blue": "#3EB7DD",
        "okoce-blue": "#007CBD",
      },
      backgroundImage: {
        "hero-image": "url('./img/hero-img.png')",
        "bg1" : "url('./img/bg1.png')"
      },
      backgroundSize : {
        "bg1":"cover"
      }
    },
  },
  plugins: [require("daisyui")],
}

