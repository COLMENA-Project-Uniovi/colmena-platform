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
    }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/adfced52be.js', crossorigin: "anonymous" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

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
  build: {
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      },
    },
  },

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
        // token: {
        //   property: 'token',
        //   global: true,
        //   // required: true,
        //   // type: 'Bearer'
        // },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: 'users/users/login.json',
            method: 'post',
            // propertyName: 'jwt'
          },
          user: {
            url: 'users/me',
            method: 'get',
            propertyName: 'data'
          },
          logout: false
        }
      }
    }
  }
}
