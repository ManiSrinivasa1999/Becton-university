<template>
  <div class="why-choose">
    <v-container>
      <div class="align-center justify-center d-flex flex-column pa-0 ma-0">
        <span class="text-h4 pa-4 ma-4 font-weight-bold text-center">
          WHY CHOOSE
        </span>
      </div>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="12" sm="10" lg="10">
          <v-row
            v-if="$vuetify.breakpoint.smAndDown"
            class="fill-height d-flex"
          >
            <v-col cols="12" md="6">
              <v-img eager src="../../assets/whychoose.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-h5 font-weight-bold pl-4">
                <b>The College’s mission is to be open to people, places, methods and ideas.</b>
              </div>
              <p class="pa-2 pl-4 subtitle">
                <br />
                Nearly all of our courses have no formal entry requirements,
                either prior qualifications or experience. We allow people who
                have missed out on education to fulfil their potential and achieve
                qualification that will see them succeed forward in their career.
              </p>
              <p class="pa-2 pl-4 subtitle">
                We believe that it is the qualifications and practical experience
                with which our students leave, rather than those with which they enter,
                that count…..<br /><br />
                We have students of all ages and backgrounds including overseas: school
                leavers who choose to begin their careers while they study, people wanting
                to develop or update their skills, or change career entirely, and retired people
                wanting to explore new interests and keep mentally active.
              </p>
            </v-col>
          </v-row>
          <v-row
            v-else-if="$vuetify.breakpoint.mdAndUp"
            class="fill-height pa-0 ma-0"
          >
            <v-col cols="12" md="6">
              <div class="text-h5 font-weight-bold pl-4">
                <b>The College’s mission is to be open to people, places, methods and ideas.</b>
              </div>
              <p class="pa-2 pl-4 subtitle">
                <br />
                Nearly all of our courses have no formal entry requirements,
                either prior qualifications or experience. We allow people who
                have missed out on education to fulfil their potential and achieve
                qualification that will see them succeed forward in their career.
              </p>
              <p class="pa-2 pl-4 subtitle">
                We believe that it is the qualifications and practical experience
                with which our students leave, rather than those with which they enter,
                that count…..<br /><br />
                We have students of all ages and backgrounds including overseas: school
                leavers who choose to begin their careers while they study, people wanting
                to develop or update their skills, or change career entirely, and retired people
                wanting to explore new interests and keep mentally active.
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img eager src="../../assets/whychoose.jpg" height="350px"></v-img>
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
