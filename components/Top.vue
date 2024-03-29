<template>
  <div>
    <header class="main__header">
      <div class="container">
        <button
          class="hamburger"
          type="button"
          aria-label="Menú"
          :aria-expanded="menu.activo.toString()"
          :aria-controls="menuId"
          @click="toggleMenu"
          @keyup.enter="toggleMenu"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <h1 v-if="title">{{ title }}</h1>
        <nuxt-link
          :to="{ name: 'buscar' }"
          :tag="$route.name === 'buscar' ? 'span' : 'a'"
          class="rounded__btn--medium buscar"
        >
          Buscar
        </nuxt-link>
        <form
          class="form__buscar"
          aria-controls="resultado-busqueda"
          @submit.prevent="$router.push({ query: { busqueda } })"
        >
          <label for="buscar" class="form__buscar--icon"></label>
          <input
            id="buscar"
            v-model="busqueda"
            type="text"
            name="buscar"
            aria-label="Buscar en FucerNet"
            placeholder="Buscar en FucerNet"
          />
        </form>
      </div>
    </header>
    <nav
      :id="menuId"
      aria-label="Navegación principal"
      :class="'main__nav--container' + (menu.activo ? ' active' : '')"
    >
      <div class="overlay" @click="closeMenu" @keyup.enter="closeMenu"></div>

      <focus-trap
        :active="menu.activo"
        :initial-focus="() => $refs.mainMenuInitialFocus.$el"
        :return-focus-on-deactivate="false"
        @activate="openMenu"
        @deactivate="closeMenu"
      >
        <div class="main__nav">
          <div v-if="$auth.loggedIn" class="user__info">
            <span>{{ $auth.user.nombre }}</span>
            <small>{{ $auth.user.email }}</small>
          </div>
          <ul>
            <li>
              <nuxt-link
                ref="mainMenuInitialFocus"
                :tag="$route.name === 'inicio' ? 'span' : 'a'"
                :to="{ name: 'inicio' }"
              >
                Inicio
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :tag="$route.name === 'buscar' ? 'span' : 'a'"
                :to="{ name: 'buscar' }"
              >
                Buscar
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :tag="$route.name === 'favoritas' ? 'span' : 'a'"
                :to="{ name: 'favoritas' }"
              >
                Favoritas
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :tag="$route.name === 'suplemento' ? 'span' : 'a'"
                :to="{ name: 'suplemento' }"
              >
                Suplemento Registral
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :tag="$route.name === 'dictamenes' ? 'span' : 'a'"
                :to="{ name: 'dictamenes' }"
              >
                Dictámenes AAERPA
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :tag="$route.name === 'separata' ? 'span' : 'a'"
                :to="{ name: 'separata' }"
              >
                Separata Anual de Normas
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :tag="$route.name === 'configuracion' ? 'span' : 'a'"
                :to="{ name: 'configuracion' }"
              >
                Configuración
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :tag="$route.name === 'ayuda' ? 'span' : 'a'"
                :to="{ name: 'ayuda' }"
              >
                Ayuda
              </nuxt-link>
            </li>
            <li>
              <a href="https://www.dnrpa.gov.ar/nuevodigesto/" target="_blank">
                Digesto
              </a>
            </li>
            <li v-if="$auth.loggedIn">
              <a href="#" @click="logout()" @keyup.enter="logout()"
                >Cerrar Sesión</a
              >
            </li>
          </ul>
          <button
            class="main__nav--cerrar"
            @click="closeMenu"
            @keyup.enter="closeMenu"
          >
            Cerrar menú
          </button>
          <span class="logo">
            <img src="~/assets/img/logo-fucernet.svg" alt="" width="100" />
          </span>
        </div>
      </focus-trap>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      menuId: "menu-principal",
      busqueda: "",
    };
  },
  computed: {
    ...mapState(["menu"]),
  },
  watch: {
    "$route.query.busqueda": {
      handler: async function (newBusqueda) {
        this.busqueda = newBusqueda;
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(["setMenuActivo"]),
    toggleMenu() {
      if (this.menu.activo) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    openMenu() {
      this.setMenuActivo(true);
      this.$refs.mainMenuInitialFocus.$el.focus();
    },
    closeMenu() {
      this.setMenuActivo(false);
      if ("#menu-principal" === this.$route.hash) {
        this.$router.push({ hash: "" });
      }
    },
    async logout() {
      if (
        !window.navigator.onLine &&
        !confirm(
          "Está sin conexión a internet y no va a poder volver a acceder hasta que vuelva la conexión ¿quiere cerrar la sesión igualmente?"
        )
      )
        return;

      await this.$auth.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="sass">
@import 'sass/components/top.sass'
</style>
