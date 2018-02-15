export default function ({store, app, route}) {
  if (app.$auth.state.loggedIn) {
    if (route.name == 'login') {
      app.router.push({name: 'inicio'})
    }

    app.$axios.$get('favoritos', {
      params: {
        usuario: store.state.auth.user.id
      }
    })
    .then((normativas) => {
      normativas.map(item => {
        item.url = {
          name: 'normativa',
          params: {
            id: item.id,
            slug: decodeURIComponent(item.uri)
          }
        }
        return item
      })
      store.dispatch('favoritos/cargarFavoritos', normativas)
    })
  }
}