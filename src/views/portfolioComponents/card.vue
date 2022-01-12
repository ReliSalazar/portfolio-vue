<template>
  <b-col cols="12" md="6" lg="4" class="mb-5">
    <div class="gallery-item">
      <router-link :to="routeLink" class="project-link">
        <div class="project-container">
          <img
            class="project-img"
            :src="require(`@/assets/img/portfolio/${imgSrc}`)"
            :width="imgWidth"
            :height="imgHeight"
            :loading="lazy ? 'lazy' : ''"
            alt=""
          />
          <figcaption class="project-title">
            <h2 class="montserrat">{{ title }}</h2>
          </figcaption>
        </div>
      </router-link>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "card",
  props: {
    routeLink: {
      type: String,
    },
    imgSrc: {
      type: String,
    },
    imgWidth: {
      type: Number,
      default: 480,
    },
    imgHeight: {
      type: Number,
      default: 480,
    },
    lazy: {
      type: Boolean,
      defualt: false,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.gallery-item {
  @include hard-boxshadow($dark);

  .project-link {
    color: $dark;
    text-decoration: none;

    .project-container {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .project-img {
        width: 100%;
        height: auto;
        border-bottom: 1px solid $dark;
      }
      .project-title {
        height: 5rem;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
          font-size: 1.2rem;
          margin: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 991px) {
  .gallery-item {
    @include hard-boxshadow($dark, 8px, 8px);
  }
}
</style>
