<template>
  <div class="contact">
    <CommonBanner1 pageHeading="Contact Us" caption="Contact Us" />
    <v-container>
    </v-container>
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';

export default {
  name: 'Contact',
  components: {
    CommonBanner1,
  },
};
</script>

<style lang="scss">

.screen1 {
  background-image: url('../assets/homebanner-2.jpg');
}

</style>
