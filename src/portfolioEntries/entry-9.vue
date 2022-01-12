<template>
  <b-container class="about fade-in">
    <entry title="Youtube Channel">
      <template>
        <paragraph>
          <p>
            This Youtube channel started as a content for my Lambda Lain
            project, programming courses and blogs about technology, but in the
            end for convenience and visibility I ended up converting the content
            to a video format.
          </p>
        </paragraph>

        <paragraph>
          <div class="img-container">
            <img
              src="@/assets/img/portfolio/portfolio-details-09.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            This channel has only content in Spanish, and the content consist of
            my original music, programming courses, vlogs and podcast.
          </p>
        </paragraph>

        <paragraph>
          <p>
            If you want, you can take a look at the
            <a href="https://www.youtube.com/channel/UC8t-pZwHzsWNuFxv8lZGc7Q">
              youtube channel
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
  name: "portfolio-entry-9",
  title() {
    return `Youtube Channel`;
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
