export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "colmena",
    htmlAttrs: {
      lang: "en",
      // class: 'dark'
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/adfced52be.js",
        crossorigin: "anonymous",
      },
    ],
  },
  srr:false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/css/main.css",
    "@/assets/css/style.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/fontawesome.js",
    "~/plugins/i18n.js",
    "~/plugins/utils.js",
    { src: "~/plugins/calendar.js", mode: "client" },
    { src: "~plugins/vcalendar.js", ssr: false },
    { src: "~/plugins/apexcharts.js", mode: "client" },
    { src: "@/plugins/click-outside.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      "~/components",
      "~/components/blobs",
      "~/components/nav-bars",
      "~/components/top",
      "~/components/calendar",
      "~/components/charts",
      "~/components/charts/subject",
      "~/components/filters",
      "~/components/filters/markers",
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8"
  ],

  colorMode: {
    classSuffix: "",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "@nuxtjs/i18n"],

  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    vueI18n: {
      fallbackLocale: "es",
      messages: {
        en: {
          english: "English",
          spanish: "Spanish",
          profile: "Profile",
          login: "Login",
          logout: "Logout",
          "app-language": "App language",
        },
        es: {
          english: "Inglés",
          spanish: "Español",
          profile: "Perfil",
          login: "Iniciar sesión",
          logout: "Cerrar sesión",
          "app-language": "Idioma de la aplicación",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["defu"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  router: {
    middleware: ["auth"],
  },

  axios: {
    proxyHeaders: false,
    credentials: false,
    baseURL: "https://dev.colmenaproject.es/admin/api/1.0/",
  },

  auth: {
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/private-area/projects",
    },
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer",
        },
        user: {
          property: "user",
          autoFetch: false,
        },
        endpoints: {
          login: {
            url: "users/users/login.json",
            method: "post",
            propertyName: "jwt",
          },
          user: false,
          logout: false,
        },
      },
    },
  },
};
