<template>
  <div class="about">
    <CommonBanner1 pageHeading="About Us" caption="About" />
    <Stats />
    <BU3 />
    <Distancing4 />
    <Faculty5 />
    <Modules />
    <Computer />
    <Presidentmes />
    <WhyChoose8 />
    <Features9 />
    <Accreditation10  />
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';
import Stats from '@/components/About/Stats.vue';
import BU3 from '@/components/About/BU3.vue';
import Distancing4 from '@/components/About/Distancing4.vue';
import Faculty5 from '@/components/About/Faculty5.vue';
import Modules from '@/components/About/Modules.vue';
import Computer from '@/components/About/Computer.vue';
import Presidentmes from '@/components/About/Presidentmes.vue';
import WhyChoose8 from '@/components/Home/WhyChoose8.vue';
import Features9 from '@/components/Home/Features9.vue';
import Accreditation10 from '@/components/Home/Accreditation10.vue';

export default {
  name: 'About',
  components: {
    CommonBanner1,
    Stats,
    BU3,
    Distancing4,
    Faculty5,
    Modules,
    Computer,
    Presidentmes,
    WhyChoose8,
    Features9,
    Accreditation10,
  },
};
</script>

<style lang="scss">

.screen1 {
  background-image: url('../assets/about-banner.jpg');
}

</style>
