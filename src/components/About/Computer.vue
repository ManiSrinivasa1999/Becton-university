<template>
  <div class="computer">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="10">
          <v-row
            v-if="$vuetify.breakpoint.mdAndDown"
            class="fill-height pa-0 ma-0"
            align="center"
            justify="center"
          >
            <v-col cols="12" md="6">
              <v-img src="@/assets/computer.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-h5 font-weight-bold ml-4 mt-4">
                WILL YOU NEED A COMPUTER?
              </div>
              <br />
              <p class="ml-4 text-subtitle">
                You’ll need a computer for regular and reliable access to the
                internet so that you can have easy communication with your
                personal supervisor. Having an email is essential as it is your
                means of communicating with your supervisor and so that we can
                send you important information relevant to your studies.
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
              <div class="text-h5 font-weight-bold ml-4 mt-4">
                WILL YOU NEED A COMPUTER?
              </div>
              <br />
              <p class="ml-4 text-subtitle">
                You’ll need a computer for regular and reliable access to the
                internet so that you can have easy communication with your
                personal supervisor. Having an email is essential as it is your
                means of communicating with your supervisor and so that we can
                send you important information relevant to your studies.
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img src="@/assets/computer.jpg"></v-img>
            </v-col>
          </v-row>
          <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
            <v-col cols="12" md="6">
              <v-img src="@/assets/assignments-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-h5 font-weight-bold ml-4 mb-4 pd-4">
                ASSIGNMENTS & EXAMINATIONS
              </div>
              <p class="ml-4 text-subtitle">
                An assignment is a piece of written work or answers to a set of
                questions, covering material from your module. Completing
                assignments helps you to consolidate and use what you have
                learned. All assignments are sent directly to your tutor for
                appraisal and grading.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Computer',
};
</script>

<style lang="scss" scoped></style>
