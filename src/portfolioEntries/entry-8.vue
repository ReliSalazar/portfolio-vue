<template>
  <b-container class="about fade-in">
    <entry title="Pomodoro clock">
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
              src="@/assets/img/portfolio/portfolio-details-08.webp"
              width="1920"
              height="973"
              loading="lazy"
              alt=""
            />
          </div>
        </paragraph>

        <paragraph>
          <p>
            I really like this project, I use it practically daily to be able to
            take breaks while I work, since I usually lose track of time
            completely, so this project helps me not to be in front of the
            computer all the time and to be able to rest my eyes.
          </p>
        </paragraph>

        <paragraph>
          <p>
            Althouf surely a better use would be for physical activity, in any
            case, you can choose the time you want for each sesion and rest!
          </p>
        </paragraph>

        <paragraph>
          <p>
            I was very happy when someone tellsme that, they used my pomodoro
            clock for their study sessions on a discord server, and then ask me
            if I could put buttons with pressets for their times, and surely I
            did it!
          </p>
        </paragraph>

        <paragraph>
          <p>
            If you want, you can take a look at the code in the
            <a href="https://github.com/ReliSalazar/pomodoro-clock">
              github repository
            </a>
            or you can use it by clicking in the
            <a href="https://relisalazar.github.io/pomodoro-clock/">
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
  name: "portfolio-entry-8",
  title() {
    return `Pomodoro Clock`;
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
