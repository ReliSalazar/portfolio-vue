<template>
  <b-container class="entry fade-in">
    <b-row>
      <b-col v-if="background" cols="12" class="background">
        <div class="bg-container">
          <img
            :width="imgWidth"
            :height="imgHeight"
            :src="require(`@/assets/img/${background}`)"
            alt=""
          />
        </div>
      </b-col>
      <b-col v-else cols="12" class="cover"></b-col>
      <b-col cols="12" class="title-container">
        <h2 class="underline-purple">{{ title }}</h2>
        <span v-if="dateTime" class="mark-p">{{ dateTime }}</span>
      </b-col>
      <b-col cols="12">
        <b-row class="content-container">
          <slot></slot>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "entry",
  props: {
    title: {
      type: String,
      defaut: "Title",
    },
    background: {
      type: String,
    },
    imgWidth: {
      type: Number,
      defualt: 1080,
    },
    imgHeight: {
      type: Number,
      defualt: 720,
    },
    dateTime: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.entry {
  line-height: 1.8;

  .cover {
    content: "";
    height: 35vh;
    background-position: 0 0, 30px 30px;
    background-color: #222222;
    background-image: radial-gradient($blue 2px, transparent 2px),
      radial-gradient($blue 2px, #222222 2px);
    background-size: 60px 60px;
  }

  .background {
    content: "";
    max-height: 20rem;
    background-color: #222222;
    background-image: radial-gradient($blue 2px, transparent 2px),
      radial-gradient($blue 2px, #222222 2px);
    background-size: 60px 60px;
    padding: 0;

    .bg-container {
      max-height: 20rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .title-container {
    margin: 2rem 0;
  }

  .content-container {
  }
}
</style>
