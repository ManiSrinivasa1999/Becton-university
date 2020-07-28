<template>
  <div class="home-banner">
    <v-row class="pa-0 ma-0 mt-lg-16">
      <v-col cols="12" class="pa-0 ma-0 mt-5">
        <div v-if="$vuetify.breakpoint.lgAndUp">
          <v-img src="../../assets/banner5.jpg" height="80vh" position="top top">
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
          </v-img>
        </div>
        <div v-else-if="$vuetify.breakpoint.mdAndDown">
          <v-img src="../../assets/banner5.jpg" height="80vh" position="top">
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
          </v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
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
