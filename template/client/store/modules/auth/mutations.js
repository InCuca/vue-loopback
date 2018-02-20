export function setAccessToken(state, token) {
  // eslint-disable-next-line camelcase
  state.access_token = token;
}

export function setAccount(state, account) {
  state.account = account;
}
