/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode:'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        verde: '#1C7A1F',
        cinza: '#606D75',
        preto: '#000000',
        branco: '#FFFFFF',
        rodape: 'rgba(0,0,0,0.5)',
        vermelho: '#FF1A1A',
        verdeDesbotado: '#507061',
        cinzaLg: "#94A2AB",
      },
    },
  },
  plugins: [],
};
