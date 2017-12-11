import * as actions from './actions.js';
import * as mutations from './mutations.js';

export default {
  namespaced: true,
  state: {
    // eslint-disable-next-line camelcase
    access_token: null,
    account: null,
  },
  actions,
  mutations,
};
