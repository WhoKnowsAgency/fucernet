<template>
  <div class="consultas">
    <Alerta />
    <Top :title="title" />
    <main id="contenido" class="band">
      <div class="container">
        <span class="small__heading">
          {{
            consultasDisponibles
              ? `Tenés ${consultasDisponibles}`
              : "Ya no tenés"
          }}
          {{
            consultasDisponibles === 1
              ? "consulta disponible"
              : "consultas disponibles"
          }}
          este mes para enviar al equipo de FucerNet. <br /><br />

          Recibirás una respuesta vía mail a <b>{{ $auth.user.email }}</b
          >.
        </span>

        <div
          v-if="consultasDisponibles"
          ref="pageFocusTarget"
          class="form-consultas"
        >
          <div class="band form__container">
            <h2>Nueva consulta</h2>

            <mensaje
              :tipo="mensajeTipo"
              :texto="mensajeTexto"
              data-cy="error-form"
            />

            <form
              v-if="'idle' === status || 'error' === status"
              class="main__form"
              @submit.prevent="enviarConsulta"
            >
              <fieldset class="main__form--consulta">
                <label for="consulta">Escribí tu consulta</label>
                <textarea
                  id="consulta"
                  ref="consulta"
                  v-model="consulta"
                  v-validate="'required'"
                  name="consulta"
                  data-cy="consulta"
                  :class="{ error: errors.has('consulta') }"
                  placeholder="Escribí tu consulta"
                  rows="5"
                />
                <span v-show="errors.has('consulta')" class="error">
                  {{ errors.first("consulta") }}
                </span>
              </fieldset>

              <button
                type="submit"
                data-cy="submit"
                class="rounded__btn--medium green"
                :disabled="pagina.cargando"
              >
                {{ pagina.cargando ? "Cargando..." : "Enviar" }}
              </button>
            </form>

            <div v-else class="form-consultas--exito">
              <p>¡Recibimos tu consulta!</p>
              <button
                class="rounded__btn--medium"
                @click="status = 'idle'"
                @keyup.enter.prevent="status = 'idle'"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Top from "~/components/Top.vue";
import Alerta from "~/components/Alerta.vue";
import { mapState, mapActions } from "vuex";
import mensaje from "~/mixins/mensaje";

export default {
  layout: "app",
  components: {
    Top,
    Alerta,
  },
  mixins: [mensaje],
  middleware: "premium",
  data() {
    return {
      title: "Consultas",
      consulta: "",
      consultasDisponibles: 0,
      status: "idle",
    };
  },
  computed: {
    ...mapState(["pagina"]),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!process.client) return;
      vm.$announcer.set(
        `${vm.title} ${vm.$announcer.options.complementRoute}`,
        vm.$announcer.options.politeness
      );
      if (vm.consultasDisponibles) {
        vm.$utils.moveFocus(vm.$refs.pageFocusTarget);
      }
    });
  },
  async created() {
    this.setPaginaCargando(true);
    try {
      const { disponibles } = await this.$axios.$get("consultas");
      this.consultasDisponibles = disponibles;
    } catch (e) {
      this.consultasDisponibles = 0;
      console.error(e);
    }
    this.setPaginaCargando(false);
  },
  methods: {
    ...mapActions(["setPaginaCargando"]),
    async enviarConsulta() {
      let valida = await this.$validator.validateAll();
      if (!valida) {
        return;
      }
      this.setPaginaCargando(true);
      try {
        const { disponibles } = await this.$axios.$post("consultas", {
          mensaje: this.consulta,
        });
        this.status = "success";
        this.consulta = "";
        this.consultasDisponibles = disponibles;
      } catch (e) {
        this.setMensaje(e, "error");
      }
      this.setPaginaCargando(false);
    },
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="sass">
@import 'sass/pages/consultas.sass'
</style>
