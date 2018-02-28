import Vue from 'vue';
import App from '@/App.vue';

describe('App.vue', () => {
  let Constructor;
  let vm;
  {{#extended}}
  const routerView = {
    render: r => r('div', 'mocked component'),
  };
  {{/extended}}

  beforeEach((done) => {
    Constructor = Vue.extend(App);
    vm = new Constructor({
      mounted: () => done(),
      {{#extended}}
      components: {routerView},
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
    const vm = new Constructor().$mount();
    return Vue.nextTick().then(() => {
      expect(vm.$el.innerHTML).to.equal('Hello World!');
    });
  });
  {{/extended}}
});
