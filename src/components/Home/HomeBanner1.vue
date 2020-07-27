<template>
  <div class="home-banner">
    <v-row class="pa-0 ma-0">
      <v-col cols="12" class="pa-0 ma-0">
        <v-img src="../../assets/homebanner-1.jpg" height="80vh" contain>
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

</style>
