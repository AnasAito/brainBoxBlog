// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");
var i;
var widthException = [];
for (i = 0; i < 12; i++) {
  widthException.push(`w-${i + 1}/12`);
}

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans]
      },
      inset: {
        "1/2": "50%"
      },
      top: {
        "1/2": "50%"
      },
      left: {
        "1/2": "50%"
      }
    }
  },
  plugins: [require("@tailwindcss/ui")]
};
