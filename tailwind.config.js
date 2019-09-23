module.exports = {
  theme: {
    translate: {
      '1/2': '50%',
      '-1/2': '-50%',
      'full': '100%',
      '-full': '-100%',
      '2full': '200%',
      '4': '1rem',
      '-4': '-1rem'
    },
    rotate: {
      90: '90deg'
    },
    extend: {
      backgroundColor: {
        accent: '#2452BB',
        secondary: '#FF787D'
      },
      textColor: {
        accent: '#2452BB',
        'accent-var': '#264ca5',
        secondary: '#FF787D'
      },
      margin: {
        'full': '-100%',
        '9': '2.25rem'
      },
      opacity: {
        85: '0.85',
        20: '0.2'
      },
      width: {
        inherit: 'inherit'
      },
      height: {
        inherit: 'inherit'
      },
      spacing: {
        '28': '7rem'
      },
      zIndex: {
        '-10': '-10'
      }
    }
  },
  variants: {
    pointerEvents: ['responsive', 'important'],
    zIndex: ['responsive', 'hover'],
    visibility: ['responsive', 'important'],
    textColor: ['responsive', 'hover', 'focus', 'important']
  },
  plugins: [
    require('tailwindcss-transforms')(),
    function({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }
  ]
}
