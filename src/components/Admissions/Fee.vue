<template>
  <div class="fees">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" justify="center" align="center">
        <v-col cols="10" md="10">
          <v-row class="pa-0 ma-0">
            <v-col cols="12" md="12" lg="6" xl="6">
              <v-img eager src="@/assets/fees-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="6">
              <div class="font-weight-bold text-h5 upper-case">
                Graduation Fee
              </div>
              <div class="text-subtitle mt-6 mb-6">
                $150.00 (payable on the issuance & notarization of degree &
                transcripts)
              </div>
              <div class="text-h6 mb-6 mt-6">
                The Becton University Studentship Award (BUSA)
              </div>
              <div class="text-title mb-6 mt-6">
                The Becton University offers a $1000 scholarship, off the total
                program fee to financially deserving, and academically qualified
                students from a number of national and international students:
                Applications for Becton University bursaries should be made upon
                receipt of an offer from the university. No award of a bursary
                will be considered until then. Students who pay the reduced fees
                are liable for their supervisor’s professional fees if said
                supervisor is chosen by the student and is not a member of the
                University’s Adjunct Faculty.
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Fee',
};
</script>

<style lang="scss" scoped>

.upper-case {
  text-transform: uppercase;
}

</style>
