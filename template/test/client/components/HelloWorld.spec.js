import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld);

  it('should render correct content', () => {
    const vm = new Constructor().$mount();
    return Vue.nextTick().then(() => {
      expect(vm.$el.innerHTML).to.include(
        'Hello World! This content is restricted.'
      );
    });
  });
});
