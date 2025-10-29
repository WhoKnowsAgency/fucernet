<template>
  <div class="cafe-virtual">
    <Alerta />
    <Top :title="title" />
    <main id="contenido" class="band">
      <div class="container">
        <div ref="pageFocusTarget">
          <iframe
            :title="title"
            src="proximamente.html"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Top from "~/components/Top.vue";
import Alerta from "~/components/Alerta.vue";
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
      title: "Digesto IA",
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!process.client) return;
      vm.$announcer.set(
        `${vm.title} ${vm.$announcer.options.complementRoute}`,
        vm.$announcer.options.politeness
      );
      vm.$utils.moveFocus(vm.$refs.pageFocusTarget);
    });
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="sass">
iframe
  width: 100%
  height: calc(100vh - 95px - 60px)
  border: 1px solid black
  @media(min-width: 480px)
    height: calc(100vh - 61px - 60px)
  @media(min-width: 992px)
    height: calc(100vh - 111px - 60px)
</style>
