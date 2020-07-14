<template>
  <div class="schemes">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" justify="center" align="center">
        <v-col cols="10" md="10">
          <v-row v-if="$vuetify.breakpoint.lgAndUp" class="pa-0 mt-16">
            <v-col cols="12" md="6">
              <div class="text-h5 upper-case font-weight-bold">
                Installment schemes and Scholarships <br />(Terms & Conditions
                apply)
              </div>
              <div class="text-subtitle mt-6 mb-6">
                Programmme fee deposit & supervisor’s professional fees -
                Payable on acceptance of offer of a place & on appointment of
                supervisor
              </div>
              <v-divider></v-divider>
              <div class="text-title mb-6 mt-6">
                First Installment - Payable three months after registration
              </div>
              <v-divider></v-divider>
              <div class="text-title mb-6 mt-6">
                Second Installment - Payable six months after registration
              </div>
              <v-divider></v-divider>
              <div class="text-title mb-6 mt-6">
                Third Installment - Payable nine months after registration
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-img src="@/assets/scheme-compressed.jpg"></v-img>
            </v-col>
          </v-row>
          <v-row v-if="$vuetify.breakpoint.mdAndDown">
            <v-col cols="12" md="6">
              <v-img src="@/assets/scheme-compressed.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-h5 upper-case font-weight-bold">
                Installment schemes and Scholarships <br />(Terms & Conditions
                apply)
              </div>
              <div class="text-subtitle mt-6 mb-6">
                Programmme fee deposit & supervisor’s professional fees -
                Payable on acceptance of offer of a place & on appointment of
                supervisor
              </div>
              <v-divider></v-divider>
              <div class="text-title mb-6 mt-6">
                First Installment - Payable three months after registration
              </div>
              <v-divider></v-divider>
              <div class="text-title mb-6 mt-6">
                Second Installment - Payable six months after registration
              </div>
              <v-divider></v-divider>
              <div class="text-title mb-6 mt-6">
                Third Installment - Payable nine months after registration
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
  name: 'Schemes',
};
</script>

<style lang="scss" scoped>

.upper-case {
  text-transform: uppercase;
}

</style>
