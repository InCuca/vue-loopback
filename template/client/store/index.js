import Vue from 'vue';
import Vuex from 'vuex';

import async from './modules/async';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    breadcrumb: [{
      text: 'Home',
      to: '/dashboard',
    }, {
      text: 'Dashboard',
      active: true,
    }],
  },
  modules: {
    async, // async namespaced
    auth, // auth namespaced
  },
});
