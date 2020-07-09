<template>
  <div class="home">
    <HomeBanner1 />
    <Acheivements2 />
    <General3 />
    <Moreabout4 />
  </div>
</template>

<script>
import HomeBanner1 from '@/components/Home/HomeBanner1.vue';
import Acheivements2 from '@/components/Home/Acheivements2.vue';
import General3 from '@/components/Home/General3.vue';
import Moreabout4 from '@/components/Home/Moreabout4.vue';

export default {
  name: 'Home',
  components: {
    HomeBanner1,
    Acheivements2,
    General3,
    Moreabout4,
  },
};
</script>
