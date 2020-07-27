<template>
  <div class="more-about">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="12" sm="10" lg="10">
          <v-row
            v-if="$vuetify.breakpoint.smAndDown"
            class="fill-height d-flex"
          >
            <template>
              <v-col cols="12" md="6">
                <v-img eager src="@/assets/homebanner3-compressed.jpg" height="100%"></v-img>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-h5 font-weight-bold pa-4">
                  MORE ABOUT OUR COLLEGE
                </div>
                <p class="pa-2 pl-4">
                  Online and distance learning is the future of education. Even
                  though we live in a global village the concept of a Beckton
                  College – not rooted in a particular country – such as
                  Beckton College – is occasionally misunderstood by the
                  dinosaurs of brick and mortar education especially in
                  countries where online education is still a novelty.
                </p>
                <p class="pa-2 pl-4">
                  Beckton College's formula has proven a great success over
                  the years. It is efficient, student-oriented, and can be
                  transmitted from any computer terminal anywhere in the world.
                  That is why this formula is now being championed by numerous
                  online educational institutions around the world.
                </p>

                <v-btn x-large to="/about" color="success" class="ml-4">
                  More about Beckton
                </v-btn>
              </v-col>
            </template>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.mdAndUp"
            class="fill-height"
          >
            <template>
              <v-col cols="12" md="6">
                <div class="text-h5 font-weight-bold pa-4">
                  MORE ABOUT OUR COLLEGE
                </div>
                <p class="pa-2 pl-4">
                  Beckton College is an education institute situated
                  in the hearts of West Midlands, we thrive our focus on providing
                  excellence career developments and continuing education. We are
                  committed to enriching the lives at all students and delivering a
                  wide range of high quality learning experiences.
                </p>
                <p class="pa-2 pl-4">
                  Beckton College organise yearly national and international media
                  and fine arts competitions. These competitions will improve the students’
                  confidence and encourage them to succeed.
                  <br />
                  On successful attainment students may gain access to Bachelors and
                  Master programs offered at our partnership colleges and Universities.
                </p>

                <v-btn x-large to="/about" color="success" class="ml-4">
                  More about Beckton
                </v-btn>
              </v-col>
              <v-col cols="12" md="6">
                <v-img eager src="@/assets/homebanner3-compressed.jpg" height="100%"></v-img>
              </v-col>
            </template>
          </v-row>
          <v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Moreabout4',
};
</script>

<style lang="scss" scoped>

</style>
