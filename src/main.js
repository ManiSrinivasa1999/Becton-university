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
  faCircle,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import InfiniteSlideBar from 'vue-infinite-slide-bar';
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
  faCircle,
  faChevronLeft,
  faChevronRight,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('infinite-slide-bar', InfiniteSlideBar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
