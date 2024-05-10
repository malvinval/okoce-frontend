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
        "okoce-red" : "#E01D28",
      },
      backgroundImage: {
        "hero-image": "url('./img/hero-img.png')",
        "bg1" : "url('./img/bg1.png')",
        "bg2" : "url('./img/bg2.png')",
        "bg3" : "url('./img/bg3.jpg')",
        "bg4" : "url('./img/banner-home.jpg')",
        "bg5" : "url('./img/galeri/sandiaga.jpeg')",
        "bg6" : "url('./img/galeri/yogyakarta.jpeg')",
        "pelatihan-ukm": "url('../7top-detail-pages/img/pelatihan-kolaborasi-ukm-strategi.jpg')",
        "pelatihan-master-mentor": "url('../7top-detail-pages/img/master-mentor-2.webp')",
        "pelatihan-optimasi-bisnis": "url('../7top-detail-pages/img/optimasi-bisnis.webp')",
        "riwayat-kredit": "url('../7top-detail-pages/img/riwayat-kredit.png')",
        "pengelolaan-keuangan": "url('../7top-detail-pages/img/pengelolaan-keuangan.png')",
        "keuangan-perbankan": "url('../7top-detail-pages/img/edukasi-keuangan-perbankan.png')",
        "fintech": "url('../7top-detail-pages/img/fintech.png')",
        "investasi-ilegal": "url('../7top-detail-pages/img/waspada-investasi-ilegal.png')",
        "ganyem-1": "url('../7top-detail-pages/img/ganyem-1.jpg')",
        "ganyem-2": "url('../7top-detail-pages/img/ganyem-2.jpg')",
        "ganyem-3": "url('../7top-detail-pages/img/ganyem-3.jpg')",
        "kembang-loyang": "url('../7top-detail-pages/img/kembang-loyang.jpeg')",
        "panir-bawang": "url('../7top-detail-pages/img/panir-bawang.jpg')",
        "nasi-kotak": "url('../7top-detail-pages/img/nasi-kotak.jpg')",
        "kopi-blend-emotikopi": "url('../7top-detail-pages/img/kopi-blend-emotikopi.jpg')",
      },
      backgroundSize : {
        "bg1":"cover"
      }
    },
  },
  plugins: [require("daisyui")],
}

