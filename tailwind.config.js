/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "nunito-light": 'Nunito_300Light',
        "nunito-regular": 'Nunito_400Regular',
        "nunito-bold": 'Nunito_700Bold',
        "nunito-black": 'Nunito_900Black',
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
