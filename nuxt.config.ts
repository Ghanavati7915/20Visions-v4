// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ["@/public/css/main.css", "@/public/css/font.css"],
  devtools: { enabled: false },
  plugins: [{src: "~/plugins/bootstrap", mode: 'client'}],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/color-mode'],
})
