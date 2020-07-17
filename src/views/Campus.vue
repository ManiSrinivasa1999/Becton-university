<template>
  <div class="Campus">
    <CommonBanner1 pageHeading="Campus" caption="Campus" />
    <School />
    <Stream />
    <Payments />
    <Refund />
    <Acheivements2 />
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';
import School from '@/components/Campus/School.vue';
import Stream from '@/components/Campus/Stream.vue';
import Payments from '@/components/Campus/Payments.vue';
import Refund from '@/components/Campus/Refund.vue';
import Acheivements2 from '@/components/Home/Acheivements2.vue';

export default {
  name: 'Campus',
  components: {
    CommonBanner1,
    School,
    Stream,
    Payments,
    Refund,
    Acheivements2,
  },
};
</script>

<style lang="scss">

.screen1 {
  background-image: url('../assets/campus-banner.jpg');
}

</style>
