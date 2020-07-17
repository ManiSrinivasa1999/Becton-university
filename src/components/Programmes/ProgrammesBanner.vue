<template>
  <div class="banner-1">
    <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
      <v-col cols="10">
        <div class="align-center justify-center d-flex flex-column pa-4">
          <span class="text-h4 pa-4 ma-4 font-weight-bold green--text text-center">
            {{ pageHeading }}
          </span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ProgrammesBanner',
  props: {
    pageHeading: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
