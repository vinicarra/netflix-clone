import Icon from 'vue-awesome/components/Icon.vue';
import Vue from 'vue';
import LazyImage from './components/LazyImage.vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vue-awesome/icons/redo';
import 'vue-awesome/icons/volume-mute';
import 'vue-awesome/icons/volume-up';
import 'vue-awesome/icons/bell';
import 'vue-awesome/icons/search';
import 'vue-awesome/icons/sort-down';

Vue.config.productionTip = false;

Vue.component('v-icon', Icon);
Vue.component('lazy-img', LazyImage);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
