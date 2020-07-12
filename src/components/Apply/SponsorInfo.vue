<template>
  <div class="sponsor-info">
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Occupation</th>
              <th class="text-left">Relationship</th>
              <th class="text-left">Bank Statement</th>
              <th class="text-left">Total Amount</th>
              <th class="text-left">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <v-select
                  label="Select"
                  :items="occupation"
                  outlined
                  class="mt-4"
                ></v-select>
              </td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td>
                <v-select
                  label="Select"
                  :items="years"
                  outlined
                  class="mt-4"
                ></v-select>
              </td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
            </tr>
            <tr>
              <td>
                <v-select
                  label="Select"
                  :items="occupation"
                  outlined
                  class="mt-4"
                ></v-select>
              </td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td>
                <v-select
                  label="Select"
                  :items="years"
                  outlined
                  class="mt-4"
                ></v-select>
              </td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
              <td><v-text-field outlined class="mt-4"></v-text-field></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-row class="pa-0 ma-0">
        <v-col cols="12" md="6">
          <v-select
            label="What principally influenced you to apply?"
            outlined
            :items="relations"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Reference Name" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0">
        <v-col cols="12">
          <v-text-field label="Reference Address" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'SponserInfo',
  data() {
    return {
      occupation: ['Bussiness', 'Job', 'Others'],
      years: [
        '3 months available',
        '6 months available',
        '12 months available',
      ],
      relations: [
        'Friend/ Relative',
        'Fair/ Conference',
        'Local Agent',
        'News Paper',
        'Magazine',
        'TV advert',
        'Web Search',
        'Others',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
