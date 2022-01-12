<template>
  <b-container class="about fade-in">
    <entry title="Flask Todoer">
      <template>
        <paragraph>
          <p>
            This was my first project working with Flask and MySQL and I think
            this is going well, it was a really interesting experience.
          </p>
        </paragraph>

        <paragraph>
          <div class="img-container">
            <img
              src="@/assets/img/portfolio/portfolio-details-12.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            I choise a todo-list because is the most common project to test
            stuff, and definitively I learnet a lot about MySQL with this, and
            my previous experience with MongoDB and ReactJS, maked this project
            really commfy to code, I did it in something like 10 hours in a row,
            and, I'm fine with the final result.
          </p>
        </paragraph>

        <paragraph>
          <p>
            I will make a lot of future changes to this, the CSS is the thing
            where I dedicated less time in this project, so, it's really bad
            right now, also, I think the connection to the database can be more
            secure, but that isn't a real big problem right now, because I don't
            plan to put it in a public server or something like that, It's just
            a test and for personal use.
          </p>
        </paragraph>

        <paragraph>
          <p>
            If you want, you can take a look at it, you can go to the
            <a href="https://github.com/ReliSalazar/flask-todoer">
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
  name: "portfolio-entry-12",
  title() {
    return `Flask Todoer`;
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
