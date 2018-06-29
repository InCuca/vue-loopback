import request from 'supertest';
import createLoopback from '~/test/utils/create-loopback';
import AccountFactory from './account';
import { host } from '../config.json';

describe('Account unit', () => {
  const AccountMock = {
    on: jest.fn(),
    app: {models: {Email: {send: jest.fn()}}},
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('add resetPasswordRequest remote method', () => {
    AccountFactory(AccountMock);
    expect(AccountMock.on).toBeCalledWith(
      'resetPasswordRequest',
      expect.any(Function),
    );
  });

  it('calls send method from Email model', () => {
    const infoMock = {
      email: 'foo@bar.net',
      accessToken: {
        id: 'foobar',
      },
    };
    AccountMock.on.mockImplementation((_, fn) => {
      fn(infoMock);
    });
    AccountFactory(AccountMock);
    expect(AccountMock.app.models.Email.send).toBeCalledWith(
      expect.objectContaining({
        to: infoMock.email,
        from: 'alpp <noreply@mydomain.com>',
        subject: '[alpp] Create a new password',
        html: expect.stringMatching(
          new RegExp(`${host}.*${infoMock.accessToken.id}`)
        ),
      }),
      expect.any(Function),
    );
  });
});

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
