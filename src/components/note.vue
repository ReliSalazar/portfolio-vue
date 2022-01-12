<template>
  <b-col cols="12" md="3" class="notes">
    <slot></slot>
  </b-col>
</template>

<script>
export default {
  name: "note",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.notes {
  align-self: center;
  margin-bottom: 1.5rem;

  p {
    border-left: 4px solid $yellow;
    padding-left: 2rem;
    margin-bottom: 0;
  }
}
</style>
