<template>
  <div class="academic-records">
    <v-card-text>
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
  name: 'AcademicRecords',
};
</script>

<style lang="scss" scoped></style>
