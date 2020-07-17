<template>
  <div class="Campus">
    <CommonBanner1 pageHeading="Campus" caption="Campus" />
    <School />
    <Stream />
    <Videos />
    <CollegeStats />
    <Acheivements2 />
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
import Acheivements2 from '@/components/Home/Acheivements2.vue';

export default {
  name: 'Campus',
  components: {
    CommonBanner1,
    School,
    Stream,
    Videos,
    CollegeStats,
    LastScreen,
    Acheivements2,
  },
};
</script>

<style lang="scss">

.screen1 {
  background-image: url('../assets/campus-banner.jpg');
}

</style>
