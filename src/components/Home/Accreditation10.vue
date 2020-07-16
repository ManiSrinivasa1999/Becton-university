<template>
  <div class="accreditation">
    <v-container>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="8">
          <div class="align-center justify-center d-flex flex-column pa-4">
            <span class="text-h4 pa-4 ma-4 font-weight-bold">
              OUR ACCREDITATION AND PARTNERS
            </span>
          </div>
          <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
            <v-col cols="6" md="2" v-for="(item, i) in accreditionData" :key="i">
              <v-img eager class="mx-auto" :src="item" width="240" height="120" contain>
              </v-img>
            </v-col>
          </v-row>
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
        require('../../assets/logo2.png'),
        // eslint-disable-next-line global-require
        require('../../assets/logo3.png'),
        // eslint-disable-next-line global-require
        require('../../assets/logo4.png'),
        // eslint-disable-next-line global-require
        require('../../assets/logo5.jpeg'),
        // eslint-disable-next-line global-require
        require('../../assets/logo6.jpeg'),
        // eslint-disable-next-line global-require
        require('../../assets/logo7.png'),
        // eslint-disable-next-line global-require
        require('../../assets/logo8.jpg'),
        // eslint-disable-next-line global-require
        require('../../assets/logo9.jpeg'),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
