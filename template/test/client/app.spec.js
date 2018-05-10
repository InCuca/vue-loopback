import Vue from 'vue';
{{#extended}}
import Vuex from 'vuex';
{{/extended}}
import App from '@/App.vue';

describe('App.vue', () => {
  let Constructor, vm;
  {{#extended}}
  const routerView = {
    render: r => r('div', 'mocked component'),
  };
  {{/extended}}

  beforeEach((done) => {
    {{#extended}}
    Vue.use(Vuex);
    {{/extended}}
    Constructor = Vue.extend(App);
    vm = new Constructor({
      mounted: () => done(),
      {{#extended}}
      components: {routerView},
      store: new Vuex.Store({
        modules: {
          async: {
            namespaced: true,
            actions: {
              syncLoopback() {},
            },
          },
        },
      }),
      {{/extended}}
    });
    vm.$mount();
  });

  afterEach(() => vm.$destroy());

  {{#extended}}
  it('should render router component', () => {
    expect(vm.$el.innerHTML).to.equal('mocked component');
    expect(vm.$el.getAttribute('id')).to.equal('app');
  });
  {{else}}
  it('should render correct content', () => {
    const newVm = new Constructor().$mount();
    return Vue.nextTick().then(() => {
      expect(newVm.$el.innerHTML).to.equal('Hello World!');
    });
  });
  {{/extended}}
});
