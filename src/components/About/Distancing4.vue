<template>
  <div class="distancing">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="10">
          <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
            <v-col cols="12" md="6">
              <v-img src="@/assets/distance-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="font-weight-bold ml-4 mt-4" :class="heading">
                WHY DISTANCE LEARNING?
              </div>
              <br />
              <p class="ml-4">
                Very few people can afford to give up work to start studying,
                and with university fees at an all-time high, learning via
                traditional methods is beyond reach for many.<br /><br />
                This exciting alternative in higher education holds for you the
                promise of professional and personal growth without any limits
                or boundaries.
              </p>
            </v-col>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.mdAndDown"
            class="fill-height pa-0 ma-0"
            align="center"
            justify="center"
          >
            <v-col cols="12" md="6">
              <v-img src="@/assets/bu-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="7">
              <div class="font-weight-bold ml-4" :class="heading">
                BECTON UNIVERSITY
              </div>
              <p class="ml-4 text-subtitle">
                Becton University, the international distance learning centre,
                which was subsequently incorporated as an independent Online and
                Distance Learning University in Delaware, America.<br /><br />
                Becton University is a private international institution.
                American British Graduate University Online is specialized in
                Distance Learning education our international learning arm is
                London College of Media (www.londoncollegeofmedia.com).<br /><br />
                Distance learning is rapidly becoming the preferred alternative,
                and Becton University has quickly become established as one of
                the pioneers in the field.
              </p>
            </v-col>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.lgAndUp"
            class="fill-height pa-0 ma-0"
            align="center"
            justify="center"
          >
            <v-col cols="12" md="6">
              <div class="font-weight-bold ml-4 mb-4" :class="heading">
                BECTON UNIVERSITY
              </div>
              <p class="ml-4 text-subtitle">
                Becton University, the international distance learning centre,
                which was subsequently incorporated as an independent Online and
                Distance Learning University in Delaware, America.<br /><br />
                Becton University is a private international institution.
                American British Graduate University Online is specialized in
                Distance Learning education our international learning arm is
                London College of Media (www.londoncollegeofmedia.com).<br /><br />
                Distance learning is rapidly becoming the preferred alternative,
                and Becton University has quickly become established as one of
                the pioneers in the field.
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img src="@/assets/bu-compressed.jpg"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Distancing4',
  data() {
    return {
      heading: 'text-h5',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
