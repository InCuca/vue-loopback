import {mount} from 'vue-test-utils';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld);

  it('should render correct content', () => {
    expect(wrapper.html()).toContain(
      'Hello World! This content is restricted.'
    );
  });
});
