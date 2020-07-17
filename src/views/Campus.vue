<template>
  <div class="Campus">
    <CommonBanner1 pageHeading="Campus" caption="Campus" />
    <Types />
    <Schemes />
    <Fee />
    <Payments />
    <Refund />
    <Acheivements2 />
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';
import Types from '@/components/Campus/Types.vue';
import Schemes from '@/components/Campus/Schemes.vue';
import Fee from '@/components/Campus/Fee.vue';
import Payments from '@/components/Campus/Payments.vue';
import Refund from '@/components/Campus/Refund.vue';
import Acheivements2 from '@/components/Home/Acheivements2.vue';

export default {
  name: 'Campus',
  components: {
    CommonBanner1,
    Types,
    Schemes,
    Fee,
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
