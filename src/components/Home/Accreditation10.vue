<template>
  <div class="accreditation">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="12" lg="10" xl="10" sm="12" xs="12">
          <div class="align-center justify-center d-flex flex-column pa-4 mb-8">
            <span class="text-h4 pa-4 ma-4 font-weight-bold text-center">
              OUR ACCREDITATION AND PARTNERS
            </span>
          </div>
          <infinite-slide-bar>
            <div class="items mb-8">
              <div v-for="(item, i) in accreditionData" :key="i">
                <div class="f-left pd-t-8px mg-r-10px">
                  <v-img eager class="mx-auto" :src="item" width="240" height="120" contain>
                  </v-img>
                </div>
              </div>
            </div>
          </infinite-slide-bar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Accreditation10',
  data() {
    return {
      accreditionData: [
        // eslint-disable-next-line global-require
        require('../../assets/logo1.jpeg'),
        // eslint-disable-next-line global-require
        require('../../assets/logo2.jpeg'),
        // eslint-disable-next-line global-require
        require('../../assets/logo3.jpeg'),
        // eslint-disable-next-line global-require
        require('../../assets/logo4.jpeg'),
        // eslint-disable-next-line global-require
        require('../../assets/logo5.jpeg'),
        // eslint-disable-next-line global-require
        require('../../assets/logo6.jpeg'),
        // eslint-disable-next-line global-require
        require('../../assets/logo7.jpeg'),
        // eslint-disable-next-line global-require
        require('../../assets/logo8.jpeg'),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.items {
  display: flex;
  justify-content: space-around;
}

</style>
