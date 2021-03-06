export default {
  target: "static",
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  /*
   ** .env
   */
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Francisco Borja",
    htmlAttrs: {
      lang: "en"
    },
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" }, //IBM Plex Mono light 300
      { rel: "preconnect", href: "https://fonts.gstatic.com" }, //
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;300&display=swap"
      }, //
      { rel: "stylesheet", href: "https://use.typekit.net/hvb3jfi.css" }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ]
  },
  loading: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/_typography.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtclub/slugify"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
