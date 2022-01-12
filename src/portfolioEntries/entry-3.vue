<template>
  <b-container class="about fade-in">
    <entry title="My Old Code Blog Lambda Lain">
      <template>
        <paragraph>
          <p>
            I'm really really proud of this project. It was the first "real"
            website I ever made. I had hardly any knowledge, just loose things
            and I had seen from time to time and after a streak of 11 hours of
            continous work I was able to finish code it. It has many design
            issues that I discover after learning responsive and web development
            in general, but I want to leave it as is, as a reminder of where I
            started.
          </p>
        </paragraph>

        <note>
          <p>
            Actually, 11 hours of works is very normal for me, especially on my
            own projects, but in that time, that was very impresive for me.
          </p>
        </note>

        <paragraph>
          <div class="img-container">
            <img
              src="@/assets/img/portfolio/portfolio-details-03.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            This page started with the idea of write a blog about what I learned
            and what I reflect about technology, as well as a series of
            programming couyrses that I planned from start to finish, although
            the format quickly fell short and I decided to move this idea to my
            youtube channel that you can also find in the portfolio or the
            footer.
          </p>
        </paragraph>

        <paragraph>
          <p>
            If you want, you can take a look at the code in the
            <a href="https://github.com/ReliSalazar/Lambda_Lain">
              github reposotory
            </a>
            or you can use the theremin itself in the
            <a href="https://relisalazar.github.io/Lambda_Lain/">
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
import note from "@/components/note.vue";

export default {
  name: "portfolio-entry-3",
  title() {
    return `Lambda Lain`;
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
