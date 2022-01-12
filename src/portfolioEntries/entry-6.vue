<template>
  <b-container class="about fade-in">
    <entry title="Markdown Previewer">
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
              src="@/assets/img/portfolio/portfolio-details-06.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            This is one of my favorite projects, although I admit it's a bit
            ugly, that doesn't make it any less fun to use!
          </p>
        </paragraph>

        <paragraph>
          <p>
            For this project I used ReactJs and marked for the markdown stuff. I
            was learned how to use markdown with this project too!
          </p>
        </paragraph>

        <paragraph>
          <p>
            If you want, you can take a look at the code in
            <a href="https://codepen.io/Reli_/full/QWyxvaZ">code pen.</a>
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
  name: "portfolio-entry-6",
  title() {
    return `Markdown Previewer`;
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
