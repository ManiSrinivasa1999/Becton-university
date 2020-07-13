<template>
  <div class="footer">
    <v-footer color="grey darken-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-card-text class="white--text">
              <strong class="text-h4 font-weight-bold">Becton University</strong>
              <p class="text-h6 mt-4">
                Online and distance learning is the future of education. Even
                though we live in a global village the concept of a becton
                university – not rooted in a particular country – such as Becton
                University.
              </p>
            </v-card-text>
            <v-card-text class="white--text">
              <p>Follow Us</p>
              <v-btn
                v-for="icon in icons"
                :key="icon.icon"
                :href="icon.url"
                class="ma-1 white--text"
                icon
                target="_blank"
              >
                <v-icon :color="icon.color">
                  {{ icon.icon }}
                </v-icon>
              </v-btn>
            </v-card-text>
            <v-card-text class="white--text" v-if="$vuetify.breakpoint.lgAndUp">
              <span>Copyright &copy;</span>{{ new Date().getFullYear() }}
              <strong>Becton University | All rights reserved.</strong>
            </v-card-text>
          </v-col>
          <v-col cols="12" md="4"></v-col>
          <v-col cols="12" md="4">
            <v-card-text class="white--text">
              <strong class="text-h4 font-weight-bold mb-4">Quick Links</strong>
              <a
                v-for="button in buttons"
                :key="button.label"
                :href="button.url"
                class="links"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ button.label }}</v-list-item-title>
                </v-list-item-content>
              </a>
            </v-card-text>
            <v-card-text class="white--text" v-if="$vuetify.breakpoint.mdAndDown">
              <span>Copyright &copy;</span>{{ new Date().getFullYear() }}
              <strong>Becton University | All rights reserved.</strong>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      icons: [
        {
          icon: 'fab fa-facebook',
          url: '',
          color: '#3b5998',
        },
        {
          icon: 'fab fa-twitter',
          url: '',
          color: '#00acee',
        },
        {
          icon: 'fab fa-linkedin',
          url: '',
          color: '#0e76a8',
        },
        {
          icon: 'fab fa-instagram',
          url: '',
          color: '#E1306C',
        },
        {
          icon: 'fab fa-youtube',
          url: '',
          color: '#c4302b',
        },
      ],
      buttons: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'About Us',
          url: '/about',
        },
        {
          label: 'Programmes',
          url: '/programmes',
        },
        {
          label: 'Admissions and Fee',
          url: '/admissions',
        },
        {
          label: 'Award Verification',
          url: '/awardverification',
        },
        {
          label: 'Gallery',
          url: '/gallery',
        },
        {
          label: 'Contact',
          url: '/contact',
        },
        {
          label: 'Apply Now',
          url: '/apply',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.links {
  text-decoration: none;
  color: white;
}

a:hover {
  color: green;
}

</style>
