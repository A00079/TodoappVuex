import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee,faTrash, faBell, faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee,faTrash,faBell,faFlag);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

new Vue({
  store,
  render: h => h(App),
  router: router
}).$mount('#app')
