<template>
  <div class="faculty">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="10">
          <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
            <v-col cols="12" md="6">
              <v-img src="@/assets/faculty2.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="font-weight-bold ml-4 mt-4" :class="heading">
                FACULTY
              </div>
              <br />
              <p class="ml-4">
                The University‘s academic staff are highly qualified and experienced.
                They are accustomed to working with executives, managers and consultants
                employed in both the private and public sectors.
                <br />
                <br />
                This exciting alternative in higher education holds for you the promise
                of professional and personal growth without any limits or boundaries.
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
              <v-img src="@/assets/faculty.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="font-weight-bold ml-4" :class="heading">
                AFFILIATES
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
                AFFILIATES
              </div>
              <p class="ml-4 text-subtitle">
                Affiliates are at the centre of our educational formula.
                Most of the degree programs offered are taught by our affiliates.
                To give but one example, as soon as an enquiry is received at the university
                it is passed on to the relevant affiliate in the applicant’s country. Affiliates’
                study programs are based on the university’s recommended curricula.
                Affiliates operate under the auspices of their region’s head office.
                <br /><br />
                Becton Tamil University is a private international institution.
                Becton Tamil University Online is specialized in Distance Learning
                education our international learning arm is London College of Media
                (www.londoncollegeofmedia.com).
                <br /><br />
                Becton   Tamil University Online is licensed by E-Learning
                International LLC (California).
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img src="@/assets/faculty.jpg"></v-img>
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
