module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'md': '750px',
      // => @media (min-width: 750px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1200px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
