import app from '../../server/server';

describe('Account', () => {
  const Account = app.models.Account;
  const email = '936ue5+4bnywbeje42pw@sharklasers.com';
  let testAccount;

  beforeEach(() => {
    const appStarted = new Promise(res => app.addListener('started', res));
    app.start();
    return appStarted.then(() => Account
      .create({email, password: 'IuhEW7HI#&HUH3'})
      .then((acc) => {
        testAccount = acc;
      }));
  });

  afterEach(() => {
    Account.destroyById(testAccount.id);
    app.close();
  });

  it('has been correctly declared', () => {
    expect(Account).toInherits(app.models.User);
  });

  it('should send reset email to test user', () => request(app)
    .post('/api/Accounts/reset')
    .send({email})
    .then(res => expect(res).to.status(204))).slow(5000).timeout(30000);
});
