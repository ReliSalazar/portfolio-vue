<template>
  <b-container class="about fade-in">
    <entry title="Secure Password Validator And Generator">
      <template>
        <paragraph>
          <p>
            This is just a curiosity that I did one day when I was bored, I was
            learning about regular expressions and I wanted to test if I was
            able to create a program that validates how secure a password is
            following a couple of conditions.
          </p>
        </paragraph>

        <paragraph>
          <div class="img-container">
            <img
              src="@/assets/img/portfolio/portfolio-details-02.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            The regex I used is the next:
            <strong>
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.\s]).{12,}$/
            </strong>
          </p>
        </paragraph>

        <paragraph>
          <p>
            It basically summarizes in at least 1 upper, 1 lower, 1 number, 1
            symbol and a min length of 12 and I just use vanilla HTML, CSS and
            JS to this project.
          </p>
        </paragraph>

        <paragraph>
          <p>
            If you want, you can take a look at the code in the
            <a
              href="https://github.com/ReliSalazar/secure-password-validator-and-generator"
            >
              github reposotory
            </a>
            or you can use the theremin itself in the
            <a
              href="https://relisalazar.github.io/secure-password-validator-and-generator/"
            >
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
  name: "portfolio-entry-2",
  title() {
    return `Secure Password Validator And Generator`;
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
