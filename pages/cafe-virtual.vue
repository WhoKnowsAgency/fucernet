<template>
  <div class="cafe-virtual">
    <Alerta />
    <Top :title="title" />
    <main id="contenido" class="band">
      <div class="container">
        <div ref="pageFocusTarget">
          <iframe
            data-tally-src="https://tally.so/embed/444EjA?alignLeft=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="393"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="FucerNet: Café Virtual"
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
      title: "Café virtual",
    };
  },
  mounted() {
    var d = document,
      w = "https://tally.so/widgets/embed.js",
      v = function () {
        "undefined" !== typeof Tally
          ? // eslint-disable-next-line no-undef
            Tally.loadEmbeds()
          : d
              .querySelectorAll("iframe[data-tally-src]:not([src])")
              .forEach(function (e) {
                e.src = e.dataset.tallySrc;
              });
      };
    if ("undefined" != typeof Tally) v();
    else if (d.querySelector('script[src="' + w + '"]') == null) {
      var s = d.createElement("script");
      (s.src = w), (s.onload = v), (s.onerror = v), d.body.appendChild(s);
    }
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
  height: calc(100vh - 95px - 60px)
  @media(min-width: 480px)
    height: calc(100vh - 61px - 60px)
  @media(min-width: 992px)
    height: calc(100vh - 111px - 60px)
</style>
