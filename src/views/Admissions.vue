<template>
  <div class="admissions">
    <CommonBanner1 pageHeading="Admissions and Fees" caption="Admissions and Fees" />
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
import Types from '@/components/Admissions/Types.vue';
import Schemes from '@/components/Admissions/Schemes.vue';
import Fee from '@/components/Admissions/Fee.vue';
import Payments from '@/components/Admissions/Payments.vue';
import Refund from '@/components/Admissions/Refund.vue';
import Acheivements2 from '@/components/Home/Acheivements2.vue';

export default {
  name: 'Admissions',
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
  background-image: url('../assets/homebanner5-compressed.jpg');
}

</style>
