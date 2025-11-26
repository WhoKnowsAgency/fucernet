<template>
  <div class="cafe-virtual">
    <Alerta />
    <Top :title="title" />
    <main id="contenido" class="band">
      <div class="container">
        <div ref="pageFocusTarget">
          <iframe
            :title="title"
            src="https://primary-production-05b7b.up.railway.app/webhook/3c138e9a-b51d-4c82-b745-7d4c8282c893/chat"
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

<style scoped lang="sass">
iframe
  width: 100%
  height: calc(100vh - 95px - 80px)
  @media(min-width: 480px)
    height: calc(100vh - 61px - 80px)
  @media(min-width: 992px)
    height: calc(100vh - 111px - 80px)
</style>
