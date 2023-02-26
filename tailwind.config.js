module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    flex: {
      '1': '1 1 0%',
      '1/2': '1 1 50%',
      'full': '1 1 100%',
    },
    extend: {
      colors: {
        colmenablue: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#839CD3',
          500: '#bfa094',
          600: '#5273C2',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      }
    }
  }
}
