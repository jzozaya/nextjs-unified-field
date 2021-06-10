const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './components/**/*.js',
      './lib/**/*.js',
      './modules/**/*.js',
      './pages/**/*.js',
    ]
  },
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      pageBG: 'var(--pageBG)',
      pageText: 'var(--pageText)',
      indigo: colors.indigo,
      'light-blue': colors.lightBlue,
      teal: colors.teal,
      cyan: colors.cyan,
      rose: colors.rose,
      gray: colors.coolGray,
    },
    extend: {
      fontFamily: {
        inherit: 'inherit',
      },
      fontSize: {
        xxs: '.625rem',
      },
      zIndex: {
        '-1': '-10',
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
