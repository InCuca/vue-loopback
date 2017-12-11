import loopback from '@/services/loopback';

export function setAccessToken(state, token) {
  // eslint-disable-next-line camelcase
  state.access_token = token;
  if (state.access_token !== null) {
    loopback.setToken(state.access_token.id);
  } else {
    loopback.removeToken();
  }
}

export function setAccount(state, account) {
  state.account = account;
}
