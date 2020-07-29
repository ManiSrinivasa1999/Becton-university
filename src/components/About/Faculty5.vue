<template>
  <div class="faculty">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" lg="10" xl="10" md="12" sm="10">
          <v-row class="fill-height pa-0 ma-0">
            <v-col cols="12" md="6">
              <v-img eager src="@/assets/faculty2.jpg" height="350px"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="font-weight-bold  mt-2" :class="heading">
                FACULTY
              </div>
              <br />
              <p>
                The College‘s academic staff are highly qualified and experienced.
                They are accustomed to working with executives, managers and consultants
                employed in both the private and public sectors.
                <br />
                <br />
                This exciting alternative in higher education holds for you the promise
                of professional and personal growth without any limits or boundaries.
                <br /><br />
                The classrooms at BC are modern, spacious, well lit and impressive
                with all the latest technology. You’ll feel warmth with our staff and tutors,
                who are all friendly and welcoming.<br /> <br />
                Beckton College makes sure that all students feel at home in
                the multi-cultural and multi-lingual atmosphere provided by the College.
              </p>
            </v-col>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.smAndDown"
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col cols="12" md="6">
              <v-img eager src="@/assets/faculty-compressed.jpg" contain></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="font-weight-bold" :class="heading">
                AFFILIATES
              </div>
              <p class="text-subtitle">
                Beckton College, the international distance learning centre,
                which was subsequently incorporated as an independent Online and
                Distance Learning College in Delaware, America.<br /><br />
                Beckton College is a private international institution.
                American British Graduate College Online is specialized in
                Distance Learning education our international learning arm is
                London College of Media (www.londoncollegeofmedia.com).<br /><br />
                Distance learning is rapidly becoming the preferred alternative,
                and Beckton College has quickly become established as one of
                the pioneers in the field.
              </p>
            </v-col>
          </v-row>
          <v-row
            v-if="$vuetify.breakpoint.mdAndUp"
            class="fill-height pa-0 mt-8"
          >
            <v-col cols="12" md="6">
              <div class="font-weight-bold  mb-4" :class="heading">
                AFFILIATES
              </div>
              <p class="text-subtitle">
                Affiliates are at the centre of our educational formula.
                Most of the degree programs offered are taught by our affiliates.
                To give but one example, as soon as an enquiry is received at the College
                it is passed on to the relevant affiliate in the applicant’s country. Affiliates’
                study programs are based on the College’s recommended curricula.
                Affiliates operate under the auspices of their region’s head office.
                <br /><br />
                Beckton College is a private international institution.
                Beckton College Online is specialized in Distance Learning
                education our international learning arm is London College of Media
                (www.londoncollegeofmedia.com).
                <br /><br />
                Beckton College Online is licensed by E-Learning
                International LLC (California).
              </p>
            </v-col>
            <v-col cols="12" md="3">
              <v-img eager src="@/assets/faculty-compressed.jpg" contain></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Faculty5',
  data() {
    return {
      heading: 'text-h5',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
