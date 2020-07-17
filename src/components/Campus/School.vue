<template>
  <div class="school">
    <v-container>
       <v-row class="fill-height pa-0 ma-0" justify="center" align="center">
        <v-col cols="12" lg="12" xl="10" md="10" sm="12">
          <v-row
            v-if="$vuetify.breakpoint.mdAndUp"
            class="fill-height pa-0 ma-0 flex-md-column-reverse flex-lg-row"
          >
            <v-col cols="12" lg="6" xl="6" md="12" sm="8">
              <div class="font-weight-bold text-h5 mb-4">
                WHY GO TO OUR SCHOOL
              </div>
              <div class="text-subtitle">
                You will probably have less contact with your professors.
                The workload and expectations are different as well.
                You may have weekly reading assignments but have fewer,
                larger projects to turn in for the semester.
                Your grade may be based on only two tests for the whole semester
                — meaning it is important to plan your study schedule and how you use your time.
              </div>

              <div class="mt-12 d-flex">
                <div
                  v-for="(item, i) in items"
                  :key="i"
                  class="text-center mx-auto"
                >
                  <v-icon color="success" class="icon-hg">
                    {{ item.icon }}
                  </v-icon>
                  <v-card-text class="text-h6">
                    {{ item.label }}
                  </v-card-text>
                </div>
              </div>
            </v-col>
            <v-col cols="12" lg="6" xl="6" md="12" sm="8">
              <v-img eager src="@/assets/school.jpg" height="350px"></v-img>
            </v-col>
          </v-row>
          <v-row
            v-else-if="$vuetify.breakpoint.smOnly"
            class="fill-height pa-0 ma-0 flex-md-column-reverse flex-lg-row"
          >
            <v-col cols="12" lg="6" xl="6" md="12" sm="12">
              <v-img eager src="@/assets/school.jpg" height="400px"></v-img>
            </v-col>
            <v-col cols="12" lg="6" xl="6" md="12" sm="12">
              <div class="font-weight-bold text-h5 mb-4">
                WHY GO TO OUR SCHOOL
              </div>
              <div class="text-subtitle">
                You will probably have less contact with your professors.
                The workload and expectations are different as well.
                You may have weekly reading assignments but have fewer,
                larger projects to turn in for the semester.
                Your grade may be based on only two tests for the whole semester
                — meaning it is important to plan your study schedule and how you use your time.
              </div>

              <div class="mt-8 d-flex">
                <div
                  v-for="(item, i) in items"
                  :key="i"
                  class="text-center mx-auto"
                >
                  <v-icon color="success" class="icon-hg">
                    {{ item.icon }}
                  </v-icon>
                  <v-card-text class="text-h6">
                    {{ item.label }}
                  </v-card-text>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row
            v-else-if="$vuetify.breakpoint.xsOnly"
            class="fill-height pa-0 ma-0 flex-md-column-reverse flex-lg-row"
          >
            <v-col cols="12" lg="6" xl="6" md="12" sm="12">
              <v-img eager src="@/assets/school.jpg" height="400px"></v-img>
            </v-col>
            <v-col cols="12" lg="6" xl="6" md="12" sm="12">
              <div class="font-weight-bold text-h5 mb-4">
                WHY GO TO OUR SCHOOL
              </div>
              <div class="text-subtitle">
                You will probably have less contact with your professors.
                The workload and expectations are different as well.
                You may have weekly reading assignments but have fewer,
                larger projects to turn in for the semester.
                Your grade may be based on only two tests for the whole semester
                — meaning it is important to plan your study schedule and how you use your time.
              </div>

              <div class="mt-8">
                <div
                  v-for="(item, i) in items"
                  :key="i"
                  class="text-center mx-auto"
                >
                  <v-icon color="success" class="icon-hg">
                    {{ item.icon }}
                  </v-icon>
                  <v-card-text class="text-h6">
                    {{ item.label }}
                  </v-card-text>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
       </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      items: [
        {
          icon: 'fas fa-graduation-cap',
          label: 'Integrity',
        },
        {
          icon: 'fas fa-users',
          label: 'Diversity',
        },
        {
          icon: 'fas fa-trophy',
          label: 'Excellence',
        },
        {
          icon: 'fas fa-dot-circle',
          label: 'Collaboration',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.icon-hg {
  height: 50px;
  width: 50px;
}

</style>
