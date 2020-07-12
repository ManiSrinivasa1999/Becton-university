<template>
  <div class="student-pref">
    <v-card-text>
      <v-row class="pa-0 ma-0">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="preffInstitute"
            outlined
            label="Preffered Institute"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="course"
            outlined
            label="Course"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0">
        <v-col cols="12" md="6">
          <v-select outlined :items="months" label="Semester" solo></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field outlined label="Year" required></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'StudentPreferences',
  data() {
    return {
      months: [
        'Janaury',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
