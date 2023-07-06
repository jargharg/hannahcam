// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },

  nitro: {
    preset: 'cloudflare_pages',
    prerender: {
      crawlLinks: false,
    },
  },
  
  hooks: {
    'nitro:config' (nitroConfig) {
      if (nitroConfig.dev) { return }
      nitroConfig.prerender.routes.push('/')
    },
  },

  modern: process.env.NODE_ENV !== 'development' ? 'client' : false,

  build: {
    transpile: ['gsap'],
  },

  components: true,

  css: [
    '~/assets/main.scss',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  tailwindcss: {
    viewer: false,
  },
})
