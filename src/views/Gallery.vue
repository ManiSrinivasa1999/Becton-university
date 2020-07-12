<template>
  <div class="gallery">
    <CommonBanner1 pageHeading="Gallery" caption="Gallery" />
    <v-container>
    </v-container>
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';

export default {
  name: 'Gallery',
  components: {
    CommonBanner1,
  },
};
</script>

<style lang="scss">

.screen1 {
  background-image: url('../assets/homebanner6.jpg');
}

</style>
