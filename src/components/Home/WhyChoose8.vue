<template>
  <div class="why-choose">
    <v-container>
      <div class="align-center justify-center d-flex flex-column pa-0 ma-0">
        <span class="text-h4 pa-4 ma-4 font-weight-bold text-center">
          WHY CHOOSE
        </span>
      </div>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="10">
          <v-row
            v-if="$vuetify.breakpoint.mdAndDown"
            class="fill-height d-flex flex-sm-column-reverse pa-0 ma-0"
            align="center"
            justify="center"
          >
            <v-col cols="12" md="6">
              <v-img src="../../assets/whychoose.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-h5 font-weight-bold pa-4">
                RESEARCH AND TEACHING
              </div>
              <p class="pa-2 pl-4">
                The University‘s academic staff are highly qualified and
                experienced. They are accustomed to working with executives,
                managers and consultants employed in both the private and public
                sectors.
              </p>
              <div class="text-h5 font-weight-bold pa-4">
                CAREERS & OFFERS
              </div>
              <p class="pa-2 pl-4">
                This exciting alternative in higher education holds for you the
                promise of professional and personal growth without any limits
                or boundaries.
              </p>
            </v-col>
          </v-row>
          <v-row
            v-else-if="$vuetify.breakpoint.lgAndUp"
            class="fill-height pa-0 ma-0"
          >
            <v-col cols="12" md="6">
              <div class="text-h5 font-weight-bold pa-4">
                RESEARCH AND TEACHING
              </div>
              <p class="pa-2 pl-4 subtitle">
                The University‘s academic staff are highly qualified and
                experienced. They are accustomed to working with executives,
                managers and consultants employed in both the private and public
                sectors.
              </p>
              <div class="text-h5 font-weight-bold pa-4">
                CAREERS & OFFERS
              </div>
              <p class="pa-2 pl-4 subtitle">
                This exciting alternative in higher education holds for you the
                promise of professional and personal growth without any limits
                or boundaries.
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img src="../../assets/whychoose.jpg"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'WhyChoose8',
};
</script>

<style lang="scss" scoped>

</style>
