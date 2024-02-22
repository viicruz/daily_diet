/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans-light": 'NunitoSans_300Light',
        "nunito-sans-regular": 'NunitoSans_400Regular',
        "nunito-sans-semibold": 'NunitoSans_600SemiBold',
        "nunito-sans-bold": 'NunitoSans_700Bold',
        "nunito-sans-extrabold": 'NunitoSans_800ExtraBold',
        "nunito-sans-black": 'NunitoSans_900Black',
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
