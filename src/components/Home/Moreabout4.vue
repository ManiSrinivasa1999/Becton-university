<template>
  <div class="more-about">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="10">
          <v-row
            v-if="$vuetify.breakpoint.mdAndDown"
            class="fill-height d-flex flex-sm-column-reverse"
            align="center"
            justify="center"
          >
            <template>
              <v-col cols="12" md="6">
                <v-img src="@/assets/homebanner3-compressed.jpg" height="100%"></v-img>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-h5 font-weight-bold pa-4">
                  MORE ABOUT OUR UNIVERSITY
                </div>
                <p class="pa-2 pl-4">
                  Online and distance learning is the future of education. Even
                  though we live in a global village the concept of a becton
                  university – not rooted in a particular country – such as
                  Becton University – is occasionally misunderstood by the
                  dinosaurs of brick and mortar education especially in
                  countries where online education is still a novelty.
                </p>
                <p class="pa-2 pl-4">
                  Becton University's formula has proven a great success over
                  the years. It is efficient, student-oriented, and can be
                  transmitted from any computer terminal anywhere in the world.
                  That is why this formula is now being championed by numerous
                  online educational institutions around the world.
                </p>

                <v-btn x-large to="/about" color="success" class="ml-4">
                  More about Becton
                </v-btn>
              </v-col>
            </template>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.lgAndUp"
            class="fill-height"
          >
            <template>
              <v-col cols="12" md="6">
                <div class="text-h5 font-weight-bold pa-4">
                  MORE ABOUT OUR UNIVERSITY
                </div>
                <p class="pa-2 pl-4">
                  Online and distance learning is the future of education. Even
                  though we live in a global village the concept of a becton
                  university – not rooted in a particular country – such as
                  Becton University – is occasionally misunderstood by the
                  dinosaurs of brick and mortar education especially in
                  countries where online education is still a novelty.
                </p>
                <p class="pa-2 pl-4">
                  Becton University's formula has proven a great success over
                  the years. It is efficient, student-oriented, and can be
                  transmitted from any computer terminal anywhere in the world.
                  That is why this formula is now being championed by numerous
                  online educational institutions around the world.
                </p>

                <v-btn x-large to="/about" color="success" class="ml-4">
                  More about Becton
                </v-btn>
              </v-col>
              <v-col cols="12" md="6">
                <v-img src="@/assets/homebanner3-compressed.jpg" height="100%"></v-img>
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
