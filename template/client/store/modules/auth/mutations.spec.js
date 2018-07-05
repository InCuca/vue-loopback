import * as mutations from './mutations';

describe('auth mutations', () => {
  it('set access_token', () => {
    const state = {};
    mutations.setAccessToken(state, 'foo');
    expect(state.access_token).toEqual('foo');
  });

  it('set account', () => {
    const state = {};
    mutations.setAccount(state, 'foo');
    expect(state.account).toEqual('foo');
  });
});
