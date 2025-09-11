// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          900: "#3e2723", // dark chocolate
          100: "#efebe9", // light mocha
        },
        cream: {
          50: "#fffdf8", // near-white cream
          100: "#fef9f1", // light cream
          200: "#fcf4e6", // deeper cream
        },
        peach: {
          100: "#ffe0cc", // pastel peach for cards
        },
        yellow: {
          400: "#fdd835", // CTA / highlight
          300: "#ffee58", // hover/alt
        },
      },
      keyframes: {
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "slide-down": "slide-down 0.3s ease-out",
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin-slow 12s linear infinite",
      },
    },
  },
  plugins: [],
};
