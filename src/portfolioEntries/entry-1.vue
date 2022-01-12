<template>
  <b-container class="about fade-in">
    <entry title="React Hooks Theremmin">
      <template>
        <paragraph>
          <p>
            Music is one of my great passions. I have a wacom tablet to draw in
            digital format, and one day it occurred to me that I could use the
            surface of it to play a theremin, remembering a similar project that
            I saw a couple of years before, so I decided to create my own
            theremin.
          </p>
        </paragraph>

        <paragraph>
          <div class="img-container">
            <img
              src="@/assets/img/portfolio/portfolio-details-01.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            For this project I use ReactJs and ReactDOM, I also use
            styled-components, styled-reset and tone. I had wanted to try styled
            components for a long time and it was really nice! also, tone made
            it very easy for me to work with the sound ranges and create the
            wave itself!
          </p>
        </paragraph>

        <paragraph>
          <p>
            If you want, you can take a look at the code in the
            <a href="https://github.com/ReliSalazar/theremin">
              github reposotory
            </a>
            or you can use the theremin itself in the
            <a href="https://relisalazar.github.io/theremin/">
              github pages link.
            </a>
          </p>
        </paragraph>
      </template>
    </entry>
  </b-container>
</template>

<script>
import entry from "@/components/entry.vue";
import paragraph from "@/components/paragraph.vue";

export default {
  name: "portfolio-entry-1",
  title() {
    return `React Hooks Theremmin`;
  },
  components: {
    entry,
    paragraph,
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

.about {
  margin-top: 5rem;
  margin-bottom: 5rem;
  flex-basis: 100%;
  flex: auto;
}
</style>
