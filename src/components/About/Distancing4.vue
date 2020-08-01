<template>
  <div class="distancing">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" lg="12" xl="10" sm="10" md="12">
          <v-row class="fill-height pa-0 mt-16" align="center" justify="center">
            <v-col cols="12" md="4">
              <v-img eager src="@/assets/distance.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="8">
              <div class="font-weight-bold" :class="heading">
                BRITISH VALUES
              </div>
              <br />
              <p class="font-weight-bold">
                We prepare our students for life in modern Britain by developing
                an understanding of democracy.
              </p>
              <p>
                We prepare our students for life in modern Britain by developing an
                understanding of democracy, the rule of law, individual liberty, mutual
                respect and tolerance of those with different faiths and beliefs. We are
                dedicated to promoting these values which ensure that our students develop
                a strong sense of social and moral responsibility. British values underpin our
                Beckton College structures and are promoted through the
                tutorial programme, the curriculum, and our enrichment activities. All
                students will have the opportunity to discuss British values and how these
                apply to college life and modern Britain. All students will have the opportunity
                on progressing from Beckton College to reflect on how the college
                has prepared them for life in modern Britain. Our students have produced their own
                version of the ‘Mannequin Challenge’ dedicated to promoting .
              </p>
            </v-col>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.smAndDown"
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col cols="12">
              <v-img eager src="@/assets/bu-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12">
              <div class="font-weight-bold" :class="heading">
                OUR MISSION
              </div>
              <br />
              <p class="font-weight-bold">
                Our Mission to educate global leaders who create sustainable prosperity worldwide.
              </p>
              <p class="text-subtitle">
                We are absolutely focused on improving the student experience We have
                high expectations for students and a commitment to excellence We set high
                professional standards for all staff We are constantly seeking to improve
                We all work, as a team, for the success of the beckton college
                national and international community We expect everyone to be reliable and
                positive and to act in accordance with beckton college principles
                and procedures We respect, value and care for all members of national
                and international
                We value equality, diversity and inclusivity and treat people with
                respect and fairness
                We recognise and value everyone’s contribution to beckton college
                We respond to student and staff feedback in order to improve college life .
              </p>
            </v-col>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.mdAndUp"
            class="fill-height pa-0 mt-16"
          >
            <v-col cols="12" md="8">
              <div class="font-weight-bold" :class="heading">
                OUR MISSION
              </div>
              <br />
              <p class="font-weight-bold">
                Our Mission to educate global leaders who create sustainable prosperity worldwide.
              </p>
              <p class="text-subtitle">
                We are absolutely focused on improving the student experience We have
                high expectations for students and a commitment to excellence We set high
                professional standards for all staff We are constantly seeking to improve
                We all work, as a team, for the success of the beckton college
                national and international community We expect everyone to be reliable and
                positive and to act in accordance with beckton college principles
                and procedures We respect, value and care for all members of national
                and international
                We value equality, diversity and inclusivity and treat people with
                respect and fairness
                We recognise and value everyone’s contribution to beckton college
                We respond to student and staff feedback in order to improve college life .
              </p>
            </v-col>
            <v-col cols="12" md="4">
              <v-img eager src="@/assets/bu-compressed.jpg" height="330px"></v-img>
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
