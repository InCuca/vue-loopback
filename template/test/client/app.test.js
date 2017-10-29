import Vue from 'vue';
import App from '../../client/App.vue';

describe('App.vue', () => {
  const Constructor = Vue.extend(App);

  it('should render correct content', () => {
    const vm = new Constructor().$mount();
    return Vue.nextTick(() => {
      expect(vm.$el.innerHTML).to.equal('Hello World!');
    });
  });
});
