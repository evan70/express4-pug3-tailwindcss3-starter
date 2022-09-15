module.exports = {
  content: ['./views/**/*.pug'],
    options: {
      keyframes: true
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  separator: '_',
}
