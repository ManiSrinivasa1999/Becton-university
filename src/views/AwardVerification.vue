<template>
  <div class="awd-ver">
    <CommonBanner1 pageHeading="Award Verification" caption="Award Verification" />
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="10">
          <div class="text-center text-h5 font-weight-bold">
            Becton Universities' qualifications will help to build your career.
            E-commerce, Public Relations and many more.
            To find out more about our individual module awards<br />
            <span class="green--text">
              Email::: info@bectonuniversity.org
            </span>
          </div>
          <v-row class="fill-height pa-0 ma-0 mt-16" align="center" justify="center">
            <v-col cols="12" md="5" class="pa-6">
              <v-text-field
                outlined
                label="Certificate Number"
                required
              ></v-text-field>
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="Date of birth"
                    outlined
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
              <v-row justify="center" align="center">
                <v-btn color="success" outlined>
                  Get Result
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';

export default {
  name: 'AwardVerification',
  components: {
    CommonBanner1,
  },
  data: (vm) => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
  },
};
</script>

<style lang="scss">

.screen1 {
  background-image: url('../assets/award-banner.jpg');
}

</style>
