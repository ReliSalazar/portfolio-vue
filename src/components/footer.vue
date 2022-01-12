<template>
  <b-container class="footer-container" fluid>
    <footer class="footer">
      <b-row>
        <b-col cols="12">
          <h2 class="title">Contact</h2>
        </b-col>
        <b-col cols="12" class="mt-3">
          <p>If you can imagine it, you can code it.</p>
        </b-col>
        <b-col cols="12" md="10" lg="8" xl="6" class="mt-3">
          <b-row>
            <b-col cols="12" md="4" class="link-container mb-5">
              <div class="box purple-box">
                <a class="link" href="https://github.com/ReliSalazar">
                  Github
                </a>
              </div>
            </b-col>
            <b-col cols="12" md="4" class="link-container mb-5">
              <div class="box blue-box">
                <a class="link" href="https://twitter.com/reli_salazar">
                  Twitter
                </a>
              </div>
            </b-col>
            <b-col cols="12" md="4" class="link-container mb-5">
              <div class="box red-box">
                <a
                  class="link"
                  href="https://www.youtube.com/channel/UC8t-pZwHzsWNuFxv8lZGc7Q"
                >
                  Youtube
                </a>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </footer>
  </b-container>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.footer-container {
  background-color: $dark;
  color: $white;
  padding: 2rem;
  padding-bottom: 0;

  .footer {
    .title {
      @include underline-permanent($purple);
    }

    .link-container {
      .link {
        color: inherit;
        text-decoration: none;
        width: 100%;
        text-align: center;
        padding: 0.5rem 3rem;
      }
      .purple-box {
        @include button($purple);
      }
      .blue-box {
        @include button($blue);
      }
      .red-box {
        @include button($red);
      }
      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
      }
    }
  }
}
</style>
