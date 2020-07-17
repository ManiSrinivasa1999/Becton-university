<template>
  <div class="refund">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" justify="center" align="center">
        <v-col cols="10" md="10">
          <v-row class="pa-0 ma-0">
            <v-col cols="12" md="12" lg="6" xl="6">
              <v-img eager src="@/assets/refund-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="6">
              <div class="upper-case font-weight-bold text-h5">
                Withdrawal and Tuition Fee Refund Policy
              </div>
              <div class="text-subtitle mt-6 mb-4">
                A student who withdraws for legitimate reasons will be eligible
                for a refund of tuition fees already paid in accordance with the
                following schedule:
              </div>
              <v-divider></v-divider>
              <div class="text-title mb-6 mt-6">
                During the first week of enrollment 40%
              </div>
              <v-divider></v-divider>
              <div class="text-title mb-6 mt-6">
                During the second, third and fourth week of enrollment 25%
              </div>
              <v-divider></v-divider>
              <div class="text-title mb-6 mt-6">
                After the fourth week of enrollment 0%
              </div>
              <v-divider></v-divider>
              <div class="text-title mb-6 mt-6">
                Application fee non-refundable
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
  name: 'Refund',
};
</script>

<style lang="scss" scoped>

.upper-case {
  text-transform: uppercase;
}

</style>
