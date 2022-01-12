<template>
  <b-container class="home fade-in">
    <b-row>
      <b-col cols="12" class="cover"></b-col>
      <b-col cols="12"><card /></b-col>
      <b-col cols="12"><knowledge /></b-col>
      <b-col cols="12"><about /></b-col>
    </b-row>
  </b-container>
</template>

<script>
import card from "@/views/homeComponents/card.vue";
import knowledge from "@/views/homeComponents/knowledge.vue";
import about from "@/views/homeComponents/about.vue";

export default {
  name: "Home",
  title() {
    return `λ Reli Salazar`;
  },
  components: {
    card,
    knowledge,
    about,
  },
  mounted() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.home {
  margin-top: 4rem;
  flex-basis: 100%;
  flex: auto;

  .cover {
    content: "";
    height: 25rem;
    background-position: 0 0, 30px 30px;
    background-color: #222222;
    background-image: radial-gradient($blue 2px, transparent 2px),
      radial-gradient($blue 2px, #222222 2px);
    background-size: 60px 60px;
  }
}
</style>
