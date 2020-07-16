<template>
  <div class="payments">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" justify="center" align="center">
        <v-col cols="10" md="10">
          <v-row
            v-if="$vuetify.breakpoint.mdAndUp"
            class="pa-0 mt-16 flex-md-column-reverse flex-lg-row"
          >
            <v-col cols="12" md="12" lg="6" xl="6">
              <div class="font-weight-bold text-h5 upper-case">
                Advanced Payment Discount
              </div>
              <div class="text-subtitle mt-6 mb-6">
                Becton University offers a 20% discount off the total
                tuition/programme fees for students who choose to pay in full at
                the time of registration.
              </div>
              <div class="font-weight-bold text-h5 mt-16 upper-case">
                Second Degree Fees
              </div>
              <div class="text-subtitle mt-6 mb-6">
                Graduates of Becton University who register for a second degree
                at the University will benefit from the University’s 25%
                discount if programme fees are paid in full at the time of
                registration.
              </div>
            </v-col>
            <v-col cols="12" md="12" lg="6" xl="6">
              <v-img src="@/assets/payment-compressed.jpg"></v-img>
            </v-col>
          </v-row>
          <v-row v-if="$vuetify.breakpoint.smAndDown">
            <v-col cols="12" md="6">
              <v-img src="@/assets/payment-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="font-weight-bold text-h5 upper-case">
                Advanced Payment Discount
              </div>
              <div class="text-subtitle mt-6 mb-6">
                Becton University offers a 20% discount off the total
                tuition/programme fees for students who choose to pay in full at
                the time of registration.
              </div>
              <div class="font-weight-bold text-h5 mt-16 upper-case">
                Second Degree Fees
              </div>
              <div class="text-subtitle mt-6 mb-6">
                Graduates of Becton University who register for a second degree
                at the University will benefit from the University’s 25%
                discount if programme fees are paid in full at the time of
                registration.
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
  name: 'Payments',
};
</script>

<style lang="scss" scoped>

.upper-case {
  text-transform: uppercase;
}

</style>
