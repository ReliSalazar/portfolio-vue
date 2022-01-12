<template>
  <b-container class="about fade-in">
    <entry title="Milkytracker Technical Documentation Page">
      <template>
        <paragraph>
          <p>
            This is one of the projects I did for the freecodecamp responsive
            web design certification.
          </p>
        </paragraph>

        <paragraph>
          <div class="img-container">
            <img
              src="@/assets/img/portfolio/portfolio-details-04.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            I opted to make a page with the milkyTracker documentation since the
            official one seems somewhat ugly to me, although I never finished
            writing the entire documentation. One of these days I will, I
            promise!
          </p>
        </paragraph>

        <note>
          <p>
            MilkyTracker it's a really cool tool for chiptune music, if you want
            to make this kind of music, you should check it out!
          </p>
        </note>

        <paragraph>
          <p>
            If you want, you can take a look at the code in
            <a href="https://codepen.io/Reli_/full/mdVJmqw">code pen.</a>
          </p>
        </paragraph>
      </template>
    </entry>
  </b-container>
</template>

<script>
import entry from "@/components/entry.vue";
import paragraph from "@/components/paragraph.vue";
import note from "@/components/note.vue";

export default {
  name: "portfolio-entry-4",
  title() {
    return `MilkyTracker Documentation`;
  },
  components: {
    entry,
    paragraph,
    note,
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
