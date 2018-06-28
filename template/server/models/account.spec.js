import request from 'supertest';
import createLoopback from '~/test/utils/create-loopback';

describe('Account', () => {
  const email = '936ue5+4bnywbeje42pw@sharklasers.com';
  let server, testAccount, Account;

  beforeEach(async() => {
    server = await createLoopback();
    Account = server.models.Account;
    testAccount = await Account.create({
      email,
      password: 'IuhEW7HI#&HUH3',
    });
  });

  afterEach(() => Account.destroyById(testAccount.id));

  it('has been correctly declared', () => {
    expect(Account).toInherits(server.models.User);
  });

  it(
    'should send reset email to test user',
    () => request(server)
      .post('/api/Accounts/reset')
      .send({email})
      .expect(204),
    30000,
  );
});
