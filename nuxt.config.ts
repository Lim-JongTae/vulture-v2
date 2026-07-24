// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/supabase',
    'nuxt-zod',
    'nuxt-tiptap-editor',
    '@vee-validate/nuxt'
  ],
  css: ['~/assets/css/main.css']
})