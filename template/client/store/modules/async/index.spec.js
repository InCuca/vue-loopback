import {createLocalVue} from 'vue-test-utils';
import Vuex from 'vuex';
import async from './index';

const Vue = createLocalVue();
Vue.use(Vuex);

describe('async module', () => {
  const initialState = JSON.stringify(async.state);
  const store = new Vuex.Store(async);

  beforeEach(() => {
    store.replaceState(JSON.parse(initialState));
  });

  it('has ajaxCommands state', () => {
    expect(store.state.ajaxCommands).toEqual([]);
  });

  it('adds command to ajaxCommands', () => {
    const cmd = 'foo';
    store.commit('addAjaxCommand', cmd);
    expect(store.state.ajaxCommands).toContain(cmd);
    expect(store.getters.loadingAjax).toBeTruthy();
  });

  it('remove command from ajaxCommands', () => {
    const cmd = 'foo';
    store.commit('addAjaxCommand', cmd);
    store.commit('removeAjaxCommand', cmd);
    expect(store.state.ajaxCommands).not.toContain(cmd);
    expect(store.getters.loadingAjax).not.toBeTruthy();
  });
});
