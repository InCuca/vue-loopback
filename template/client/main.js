{{#extended}}
/* Required by BootstrapVue */
import 'babel-polyfill';

{{/extended}}
/* Global Components */
import Vue from 'vue';
{{#extended}}
import {sync} from 'vuex-router-sync';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
// import 'vue-awesome/icons';
import Icon from 'vue-awesome';
{{/extended}}

/* Local Components and modules */
import App from './App.vue';
{{#extended}}
import router from './router';
import store from './store';

Vue.use(BootstrapVue);
Vue.component('icon', Icon);

// Add router state to store
sync(store, router);
{{/extended}}
{{#unless extended}}
import './static/main.css';
{{/unless}}

// Instance Application
export default new Vue({
  el: '#app',
  render: r => r(App),
  {{#extended}}
  router,
  store,
  {{/extended}}
});
