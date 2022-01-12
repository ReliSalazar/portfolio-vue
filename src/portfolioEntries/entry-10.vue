<template>
  <b-container class="about fade-in">
    <entry title="My art">
      <template>
        <paragraph>
          <p>
            I really, really love to draw, is one of my favorite things to do.
            The problem with drawing is that it can be expensive and slow, but
            since I made an investment to be able to draw directly in digital
            with a tablet, my productivity has incresed a lot.
          </p>
        </paragraph>

        <paragraph>
          <div class="img-container">
            <img
              src="@/assets/img/portfolio/portfolio-details-10.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            Whenever I have spent too much time studying computer science and I
            am not especially inspired to write music, I draw. It's a fairly
            comfortable exercise, as well as being a very good tool to be able
            to explain things, as well as to be able to make plans for the
            interfaces quickly and comfortably.
          </p>
        </paragraph>

        <paragraph>
          <p>
            If you want, you can take a look at my art at my
            <a href="https://relisalazar.tumblr.com/">tumblr page</a> or my
            <a href="https://twitter.com/reli_salazar">twitter account</a>
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
  name: "portfolio-entry-10",
  title() {
    return `My art`;
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
