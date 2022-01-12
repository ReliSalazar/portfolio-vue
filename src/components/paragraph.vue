<template>
  <b-col cols="12" md="9" class="content">
    <slot></slot>
  </b-col>
</template>

<script>
export default {
  name: "paragraph",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.content {
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 0;

    a {
      color: $purple;
      text-decoration: none;
      font-weight: bold;
      @include underline($purple, 2px);
    }

    br {
      height: 2rem;
    }

    strong {
      font-weight: normal;
    }
  }

  h3 {
    font-weight: 800 !important;
    @include underline-permanent($purple);
  }

  h4 {
    @include underline-permanent($purple, $height: 2px);
  }

  .img-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
