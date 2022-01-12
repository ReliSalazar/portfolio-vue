<template>
  <b-navbar toggleable="lg" fixed="top" class="navbar-container">
    <b-container>
      <b-navbar-brand>
        <router-link to="/" class="brand">
          &lt;<span>λ</span> Reli Slazar /&gt;
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item to="/portfolio">
            <router-link to="/portfolio">Portfolio</router-link>
          </b-nav-item>
          <b-nav-item to="/blog">
            <router-link to="/blog">Blog</router-link>
          </b-nav-item>
          <b-nav-item to="/about">
            <router-link to="/about">About me</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.navbar-container {
  background-color: $white;

  .container {
    .navbar-brand {
      .brand {
        font-size: 1.5rem;
        color: $dark !important;

        span {
          color: $blue;
        }
      }

      .brand:hover {
        text-decoration: none;
      }
    }

    .navbar-collapse .navbar-nav .nav-item {
      .nav-link {
        @include underline($purple, 2px);

        a {
          color: inherit;
          text-decoration: none;
          padding: 0.2rem 0.5rem;
        }

        .router-link-exact-active {
          background-color: $purple;
          color: $white;
        }
      }
    }
  }
}
</style>
