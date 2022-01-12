<template>
  <button
    @click="toTop"
    v-show="scY > 200"
    class="up-container"
    :class="scY > 400 ? 'visible' : ''"
  >
    UP!
  </button>
</template>

<script>
export default {
  name: "GoUp",

  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },

    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.up-container {
  @include hard-boxshadow($purple);
  background-color: $dark;
  color: $white;
  width: 3rem;
  height: 3rem;
  font-size: 1rem;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10;
  opacity: 0;
  transition: all 0.35s ease;
}
.visible {
  opacity: 1;
}
</style>
