// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Admin Dahboard'
        }
    },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',],
    alias: {
        '@': './src'
    },
    css: ['/src/assets/css/main.css'],
    dir: {
        pages: './src/pages',
        layouts: './src/layouts',
        middleware: './src/middleware'
    }
})
