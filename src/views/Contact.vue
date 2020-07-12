<template>
  <div class="contact">
    <CommonBanner1 pageHeading="Contact Us" caption="Contact Us" />
    <Contacts />
  </div>
</template>

<script>
import CommonBanner1 from '@/components/CommonBanner1.vue';
import Contacts from '@/components/Contacts.vue';

export default {
  name: 'Contact',
  components: {
    CommonBanner1,
    Contacts,
  },
};
</script>

<style lang="scss">

.screen1 {
  background-image: url('../assets/homebanner-2.jpg');
}

</style>
