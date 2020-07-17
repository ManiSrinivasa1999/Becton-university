<template>
  <div class="Campus">
    <CommonBanner1 pageHeading="Campus" caption="Campus" />
    <School />
    <Stream />
    <Videos />
    <CollegeStats />
    <!-- <Acheivements2 /> -->
    <v-row class="screen3">
      <v-col cols="1"></v-col>
      <v-col cols="12" md="10">
        <h2 class="ml-5">EVENTS</h2>
        <p class="mt-5 ml-5">
          HNC, HND, Undergraduate and Postgraduate Recruitment day 2020 (
          National & International)
        </p>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row class="screen4 mb-5">
      <v-col cols="1"></v-col>
      <v-col class="mx-auto" cols="12" md="3">
        <!-- <v-img src="../assets/event-1.jpg"></v-img> -->
        <v-card class="mx-auto eventCard" max-width="400" height="100%">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/event-1.jpg"
          ></v-img>

          <v-card-subtitle class="pb-0"
            >Recruitment Day Philippines 2020</v-card-subtitle
          >

          <v-card-text class="text--primary">
            <div>June 01 at 09:00 am</div>
            <div>Leicester Business Centre, Leiecster, United Kingdom</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="green" text>Share</v-btn>

            <v-btn color="green" text>Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="mx-auto" cols="12" md="3">
        <!-- <v-img src="../assets/event-1.jpg"></v-img> -->
        <v-card class="mx-auto eventCard" max-width="400" height="100%">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/event-2.jpg"
          ></v-img>

          <v-card-subtitle class="pb-0"
            >Recruitment Day - London, United Kingdom</v-card-subtitle
          >

          <v-card-text class="text--primary">
            <div>July 03 at 09:00 am</div>
            <div>16 London St, Paddington, London, United Kingdom</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="green" text>Share</v-btn>

            <v-btn color="green" text>Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="mx-auto" cols="12" md="3">
        <!-- <v-img src="../assets/event-1.jpg"></v-img> -->
        <v-card class="mx-auto eventCard" max-width="400" height="100%">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/event-3.jpg"
          ></v-img>

          <v-card-subtitle class="pb-0"
            >Recruitment Day - Health And Social Care</v-card-subtitle
          >

          <v-card-text class="text--primary">
            <div>June 01 at 09:00 am</div>
            <div>Leicester Business Centre, Leiecster, United Kingdom</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="green" text>Share</v-btn>

            <v-btn color="green" text>Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <LastScreen />
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';
import School from '@/components/Campus/School.vue';
import Stream from '@/components/Campus/Stream.vue';
import Videos from '@/components/Campus/Videos.vue';
import CollegeStats from '@/components/Campus/CollegeStats.vue';
import LastScreen from '@/components/Campus/LastScreen.vue';
// import Acheivements2 from '@/components/Home/Acheivements2.vue';

export default {
  name: 'Campus',
  components: {
    CommonBanner1,
    School,
    Stream,
    Videos,
    CollegeStats,
    LastScreen,
    // Acheivements2,
  },
};
</script>

<style lang="scss">

.screen1 {
  background-image: url('../assets/campus-banner.jpg');
}

</style>
