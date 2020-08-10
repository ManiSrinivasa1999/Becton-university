<template>
  <div class="header">
    <v-container>
      <v-system-bar v-if="$vuetify.breakpoint.lgAndUp" app height="45px">
        <v-toolbar-title class="text-h4 font-weight-bold ml-2">
          <v-row justify="space-around" class="ma-2">
             <a
                v-for="icon in icons"
                :key="icon.icon"
                :href="icon.url"
                class="ma-4 white--text"
                icon
              >
                <v-icon :color="icon.color">
                  {{ icon.icon }}
                </v-icon>
              </a>
          </v-row>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <a
            href="mailto:info@becktoncollege.org"
            class="pa-2 email-phone-links black--text"
          >
            info@becktoncollege.org
          </a>
          <a
            href="tel:+1 302-827-3939"
            class="pa-2 email-phone-links black--text"
          >
            +1 302-827-3939
          </a>
        </div>
      </v-system-bar>
      <v-app-bar
        app
        v-if="$vuetify.breakpoint.lgAndUp"
        class="d-flex justify-center align-center"
      >
         <div v-if="$vuetify.breakpoint.lgAndUp" class="ml-10">
          <v-btn
            text
            v-for="button in buttons.slice(0, 4)"
            :key="button.label"
            :to="button.url"
            class="pa-2 btn text-body-2 font-weight-bold"
            active-class="green--text"
          >
            {{ button.label }}
          </v-btn>
        </div>
        <div
          class="mr-2 ml-6"
        >
          <div class="college-name">
            <v-img
              class="px-5"
              eager
              src="../assets/logo.png"
              height="125"
              width="425"
              contain
            >
            </v-img>
          </div>
        </div>
        <div v-if="$vuetify.breakpoint.lgAndUp" class="mr-16 pr-16">
          <v-btn
            text
            v-for="button in buttons.slice(4, 6)"
            :key="button.label"
            :to="button.url"
            class="pa-2 btn text-body-2 font-weight-bold "
            active-class="green--text"
          >
            {{ button.label }}
          </v-btn>
          <v-btn
            text
            v-for="button in buttons.slice(6, 7)"
            :key="button.label"
            :to="button.url"
            class="pa-2 text-body-2 font-weight-bold success"
          >
            {{ button.label }}
          </v-btn>
        </div>
      </v-app-bar>
      <v-app-bar app v-else-if="$vuetify.breakpoint.mdAndDown">
        <div class="college-name-sm">
          <v-img eager src="../assets/logo.png" height="65px" width="80px" contain></v-img>
        </div>

        <v-spacer></v-spacer>

        <div v-if="$vuetify.breakpoint.mdAndDown">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="success" icon v-bind="attrs" v-on="on">
                  <v-icon>fas fa-bars</v-icon>
                </v-btn>
              </template>
              <v-list no-action>
                <v-list-item
                  v-for="button in buttons.slice(0,6)"
                  :key="button.label"
                  :to="button.url"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ button.label }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-btn class="success mx-2" to="/apply">Apply Now</v-btn>
              </v-list>
            </v-menu>
          </v-app-bar-nav-icon>
        </div>
      </v-app-bar>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      drawer: null,
      icons: [
        {
          icon: 'fab fa-facebook',
          url: '/',
          color: '#3b5998',
        },
        {
          icon: 'fab fa-twitter',
          url: '/',
          color: '#00acee',
        },
        {
          icon: 'fab fa-linkedin',
          url: '/',
          color: '#0e76a8',
        },
        {
          icon: 'fab fa-instagram',
          url: '/',
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
          label: 'Campus',
          url: '/campus',
        },
        {
          label: 'Courses',
          url: '/programmes',
        },
        {
          label: 'Events',
          url: '/events',
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

.email-phone-links {
  text-decoration: none;
}

.btn {
  cursor: pointer;
}
.btn:active {
  background: white !important;
}

.btn:hover {
  background: white !important;
}

.college-name {
  clip-path: polygon(0% 0%, 100% 0, 100% 60%, 50% 100%, 0 60%);
  position: relative;
  top: -0px;
  background-color: #e0e0e0;
  width: 200px;
  height: 150px;
}

.college-name-sm {
  clip-path: polygon(0% 0%, 100% 0, 100% 60%, 50% 100%, 0 60%);
  position: relative;
  top: 13px;
  left: -15px;
  background-color: #e0e0e0;
  width: 80px;
  height: 80px;
}

</style>
