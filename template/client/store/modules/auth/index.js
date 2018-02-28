import * as actions from './actions';
import * as mutations from './mutations';

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
