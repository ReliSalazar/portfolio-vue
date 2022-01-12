<template>
  <b-container class="portfolio fade-in">
    <b-row>
      <b-col cols="12" class="mb-5">
        <h2 class="title">My work</h2>
      </b-col>
      <b-col cols="12">
        <gallery />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import gallery from "@/views/portfolioComponents/gallery";

export default {
  name: "Portfolio",
  title() {
    return `Portfolio`;
  },
  components: {
    gallery,
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

.portfolio {
  margin-top: 5rem;
  flex-basis: 100%;
  flex: auto;

  .title {
    @include underline-permanent($purple);
  }
}
</style>
