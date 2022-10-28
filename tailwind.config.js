module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    flex: {
      '1/2': '1 1 50%',
      'full': '1 1 100%',
    },
    extend: {
      colors: {
        'bg-dark-mode': '#303030',
      },
    }
  }
}
