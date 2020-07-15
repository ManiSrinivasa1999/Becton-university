<template>
  <div class="features">
    <v-container>
      <div class="align-center justify-center d-flex flex-column pa-4">
        <span class="text-h4 pa-4 ma-4 font-weight-bold">
          FEATURES
        </span>
      </div>
      <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
        <v-col cols="12" md="10">
          <v-row>
            <v-col cols="12" md="6">
              <v-img src="../../assets/feature-compressed.jpg" height="350px"></v-img>
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
          content: 'Online and distance learning is the future of education. Even though we live in a global village the concept of a becton university – not rooted in a particular country – such as Becton University – is occasionally misunderstood by the dinosaurs of brick and mortar education especially in countries where online education is still a novelty.',
        },
        {
          head: 'Student Stories',
          content: ' I believe you will find the story of Becton University inspiring and become a part of it - because thanks to YOU we have the chance to grow and continue to make a difference!',
        },
        {
          head: 'New Courses',
          content: 'With our unique, world-leading style of distance learning,Becton University enables you to study from home, work or even on the move, at a time that suits you. With a wide choice of qualifications, at undergraduate and postgraduate level, Becton University offers the choice and flexibility you need.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
