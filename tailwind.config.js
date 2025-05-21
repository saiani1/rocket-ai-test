/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        font: {
          saju: "#000000",
          title: "#424242",
        },
        background: {
          black: "#2F2F2F",
          red: "#C23030",
          turquoise: "#18868C",
          beige: "#F5F3EC",
        },
        line: {
          black: "#1B2F49",
          navy: "#2B557E",
          gray: "#8A8A8A",
        },
      },
    },
  },
  plugins: [],
};
