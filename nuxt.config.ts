// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-permissions',
    '@nuxtjs/tailwindcss',
    // "./node_modules/flowbite/**/*.{js,ts}"
    // ...
  ]
})
