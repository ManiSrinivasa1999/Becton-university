<template>
  <div class="apply">
    <CommonBanner1 pageHeading="Apply Now" caption="Apply Now" />
    <v-container>
    </v-container>
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';

export default {
  name: 'Apply',
  components: {
    CommonBanner1,
  },
};
</script>

<style lang="scss">

.screen1 {
  background-image: url('../assets/homebanner8.jpg');
}

</style>
