<template>
  <!-- App.vue -->
  <v-app>
    <Header />
    <!-- Sizes your content based upon application components -->
    <v-main v-if="$vuetify.breakpoint.mdAndDown" class="pt-0">

      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pa-0">

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-main v-if="$vuetify.breakpoint.lgAndUp" class="pt">

      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pa-0">

        <!-- If using vue-router -->
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
