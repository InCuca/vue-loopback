import getUID from 'uid';
import lb from '@/services/loopback';

export default {
  namespaced: true,
  state: {
    ajaxCommands: [],
  },
  getters: {
    loadingAjax(state) {
      if (state.ajaxCommands.length > 0) return true;
      return false;
    },
  },
  actions: {
    syncLoopback({commit}) {
      lb.setLoadingFunction(
        (isLoading, uid = getUID()) => {
          if (isLoading) {
            commit('addAjaxCommand', uid);
          } else {
            commit('removeAjaxCommand', uid);
          }
          return uid;
        }
      );
    },
  },
  mutations: {
    addAjaxCommand(state, uid) {
      state.ajaxCommands.push(uid);
    },
    removeAjaxCommand(state, uid) {
      state.ajaxCommands.splice(
        state.ajaxCommands.indexOf(uid),
        1
      );
    },
  },
};
