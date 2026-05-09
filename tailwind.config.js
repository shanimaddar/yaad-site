/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:      "#0A2647",  // deep rich navy — headers, footer, headings
          azure:     "#1167B1",  // vivid azure — buttons, ע letter, office accent
          turquoise: "#00B5D8",  // bright turquoise — waves, sparkle, dividers
        },
      },
      fontFamily: {
        sans: ["Heebo", "sans-serif"],
      },
      backgroundImage: {
        // All-blue gradient — no turquoise at end = crisp white/turquoise text contrast
        "hero-gradient":
          "linear-gradient(145deg, #0A2647 0%, #0D3F78 55%, #1167B1 100%)",
      },
    },
  },
  plugins: [],
}
