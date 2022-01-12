<template>
  <b-container class="about fade-in">
    <entry title="Random Quote Machine">
      <template>
        <paragraph>
          <p>
            This is one of the pojects I did for the freecodecamp fron end
            certification
          </p>
        </paragraph>

        <paragraph>
          <div class="img-container">
            <img
              src="@/assets/img/portfolio/portfolio-details-05.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            This is a simple as it sounds, a random quote generator, not much
            more. I use an objects array to get the quote and the author.
            Something to note is that it was the first time I used bootstrap, it
            was a very good experience!
          </p>
        </paragraph>

        <paragraph>
          <p>
            If you want, you can take a look at the code in
            <a href="https://codepen.io/Reli_/full/QWyrRBY">code pen.</a>
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
  name: "portfolio-entry-5",
  title() {
    return `Random Quote Machine`;
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
