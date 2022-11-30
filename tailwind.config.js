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

    }
  }
}
