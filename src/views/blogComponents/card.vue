<template>
  <b-col cols="12" md="6" lg="4" class="mb-5">
    <router-link :to="routeLink" class="card-link">
      <div class="card-container">
        <img
          v-if="background"
          class="card-img"
          :src="require(`@/assets/img/posts/${background}`)"
          :width="imgWidth"
          :height="imgHeight"
          :loading="lazy ? 'lazy' : ''"
          alt=""
        />
        <div v-else cols="12" class="cover"></div>
        <div class="card-title">
          <h2 :class="titleClass">{{ title }}</h2>
        </div>
        <p>{{ content }}</p>
      </div>
    </router-link>
  </b-col>
</template>

<script>
export default {
  name: "card",
  props: {
    routeLink: {
      type: String,
    },
    title: {
      type: String,
      defaut: "Title",
    },
    titleClass: {
      type: String,
      default: "title-tech",
    },
    background: {
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
      default: false,
    },
    content: {
      type: String,
      default: "content",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.title-tech {
  @include underline-permanent($purple);
}
.title-personal {
  @include underline-permanent($blue);
}
.title-philosophy {
  @include underline-permanent($yellow);
}

.card-link {
  color: $dark;
}

.card-container {
  @include hard-boxshadow($dark);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;

  .card-img {
    content: "";
    height: 10rem;
    background-position: 0 0, 30px 30px;
    background-color: #222222;
    background-image: radial-gradient(#00acc1 2px, transparent 2px),
      radial-gradient(#00acc1 2px, #222222 2px);
    background-size: 60px 60px;

    height: 10rem;
    width: auto;
  }

  .cover {
    content: "";
    height: 10rem;
    background-position: 0 0, 30px 30px;
    background-color: #222222;
    background-image: radial-gradient(#00acc1 2px, transparent 2px),
      radial-gradient(#00acc1 2px, #222222 2px);
    background-size: 60px 60px;
  }

  .card-title {
    margin-bottom: 1rem;
    position: relative;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    h2 {
      font-size: 1.5rem;
    }
  }
}

@media screen and (max-width: 991px) {
  .card-container {
    @include hard-boxshadow($dark, 8px, 8px);
  }
}
</style>
