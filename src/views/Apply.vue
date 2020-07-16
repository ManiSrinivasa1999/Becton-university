<template>
  <div class="apply">
    <CommonBanner1 pageHeading="Apply Now" caption="Apply Now" />
    <v-container>
      <v-row class="pa-0 ma-0">
        <v-col cols="12" md="8" class="mx-auto">
          <v-card class="mb-4 pa-0 ma-0">
            <v-card-title class="title font-weight-bold justify-space-between">
              <span>{{ currentTitle }}</span>
            </v-card-title>

            <v-window v-model="step">
              <v-window-item :value="1">
                <GeneralInfo />
              </v-window-item>
              <v-window-item :value="2">
                <StudentPreferences />
              </v-window-item>
              <v-window-item :value="3">
                <AcademicRecords />
              </v-window-item>
              <v-window-item :value="4">
                <EnglishLanguageProficiency />
              </v-window-item>
              <v-window-item :value="5">
                <WorkExperience />
              </v-window-item>
              <v-window-item :value="6">
                <SponsorInfo />
              </v-window-item>
              <v-window-item :value="7">
                <div class="pa-4 text-center">
                  <v-img eager
                    class="mb-4"
                    contain
                    height="128"
                    src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                  ></v-img>
                  <h3 class="title font-weight-light mb-2">Welcome to USA-GU</h3>
                  <span class="caption grey--text"
                    >Thanks for filling the form</span
                  >
                </div>
              </v-window-item>
            </v-window>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn :disabled="step === 1" text @click="step--">Back</v-btn>
              <v-spacer></v-spacer>
              <v-btn :disabled="step === 7" color="info" depressed @click="step++"
                >Next</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';
import GeneralInfo from '@/components/Apply/GeneralInfo.vue';
import StudentPreferences from '@/components/Apply/StudentPreferences.vue';
import AcademicRecords from '@/components/Apply/AcademicRecords.vue';
import EnglishLanguageProficiency from '@/components/Apply/EnglishLanguageProficiency.vue';
import WorkExperience from '@/components/Apply/WorkExperience.vue';
import SponsorInfo from '@/components/Apply/SponsorInfo.vue';

export default {
  name: 'Apply',
  components: {
    CommonBanner1,
    GeneralInfo,
    StudentPreferences,
    AcademicRecords,
    EnglishLanguageProficiency,
    WorkExperience,
    SponsorInfo,
  },
  data: () => ({
    step: 1,
  }),
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'General Info';
        case 2:
          return 'Students Planning Preferences';
        case 3:
          return 'Academic Records';
        case 4:
          return 'English Language Proficiency';
        case 5:
          return 'Work Experience';
        case 6:
          return 'Sponsors Information';
        default:
          return 'Form Filled Successfully';
      }
    },
  },
};
</script>

<style lang="scss">

.screen1 {
  background-image: url('../assets/homebanner8-compressed.jpg');
}

</style>
