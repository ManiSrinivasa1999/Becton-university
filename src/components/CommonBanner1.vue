<template>
  <div class="common-banner">
     <v-row class="mx-0 screen1 white--text">
        <v-col
          class="d-flex flex-column justify-center align-center"
          id="screen1-content"
          cols="12"
          sm="12"
        >
          <h1 class="display-1 font-weight-bold mt-16 pt-md-12 mb-1 text-center">
            {{ pageHeading }}
          </h1>
          <div
            class="d-flex flex-row text-center"
            v-if="Boolean(caption) === true"
          >
            <a href="/" class="white--text home-ref mr-2">
              Home ->
            </a>
            <p class="text-center my-auto" color="white">{{ caption }}</p>
          </div>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: 'CommonBanner1',
  props: {
    pageHeading: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
  },
};
</script>

<style lang="scss">

.screen1 {
  background-size: cover;
  background-position: center;
}

#screen1-content {
  min-height: 35vh;
  background-color: rgba(black, 0.5);
  z-index: 2;
}

.home-ref {
  text-transform: none;
  text-decoration: none;
}
</style>
