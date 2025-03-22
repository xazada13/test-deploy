// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  target: 'static',
  $production: {
    app: {
      baseURL: "/test-deploy"
    },
    router: {
      base: "/test-deploy"
    }
  }
})
