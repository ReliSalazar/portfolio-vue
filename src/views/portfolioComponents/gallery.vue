<template>
  <b-container class="gallery-container">
    <b-row>
      <card
        routeLink="/portfolio/12"
        imgSrc="portfolio-12.webp"
        title="Flask Todoer"
      />

      <card
        routeLink="/portfolio/11"
        imgSrc="portfolio-11.webp"
        title="TUI Email Client"
      />

      <card
        routeLink="/portfolio/10"
        imgSrc="portfolio-10.webp"
        title="My Art"
      />

      <card
        routeLink="/portfolio/9"
        imgSrc="portfolio-09.webp"
        title="Youtbe Channel"
        lazy
      />

      <card
        routeLink="/portfolio/8"
        imgSrc="portfolio-08.webp"
        title="Pomodoro Clock"
        lazy
      />

      <card
        routeLink="/portfolio/7"
        imgSrc="portfolio-07.webp"
        title="Drumb Machine"
        lazy
      />

      <card
        routeLink="/portfolio/6"
        imgSrc="portfolio-06.webp"
        title="Markdown Previewer"
        lazy
      />

      <card
        routeLink="/portfolio/5"
        imgSrc="portfolio-05.webp"
        title="Random Quote Machine"
        lazy
      />

      <card
        routeLink="/portfolio/4"
        imgSrc="portfolio-04.webp"
        title="Milkytracker Documentation"
        lazy
      />

      <card
        routeLink="/portfolio/3"
        imgSrc="portfolio-03.webp"
        title="Lambda Lain"
        lazy
      />

      <card
        routeLink="/portfolio/2"
        imgSrc="portfolio-02.webp"
        title="Secure Password Validator and Generator"
        lazy
      />

      <card
        routeLink="/portfolio/1"
        imgSrc="portfolio-01.webp"
        title="React Hooks Theremmin"
        lazy
      />
    </b-row>
  </b-container>
</template>

<script>
import card from "@/views/portfolioComponents/card.vue";

export default {
  name: "gallery",
  components: {
    card,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
