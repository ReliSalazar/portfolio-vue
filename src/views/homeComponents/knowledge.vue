<template>
  <b-row class="content">
    <b-col cols="12">
      <h2 class="title">What I do</h2>
      <b-row class="cards-container">
        <b-col cols="12" md="12" lg="4" class="mb-5">
          <div class="card-element">
            <div class="card-title">
              <h2>Responsive web design</h2>
            </div>
            <p>
              Ensuring that the content of the web is accesible to everyone in a
              comfortable way regardless of the size of the device they use or
              if they have a disability is essential and is not an option. I use
              the knowledge gained with time as well as my own user experience
              to achieve this.
            </p>
          </div>
        </b-col>

        <b-col cols="12" md="12" lg="4" class="mb-5">
          <div class="card-element">
            <div class="card-title">
              <h2>Web development</h2>
            </div>
            <p>
              The best way to develop software is to do it in a declarative way,
              and start thinking directly about the end user of the content
              before anything else, and that is the reason why I have
              specialized in the Front-end working with Vue, React, Sass,
              Bootstrap, Tailwind and Typescript, and in the Back-end working
              with Laravel with PHP and Python with Django. This languages and
              frameworks are the perfect tools to achieve this goal.
            </p>
          </div>
        </b-col>

        <b-col cols="12" md="12" lg="4" class="mb-5">
          <div class="card-element">
            <div class="card-title">
              <h2>Programming courses and blogs</h2>
            </div>
            <p>
              What good is knowledge if it's not shared? Since I have learned
              almost everything I know from people who have shared their
              knowledge on the internet, I like to try to give back a little of
              everything they have given me and help others learn useful things
              about programming, as well as share the things that i learn over
              time, you should never stop learning!
            </p>
          </div>
        </b-col>

        <b-col cols="12" class="button-container">
          <router-link to="/portfolio" class="button-link">My work</router-link>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "knowledge",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.content {
  margin: 5rem auto;
  text-align: center;

  .title {
    margin-bottom: 2rem;
  }

  .cards-container {
    .card-element {
      @include hard-boxshadow($dark);
      padding: 2rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      height: 100%;

      .card-title {
        height: 4rem;
        margin-bottom: 2rem;
        @include underline-permanent($purple);
        display: flex;
        justify-content: center;
        align-items: flex-end;

        h2 {
          font-size: 1.5rem;
        }
      }
    }

    .button-container .button-link {
      @include button($purple);
    }
  }
}

@media screen and (max-width: 991px) {
  .content .cards-container .card-element {
    @include hard-boxshadow($dark, 8px, 8px);
  }
}
</style>
