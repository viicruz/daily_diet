/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary_50: '#E5F0DB',
        primary_100: '#CBE4B4',
        primary_200: '#639339',
        secondary_50: '#F4E6E7',
        secondary_100: '#F3BABD',
        secondary_200: '#BF3B44',
      },
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
