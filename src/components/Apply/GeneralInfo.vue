<template>
  <div class="gen-info">
    <v-card-text>
      <v-row class="pa-0 ma-0">
        <v-col cols="12" md="2">
          <v-select
            :items="desig"
            v-model="firstname"
            outlined
            label="Mr."
            required
          ></v-select>
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field
            v-model="firstname"
            outlined
            label="First Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field
            v-model="surname"
            outlined
            label="Sur Name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0">
        <v-col cols="12" md="6">
          <v-select :items="gender" outlined label="Gender"></v-select>
        </v-col>
        <v-col cols="12" md="6">
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
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0">
        <v-col cols="12">
          <v-textarea
            outlined
            rows="1"
            row-height="15"
            label="Contact Address"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0">
        <v-col cols="12" md="6">
          <v-select outlined :items="countries" label="Country" solo></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            outlined
            label="Passport Number"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="telno"
            outlined
            label="Telephone Number"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="mobno"
            outlined
            label="Mobile Number"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="fax"
            outlined
            label="Fax"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="email"
            outlined
            label="Email"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'GeneralInfo',
  data: (vm) => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    desig: ['Mr', 'Mrs', 'Miss', 'Ms', 'Other'],
    gender: ['Male', 'Female'],
    countries: undefined,
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

<style lang="scss" scoped></style>
