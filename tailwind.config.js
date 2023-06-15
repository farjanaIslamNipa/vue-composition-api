/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: '#f04935',
        primary: '#f04935',
        secondary: '#FEF2F0',
        grey: '#F7F7F7',
        dark: '#151414',
        info: '#1E88E5',
        success: '#48A43F',
        danger: '#EE3420',
        body: '#747476',
        appBlue: '#85bdff',
        lightBlue: '#90c6ff',
        appPurple: '#707efb',
        lightPurple: '#8897fd',
        appTeal: '#4bd8d8',
        lightTeal: '#72eeeb',
        appYellow: '#FEF9C3',
        appPink: '#F3E8FF',
        appLemon: '#DCFCE7',
      },
    },
  },
  plugins: [],
}