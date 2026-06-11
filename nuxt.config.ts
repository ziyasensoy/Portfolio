// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    baseURL: "/Portfolio/",
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unicons.iconscout.com/release/v4.0.0/css/line.css",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/i18n"],
  i18n: {
    langDir: "locales",
    locales: [
      { 
        code: "nl-NL",
        iso: "nl-NL",
        name: "Dutch",
        file: "nl-NL.json"
       },
       { 
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json"
       },
    ],
  },
});
