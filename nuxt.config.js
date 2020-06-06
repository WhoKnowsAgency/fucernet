module.exports = {

  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | FucerNet',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'FucerNet' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap' },
    ]
  },

  css: [
    'sass/main.sass',
  ],

  loading: { color: '#4ECDC4', height: '4px' },

  render: {
    bundleRenderer: {
      shouldPrefetch: (file, type) => {
        if (type === 'script') {
          if (/pages\/(inicio|buscar|normativa\/_id)/.test(file)) {
            return true
          }
        }
        return false
      }
    },
    csp: {
      hashAlgorithm: 'sha256',
      policies: {
        'default-src': [
          "'none'",
        ],
        'script-src': [
          "'self'",
          'https://secure.mlstatic.com',
          'https://content.mercadopago.com',
          'https://http2.mlstatic.com',
        ],
        'style-src': [
          "'self'",
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
        ],
        'img-src': [
          "'self'",
        ],
        'font-src': [
          "https://fonts.gstatic.com"
        ],
        'connect-src': [
          "'self'",
          'https://events.mercadopago.com',
          'https://api.mercadopago.com',
          'https://content.mercadopago.com',
        ],
        'media-src': [
          "'none'",
        ],
        'object-src': [
          "'none'",
        ],
        'frame-src': [
          'https://mldp.mercadopago.com',
          'https://content.mercadopago.com',
        ],
        'frame-ancestors': [
          "'none'",
        ],
        'form-action': [
          "'self'",
        ],
        'base-uri': [
          "'none'",
        ],
      }
    }
  },

  // https://pwa.nuxtjs.org/modules/manifest.html
  manifest: {
    "name": "FucerNet",
    "short_name": "FucerNet",
    "description": "Consulte el  contenido de la  normativa aplicable a la  registración de automotores",
    "display": "standalone",
    "theme_color": "#204A42",
    "lang": "es"
  },

  // https://pwa.nuxtjs.org/modules/meta.html
  meta: {
    theme_color: '#204A42',
    lang: 'es'
  },

  // https://pwa.nuxtjs.org/modules/workbox.html
  workbox: {
    // dev: true,
    pagesURLPattern: '/|offline',
    runtimeCaching: [
      {
        urlPattern: '^https:\/\/fucer\.com\.ar\/app\/api\/.*',
        handler: 'networkFirst',
        strategyOptions: {
          cacheName: 'api-cache',
          networkTimeoutSeconds: 4,
          cacheExpiration: {
            maxEntries: 250,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          },
          cacheableResponse: { statuses: [0, 200] }
        }
      },{
        urlPattern: '^https:\/\/(www\.)?fucer\.com\.ar\/app\/cms\/.*',
        handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'cms-cache',
          cacheExpiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24 * 10,
            purgeOnQuotaError: true,
          },
          cacheableResponse: { statuses: [0, 200] }
        }
      },{
        urlPattern: '^https:\/\/fonts\.googleapis\.com',
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'google-fonts-stylesheets',
        }
      },{
        urlPattern: '^https:\/\/fonts\.gstatic\.com',
        handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'google-fonts-webfonts',
          cacheExpiration: {
            maxEntries: 30,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
          cacheableResponse: { statuses: [0, 200] }
        }
      },
    ],
    routingExtensions: '@/plugins/workbox-routing-extension.js',
  },

  router: {
    base: '/',
    mode: 'hash',
    middleware: ['sesiones-simultaneas','auth'],
    extendRoutes (routes, resolve) {
      routes.splice(0, routes.length,
        ...routes.map(route => {
          switch (route.name) {
            case 'normativa-id':
              return {
                ...route,
                name: 'normativa',
                path: '/normativa/:id/:slug?',
              }

            case 'activar-cuenta':
              return {
                ...route,
                path: '/activar-cuenta/:token',
              }

            case 'nueva-clave':
              return {
                ...route,
                path: '/nueva-clave/:token',
              }
            default:
              return route;
          }
        })
      )
    }
  },

  modules: [
    '~/modules/mercadopago',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
  ],

  mercadopago: {
    public_key: 'APP_USR-cc277696-d129-4246-9713-cedc9a6900fa'
  },

  axios: {
    baseURL: 'https://net.fucer.com.ar/api/'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'https://net.fucer.com.ar/api/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: 'https://net.fucer.com.ar/api/auth/logout', method: 'post' },
          user: { url: 'https://net.fucer.com.ar/api/auth/user', method: 'get', propertyName: 'user' },
          refreshToken: { url: 'https://net.fucer.com.ar/api/auth/refresh-token', method: 'get', propertyName: 'token' }
        },
        redirect: {
          login: '/login',
          logout: '/',
          callback: '/login',
          user: '/'
        },
        refresh_token_key: 'refresh_token'
      }
    },
    cookie: {
      options: {
        domain: 'net.fucer.com.ar',
        secure: process.env.NODE_ENV === 'production',
        samesite: process.env.NODE_ENV !== 'production' ? 'None' : 'Strict'
      }
    },
    plugins: [
      '~/plugins/auth.js',
      '~/plugins/workbox.js',
    ]
  },

  plugins: [
    '~/plugins/axios',
    '~/plugins/filtros',
    '~/plugins/vue-validate',
    '~/plugins/webp',
    '~/plugins/sentry',
    '~/plugins/utils',
    { src: '~/plugins/a11y', ssr: false },
    // { src: '~/plugins/axe', ssr: false },
    { src: '~plugins/actualizar-datos-usuario', ssr: false }
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
