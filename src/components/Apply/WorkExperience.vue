<template>
  <div class="work-exp">
    <v-card-text>
      <v-row class="pa-0 ma-0">
        <v-col cols="12">
          <v-select
            label="Total work experience in years"
            :items="years"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Certificate/ Degree Title</th>
              <th class="text-left">Name of the Board/ College</th>
              <th class="text-left">Group/ Subjects</th>
              <th class="text-left">Year Awarded</th>
              <th class="text-left">Division/ Class /GPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
            </tr>
            <tr>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
            </tr>
            <tr>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
            </tr>
            <tr>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'WorkExperience',
  data() {
    return {
      years: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    };
  },
};
</script>

<style lang="scss" scoped></style>
