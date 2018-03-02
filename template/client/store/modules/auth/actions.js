import loopback from '@/services/loopback';
import router from '@/router';

/**
 * Sync loopback token with current state
*/
export function syncToken({commit, dispatch}) {
  if (loopback.token) {
    commit('setAccessToken', loopback.token);
    return dispatch('loadAccount', loopback.token.userId);
  }
}

/**
 * Sync router for auth
 */
export function syncRouter({state, dispatch}, myRouter) {
  const synced = dispatch('syncToken');

  myRouter.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page (except when it's profile route and
      // there is an access_token).
      if (to.name === 'profile' && to.query.access_token) {
        next();
      } else if (!state.access_token) {
        next({
          name: 'login',
        });
      } else {
        synced.then(next);
      }
    } else {
      next(); // make sure to always call next()!
    }
  });
}

/**
 * Sign-in account with email and password (stores in state.account)
 * @param  {Function} commit   commit mutations function
 * @param  {String}   email    user email
 * @param  {String}   password user password
 * @return {Promise}           promise of logged user
 */
export function signIn({commit, dispatch, state}, {email, password}) {
  return loopback
    .post('/Accounts/login', {
      email,
      password,
    })
    .then((token) => {
      commit('setAccessToken', token);

      // Update Loopback Token
      if (state.access_token !== null) {
        loopback.setToken(state.access_token);
      } else {
        loopback.removeToken();
      }

      router.push({name: 'dashboard'});
      return dispatch('loadAccount', state.access_token.userId);
    });
}

/**
 * Sign-out current logged-in account
 *  (assumes that current state.account is not null)
 * @param  {Function} commit commit mutations function
 * @return {Promise}         promise of the logout
 */
export function signOut({commit}) {
  return loopback
    .post('/Accounts/logout')
    .then(() => {
      commit('setAccessToken', null);
      loopback.removeToken();
      router.push({name: 'login'});
    });
}

/**
 * Load an account by userId in state.account
 * @param  {Function} commit    commit mutations function
 * @param  {Number}   userId account id
 * @return {Promise}            promise of the account
 */
export function loadAccount({commit}, userId) {
  return loopback
    .get(`/Accounts/${userId}`)
    .then(acc => commit('setAccount', acc))
    .catch(() => {
      loopback.removeToken();
      router.push({name: 'login'});
    });
}

/**
 * Reset the password of the current logged-in account
 *  (assumes that current state.account is not null)
 *  (assumes that current state.access_token is not null)
 * @param  {Function} commit       commit mutations function
 * @param  {Object}   state        Vuex state
 * @param  {String}   oldPassword  old password
 * @param  {String}   newPassword  new password
 * @return {Promise}              promise of the password reset
 */
export function resetPassword(ctx, {oldPassword, newPassword}) {
  return loopback
    .post(
      '/Accounts/change-password',
      {oldPassword, newPassword}
    );
}

/**
 * Send a email to the account user to reset the password
 * @param  {Function} commit       commit mutations function
 * @param  {String}   email        user email
 * @return {Promise}               promise of the sent email
 */
export function rememberPassword(ctx, email) {
  return loopback
    .post('/Accounts/reset', {email});
}
