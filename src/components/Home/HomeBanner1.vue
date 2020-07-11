<template>
  <div class="home-banner bg-img">
    <v-container v-if="$vuetify.breakpoint.smAndDown">
      <v-row justify="center">
        <v-col cols="9">
          <div class="text-h4 text-center font-weight-bold mb-4">
            Experimental & Experienced Learning
          </div>
          <div class="text-center">
            <v-btn
              class="ma-4 green"
              text
              color="white"
            >
              Read More
            </v-btn>
            <v-btn
              class="ma-4 green"
              text
              color="white"
            >
              Apply Now
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else-if="$vuetify.breakpoint.mdAndUp">
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="6" md="6">
          <div class="text-h3 text-center font-weight-bold mb-8">
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
              to="/apply"
            >
              Apply Now
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
};
</script>

<style lang="scss" scoped>
.bg-img {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/homebanner-1.jpg');
  background-size: cover;
  background-position: center;
  color: white;
}

</style>
