export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'colmena',
    htmlAttrs: {
      lang: 'en',
      // class: 'dark'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ''
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
    }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    classSuffix: '',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: ['auth'],
  },

  axios: {
    credentials: false,
    baseURL: 'https://beta.colmenaproject.es/admin/api/1.0/',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/users/users/login.json',
            method: 'post',
            propertyName: 'data.token'
          },
          user: {
            url: 'me',
            method: 'get',
            propertyName: 'data'
          },
          logout: false
        }
      }
    }
  }
}
