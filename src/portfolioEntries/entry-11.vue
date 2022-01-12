<template>
  <b-container class="about fade-in">
    <entry title="TUI Email Client">
      <template>
        <paragraph>
          <p>
            This is a small project for my Python course on youtube. It can
            receive emails, and the idea is that in the future it can send them
            too.
          </p>
        </paragraph>

        <paragraph>
          <div class="img-container">
            <img
              src="@/assets/img/portfolio/portfolio-details-11.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            I was preparing future projects for the Python programming course
            that I do on youtube. The idea was to work with libraries to send
            emails to understand the three most popular protocols for this task,
            and little by little, one thing led to another.
          </p>
        </paragraph>

        <paragraph>
          <p>
            I ended up creating a couple of scripts, one to send emails with an
            image attached and one to receive unread email information from a
            given account. Then I decide to create a TUI, a Textual User
            Interface using npyscreen with some of its widgets, showing how to
            make modifications to them, obtain user input from them and process
            that information to show an output as well as alerts, etc.
          </p>
        </paragraph>

        <paragraph>
          <p>
            If you want, you can take a look at it, you can go to the
            <a href="https://github.com/ReliSalazar/TUI-Email-Client">
              github repository
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
  name: "portfolio-entry-11",
  title() {
    return `TUI Email Client`;
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
