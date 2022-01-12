<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    <GoUp />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import GoUp from "@/components/goUp.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    GoUp,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
