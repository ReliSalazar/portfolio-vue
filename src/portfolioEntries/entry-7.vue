<template>
  <b-container class="about fade-in">
    <entry title="Drumb Machine">
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
              src="@/assets/img/portfolio/portfolio-details-07.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            Yes, another project related to music. For this project I used
            ReactJS and actually was really fun the process of code it. I have
            nothing really special to say about this project, except that it was
            the first time that I made interactions with the keyboard, and I was
            beginning to test the aesthetics that now most of my personal
            projects has.
          </p>
        </paragraph>

        <paragraph>
          <p>
            If you want, you can take a look at the code in
            <a href="https://codepen.io/Reli_/full/OJMEajr">code pen.</a>
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
  name: "portfolio-entry-7",
  title() {
    return `Drumb Machine`;
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
