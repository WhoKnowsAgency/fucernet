module.exports = {

  ssr: false,
  
  target: 'static' ,

  components: true,

  modern: true,

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
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://api-js.mixpanel.com' },
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
    ]
  },

  css: [
    'sass/main.sass',
  ],

  loading: { color: '#4ECDC4', height: '4px' },

  render: {
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
          'https://*.ingest.sentry.io',
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

  // https://github.com/Developmint/nuxt-webfontloader
  webfontloader: {
    custom: {
      families: [
        'Lora:n4,n7',
        'Lato:n4,n7,n9'
      ],
      urls: [
        'https://fonts.googleapis.com/css?family=Lora:400,700&display=swap',
        'https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap'
      ]
    }
  },

  pwa: {
    // https://pwa.nuxtjs.org/modules/manifest.html
    manifest: {
      theme_color: "#204A42",
      lang: "es"
    },
  
    // https://pwa.nuxtjs.org/modules/meta.html
    meta: {
      theme_color: '#204A42',
      lang: 'es'
    },
  
    // https://pwa.nuxtjs.org/modules/icon.html
    icons: {},
  
    // https://pwa.nuxtjs.org/modules/workbox.html
    workbox: true,
  },

  router: {
    base: '/',
    mode: 'history',
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

  buildModules: [
    // '~/modules/pwa-extension.js',
    '@nuxtjs/pwa',
  ],

  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    'nuxt-webfontloader',
  ],

  axios: {
    baseURL: 'https://net.fucer.com.ar/api/',
  },

  auth: {
    plugins: ['~/plugins/auth.js'],
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get', propertyName: 'user' },
          refreshToken: { url: '/auth/refresh-token', method: 'get', propertyName: 'token' }
        },
        refresh_token_key: 'refresh_token'
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/inicio'
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
    '~/plugins/api',
    '~/plugins/a11y',
    '~/plugins/filtros',
    '~/plugins/vue-validate',
    '~/plugins/sentry',
    '~/plugins/utils',
    // { src: '~/plugins/axe', ssr: false },
    { src: '~plugins/actualizar-datos-usuario', ssr: false },
    '~/plugins/mixpanel',
  ],

  /*
  ** Build configuration
  */
  build: {

    // // https://develop365.gitlab.io/nuxtjs-2.8.X-doc/en/api/configuration-build/#extractcss
    // extractCSS: true,

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
