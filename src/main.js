import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faUserFriends,
  faUserGraduate,
  faTrophy,
  faUserEdit,
  faChevronDown,
  faCommentDollar,
  faBlog,
  faRoute,
  faUsers,
  faMapMarkedAlt,
  faObjectGroup,
  faCaretDown,
  faGraduationCap,
  faDotCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

library.add(
  faBars,
  faUserFriends,
  faUserGraduate,
  faGraduationCap,
  faCaretDown,
  faTrophy,
  faChevronDown,
  faCommentDollar,
  faBlog,
  faRoute,
  faUsers,
  faMapMarkedAlt,
  faObjectGroup,
  faUserEdit,
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
  faDotCircle,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
