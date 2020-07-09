<template>
  <!-- App.vue -->
  <v-app>
    <Header />
    <!-- Sizes your content based upon application components -->
    <v-main>

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
<style lang="scss"></style>
