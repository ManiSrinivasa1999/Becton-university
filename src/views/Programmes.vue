<template>
  <div class="programmes">
    <CommonBanner1 pageHeading="Courses" caption="Courses" />
    <!-- <Onlinepro /> -->
    <ProgrammesBanner pageHeading="DIPLOMA PROGRAMS" />
    <DiplomaProList />
    <ProgrammesBanner pageHeading="UNDERGRADUATE PROGRAMS" />
    <UnderGradProList />
    <ProgrammesBanner pageHeading="POST GRADUATE PROGRAMS" />
    <PostGrdProList />
    <ProgrammesBanner pageHeading="DOCTORATE PROGRAMS" />
    <DoctorateProList />
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';
// import Onlinepro from '@/components/Programmes/Onlinepro.vue';
import ProgrammesBanner from '@/components/Programmes/ProgrammesBanner.vue';
import DiplomaProList from '@/components/Programmes/DiplomaProList.vue';
import UnderGradProList from '@/components/Programmes/UnderGradProList.vue';
import PostGrdProList from '@/components/Programmes/PostGrdProList.vue';
import DoctorateProList from '@/components/Programmes/DoctorateProList.vue';

export default {
  name: 'Programmes',
  components: {
    CommonBanner1,
    // Onlinepro,
    ProgrammesBanner,
    DiplomaProList,
    UnderGradProList,
    PostGrdProList,
    DoctorateProList,
  },
};
</script>

<style lang="scss" scoped>

.screen1 {
  background-image: url('../assets/programmes-banner.jpg');
}

</style>
