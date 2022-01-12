<template>
  <b-container class="about fade-in">
    <entry title="More about me">
      <template>
        <paragraph>
          <p>
            Hello, my real name is Kevin Enrique Loera Salazar, I am currently
            25 years old and I am from Mexico.
          </p>
        </paragraph>

        <paragraph>
          <p>
            Since I can remember, I have always had a great afinity for
            computers, even my mother often tells me that I wanted to create
            robots and she talked about it all the time.
          </p>
        </paragraph>

        <paragraph>
          <p>
            My first contact with software development was more or less in 2014,
            I tried to do a video game programming course with Unity using
            monodevelop and C#, but honestly it was too difficult, today I know
            that it is one of the most complex areas in the software
            development, but the good side is that the experience only gave me
            determination to start something simpler.
          </p>
        </paragraph>

        <paragraph>
          <p>
            shortly after I started learning C++ with the book
            <a
              href="https://www.amazon.com/Primer-5th-Stanley-B-Lippman/dp/0321714113"
            >
              C++ Primer Fifth Edition.
            </a>
            What I like most about software development is the feeling of
            creating things from nothing, it is almost magical, you write a
            spell and something appears that a few hours ago did not exist and
            with which you can interact, and above all, it solves a problem.
          </p>
        </paragraph>

        <note>
          <p>
            This isn't actually the first book I read about programming, but
            it's the most important for me.
          </p>
        </note>

        <paragraph>
          <p>
            Over time I also learned other technologies such as Python, GoLang,
            C#, HTML, JS, React, Vue, TypeScript, PHP and Laravel. Although I
            have also tried other things such as video game development with the
            GML or Python using Godot, or development for Arduino with C.
          </p>
        </paragraph>

        <paragraph>
          <p>
            I also plan not only to finish the Python course that I currently
            have on
            <a href="https://www.youtube.com/channel/UC8t-pZwHzsWNuFxv8lZGc7Q">
              my Youtube channel,
            </a>
            but to do more courses, as well as a podcast on different topics.
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
  name: "About",
  title() {
    return `More about me`;
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
@import "@/assets/scss/variables.scss";

.about {
  margin-top: 5rem;
  margin-bottom: 5rem;
  flex-basis: 100%;
  flex: auto;
}
</style>
