<template>
  <b-row class="content">
    <b-col cols="12" lg="7">
      <div class="title-container">
        <h2 class="title">About me</h2>
      </div>
      <p class="paragraph">
        My passion has always been to create things, I started from a young age
        to write music learning in a self-taught way, also got to do
        blacksmithing and carpentry, but from the first moment I wrote my first
        "hello world" I realized where really was what I was looking for.
      </p>
      <p class="paragraph">
        I owe almost all of my knowledge in code to the internet on a
        self-taught way, I have done many courses and certifications and after a
        couple of years learning different technologies, I can consider myself a
        programmer.
      </p>
      <div class="button-container">
        <router-link to="/about" class="button-link">More about me</router-link>
      </div>
    </b-col>

    <b-col cols="12" lg="5" class="picture-container">
      <img
        class="picture"
        src="@/assets/img/selfie-3.webp"
        width="1080"
        height="1440"
        loading="lazy"
        alt=""
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.content {
  margin: 0 auto;
  margin-bottom: 5rem;

  .title {
    margin-bottom: 1rem;
    @include underline-permanent($purple);
  }

  .button-container {
    margin: 2rem 0;

    .button-link {
      @include button($purple);
    }
  }

  .picture-container {
    display: flex;
    justify-content: center;

    .picture {
      @include hard-boxshadow($dark, 5px, 5px);
      border: none;
      width: 80%;
      height: auto;
    }
  }

  @media screen and (max-width: 767px) {
    .picture-container {
      justify-content: flex-start;
    }
  }
}
</style>
