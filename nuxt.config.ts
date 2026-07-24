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
  css: ['~/assets/css/main.css'],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/hoopoe/image/upload/'
    }
  },
  runtimeConfig: {
    cloudinaryUrl: process.env.CLOUDINARY_URL,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    public: {
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || 'hoopoe',
      cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || '713324964544299',
      cloudinaryFolder: process.env.CLOUDINARY_FOLDER || 'vulture'
    }
  }
})