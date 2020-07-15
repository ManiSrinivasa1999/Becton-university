<template>
  <div class="home">
    <HomeBanner1 />
    <Acheivements2 />
    <General3 />
    <AdmissionHome />
    <Moreabout4 />
    <UniversityTeam5 />
    <LatestEvents6 />
    <StudyatBU7 />
    <WhyChoose8 />
    <Features9 />
    <Accreditation10  />
  </div>
</template>

<script>
import HomeBanner1 from '@/components/Home/HomeBanner1.vue';
import Acheivements2 from '@/components/Home/Acheivements2.vue';
import General3 from '@/components/Home/General3.vue';
import AdmissionHome from '@/components/Home/AdmissionHome.vue';
import Moreabout4 from '@/components/Home/Moreabout4.vue';
import UniversityTeam5 from '@/components/Home/UniversityTeam5.vue';
import LatestEvents6 from '@/components/Home/LatestEvents6.vue';
import StudyatBU7 from '@/components/Home/StudyatBU7.vue';
import WhyChoose8 from '@/components/Home/WhyChoose8.vue';
import Features9 from '@/components/Home/Features9.vue';
import Accreditation10 from '@/components/Home/Accreditation10.vue';

export default {
  name: 'Home',
  components: {
    HomeBanner1,
    Acheivements2,
    General3,
    AdmissionHome,
    Moreabout4,
    UniversityTeam5,
    LatestEvents6,
    StudyatBU7,
    WhyChoose8,
    Features9,
    Accreditation10,
  },
};
</script>
