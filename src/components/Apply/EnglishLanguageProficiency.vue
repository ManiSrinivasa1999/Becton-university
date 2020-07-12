<template>
  <div class="profi-eng">
    <v-card-text>
      <v-row class="pa-0 ma-0">
        <v-col cols="12">
          <v-select outlined :items="tests" label="Test Name" solo></v-select>
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="score"
            outlined
            label="Score / Score Range"
            required
          ></v-text-field>
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
                label="Test Date"
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
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'EnglishLanguageProficiency',
  data: (vm) => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    tests: ['IELTS', 'TOEFL', 'SAT', 'GRE', 'GMAT'],
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
