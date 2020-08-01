<template>
  <div class="features">
    <v-container>
      <div class="align-center justify-center d-flex flex-column pa-4">
        <span class="text-h4 pa-4 ma-4 font-weight-bold">
          FEATURES
        </span>
      </div>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="12" sm="10" lg="10">
          <v-row>
            <v-col v-if="$vuetify.breakpoint.xlOnly" cols="12" md="6">
              <v-img eager src="../../assets/feature-compressed.jpg" height="290px"></v-img>
            </v-col>
            <v-col v-else cols="12" md="6">
              <v-img eager src="../../assets/feature-compressed.jpg" height="100%"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <v-expansion-panels focusable>
              <v-expansion-panel
                v-for="(feature,i) in features"
                :key="i"
              >
                <v-expansion-panel-header>
                  {{ feature.head }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ feature.content }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Features9',
  data() {
    return {
      features: [
        {
          head: 'Student Learning Oppurtunities',
          content: 'Studying at Beckton College will provide you with the tools you need to forge a bright future for yourself. With experience in helping students achieve their potential, we are committed to excellence in learning and teaching.',
        },
        {
          head: 'Student Stories',
          content: ' I believe you will find the story of Beckton College inspiring and become a part of it - because thanks to YOU we have the chance to grow and continue to make a difference!',
        },
        {
          head: 'New Courses',
          content: 'With our unique, world-leading style of distance learning,Beckton College enables you to study from home, work or even on the move, at a time that suits you. With a wide choice of qualifications, at undergraduate and postgraduate level, Beckton College offers the choice and flexibility you need.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
