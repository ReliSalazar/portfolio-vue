<template>
  <b-row class="card-container">
    <b-col cols="12" lg="4" class="picture-container">
      <img
        class="picture"
        src="@/assets/img/selfie-1.webp"
        width="1152"
        height="2048"
        loading="lazy"
        alt=""
      />
    </b-col>
    <b-col cols="12" lg="8" class="data">
      <h1 class="title">Reli Salazar</h1>
      <p class="subtitle bg-purple">Web developer</p>
      <b-row class="contact">
        <b-col cols="12" md="4" class="category">
          <strong class="bg-blue">Age:</strong>
        </b-col>
        <b-col cols="12" md="8">
          <p>25</p>
        </b-col>

        <b-col cols="12" md="4" class="category">
          <strong class="bg-red">Nationality:</strong>
        </b-col>
        <b-col cols="12" md="8">
          <p>Mexican</p>
        </b-col>

        <b-col cols="12" md="4" class="category">
          <strong class="bg-purple">Github:</strong>
        </b-col>
        <b-col cols="12" md="8">
          <p>
            <a href="https://github.com/ReliSalazar">Reli Salazar</a>
          </p>
        </b-col>

        <b-col cols="12" md="4" class="category">
          <strong class="bg-yellow">Email:</strong>
        </b-col>
        <b-col cols="12" md="8">
          <p>
            <a href="mailto:naitvenefy@gmail.com">naitvenefy@gmail.com</a>
          </p>
        </b-col>

        <b-col cols="12" md="4" class="category">
          <strong class="bg-green">Linkedin:</strong>
        </b-col>
        <b-col cols="12" md="8">
          <p>
            <a href="https://www.linkedin.com/in/reli-salazar-574b88213/">
              reli-salazar-574b88213
            </a>
          </p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "card",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.card-container {
  background-color: $white;
  @include hard-boxshadow($dark, 5px, 5px);
  padding: 2rem;
  margin: 0 5rem;
  margin-top: -15rem;

  .picture-container {
    display: flex;
    justify-content: center;

    .picture {
      @include hard-boxshadow($dark, 5px, 5px);
      border: none;
      width: 12rem;
      height: auto;
      margin-bottom: 2rem;
    }
  }

  .data {
    .title {
      font-size: 3rem;
      padding-left: 1rem;
    }
    .subtitle {
      font-size: 2rem;
      padding-left: 1rem;
      color: $white;
    }

    .contact {
      border-top: 1px solid #ccc;
      margin-top: 2rem;
      padding-top: 1rem;

      .category {
        strong {
          padding: 0.3rem 0.5rem;
          color: $white;
        }
      }

      a {
        color: inherit;
        text-decoration: none;
        @include underline-permanent(#ccc, $blue, 2px);
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .card-container {
    margin: 0 2rem;
    margin-top: -15rem;
  }
}

@media screen and (max-width: 575px) {
  .card-container {
    margin: 0 auto;
    margin-top: -15rem;
  }
}
</style>
