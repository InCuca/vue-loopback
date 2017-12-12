import Vue from 'vue';
import App from '@/App.vue';
{{#extended}}

// Replicates main.js behavior
import 'babel-polyfill';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import Icon from 'vue-awesome';
import router from './router.js';
import store from './store';

Vue.use(BootstrapVue);
Vue.component('icon', Icon);
sync(store, router);
{{/extended}}

describe('App.vue', () => {
  const Constructor = Vue.extend(App);

  {{#extended}}
  it('should render login view', () => {
    const vm = new Constructor({
      render: r => r(App),
      router,
      store,
    }).$mount();

    return main.$nextTick().then(() => {
      expect(main.$el.querySelector('.login-view')).to.not.equal(undefined);
    })
  })
  {{else}}
  it('should render correct content', () => {
    const vm = new Constructor().$mount();
    return Vue.nextTick().then(() => {
      expect(vm.$el.innerHTML).to.equal('Hello World!');
    });
  });
  {{/extended}}
});
