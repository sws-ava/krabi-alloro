require('dotenv').config()
const { join } = require('path')
const { copySync, removeSync } = require('fs-extra')

module.exports = {
  ssr: true,

  srcDir: __dirname,

  env: {
    apiUrl: process.env.API_URL || process.env.APP_URL + '/api',
    appName: process.env.APP_NAME || '!Krabi',
    appLocale: process.env.APP_LOCALE || 'ru',
    githubAuth: !!process.env.GITHUB_CLIENT_ID,
    imagesBaseUrl: process.env.BASE_URL,
  },
 

  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return{
      title: process.env.APP_NAME,
      titleTemplate: '%s - ' + process.env.APP_NAME,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  },

  loading: { color: '#007bff' },

  router: {
    middleware: [
      'check-auth'
    ]
  },

  css: [
    'quill/dist/quill.core.css',
    'quill/dist/quill.snow.css',
  ],

  plugins: [
    '~components/global',
    '~plugins/vform',
    '~plugins/axios',
    '~plugins/fontawesome',
    '~plugins/nuxt-client-init',
    { src: '~plugins/nuxt-quill-plugin', ssr: false },
    { src: '~plugins/i18n.js' }
  ],

  modules: [
    '@nuxtjs/router',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'ru', 
            iso: 'ru-RU',
            file: 'ru.js', 
          },
          {
            code: 'ua', 
            iso: 'ua-UA',
            file: 'ua.js', 
          },
        ],
        langDir: 'lang/',
        strategy: 'prefix_except_default',
        defaultLocale: 'ru',
        vueI18n: {
          fallbackLocale: 'ru',
        }
      }
    ],
  ],
  



  build: {
    extractCSS: true
  },

  hooks: {
    generate: {
      done (generator) {
        // Copy dist files to public/_nuxt
        if (generator.nuxt.options.dev === false && generator.nuxt.options.mode === 'spa') {
          const publicDir = join(generator.nuxt.options.rootDir, 'public', '_nuxt')
          removeSync(publicDir)
          copySync(join(generator.nuxt.options.generate.dir, '_nuxt'), publicDir)
          copySync(join(generator.nuxt.options.generate.dir, '200.html'), join(publicDir, 'index.html'))
          removeSync(generator.nuxt.options.generate.dir)
        }
      }
    }
  },
}
