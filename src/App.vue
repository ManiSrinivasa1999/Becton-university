<template>
  <!-- App.vue -->
  <v-app>
    <Header />
    <v-main v-if="$vuetify.breakpoint.mdAndDown" class="pt-0">

      <v-container fluid class="pa-0">

        <router-view></router-view>
      </v-container>
    </v-main>
    <v-main v-if="$vuetify.breakpoint.lgAndUp" class="pt-0">

      <v-container fluid class="pa-0">

        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>
<script>
import { dom } from '@fortawesome/fontawesome-svg-core';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  mounted() {
    dom.watch();
  },
  components: {
    Header,
    Footer,
  },
  data() {
    return {
    };
  },
};
</script>
<style lang="scss">
.pt {
  padding: 50px 0 0 0 !important;
}
</style>
