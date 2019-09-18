module.exports = {
  theme: {
    translate: {
      '1/2': '50%',
      '-1/2': '-50%',
      'full': '100%',
      '-full': '-100%',
      '2full': '200%'
    },
    extend: {
      width: {
        inherit: 'inherit'
      },
      height: {
        inherit: 'inherit'
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-transforms')()
  ]
}
