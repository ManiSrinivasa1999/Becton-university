<template>
  <div class="home-banner">
    <v-row class="pa-0 ma-0 mt-lg-16">
      <v-col cols="12" class="pa-0 ma-0 mt-5">
        <v-carousel
          cycle
          height="80vh"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-overlay absolute opacity="0.6">
              <v-row class="pb-0" app>
                <v-col cols="12" sm="12" class="text-center">
                  <div class="text-h3 text-center font-weight-bold mb-4">
                    Experimental & Experienced Learning
                  </div>
                  <div class="text-center">
                    <v-btn
                      class="ma-4 green"
                      text
                      color="white"
                      to="/about"
                    >
                      Read More
                    </v-btn>
                    <v-btn
                      class="ma-4 green"
                      text
                      color="white"
                      to="apply"
                    >
                      Apply Now
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-overlay>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  data() {
    return {
      items: [
        {
          // eslint-disable-next-line global-require
          src: require('../../assets/home-banner-3.jpg'),
        },
        {
          // eslint-disable-next-line global-require
          src: require('../../assets/home-banner-2.jpg'),
        },
        {
          // eslint-disable-next-line global-require
          src: require('../../assets/home-banner-1.jpg'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.v-overlay__content {
  min-width: 100vw !important;
}

.banner-width {
  max-width: 100vw !important;
}
</style>
