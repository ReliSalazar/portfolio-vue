<template>
  <b-container class="blog fade-in">
    <b-row>
      <b-col cols="12" class="mb-3">
        <h2 class="title">Last entries</h2>
      </b-col>

      <b-col cols="12" class="mb-5">
        <b-row>
          <template v-for="(category, i) in categories">
            <b-col cols="2" :key="i" class="category-container">
              <div class="category" :class="'category-' + category.color"></div>
              <p>{{ category.name }}</p>
            </b-col>
          </template>
        </b-row>
      </b-col>

      <card
        routeLink="/blog/2"
        title="Idea Oriented Programming"
        titleClass="title-tech"
        background="post-01.webp"
        content="
          About 5 years ago, when I saw object-oriented programming for the
          first time, I realized a curious thing, and that is that it bears
          a strong resemblance to Plato's Theory of Ideas.
        "
      />

      <card
        routeLink="/blog/1"
        title="More about me"
        titleClass="title-personal"
        content="
          Hello, my real name is Kevin Enrique Loera Salazar, I am currently
          25 years old and I am from Mexico.
        "
      />
    </b-row>
  </b-container>
</template>

<script>
import card from "@/views/blogComponents/card.vue";

// tech: purple, personal: blue, philosophy: yellow,
const response = [
  {
    name: "technology",
    color: "purple",
  },
  {
    name: "personal",
    color: "blue",
  },
  {
    name: "philosophy",
    color: "yellow",
  },
  {
    name: "courses",
    color: "red",
  },
];

export default {
  name: "Blog",
  data() {
    return {
      categories: response,
    };
  },
  title() {
    return `Blog`;
  },
  mounted() {
    this.scrollToTop();
  },
  components: {
    card,
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

.blog {
  margin-top: 5rem;
  flex-basis: 100%;
  flex: auto;

  .title {
    @include underline-permanent($purple);
  }

  .category-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    .category {
      content: "";
      width: 2rem;
      height: 0.5rem;
    }
    .category-purple {
      background-color: $purple;
    }
    .category-blue {
      background-color: $blue;
    }
    .category-yellow {
      background-color: $yellow;
    }
    .category-red {
      background-color: $red;
    }

    p {
      margin: 0;
    }
  }
}
</style>
