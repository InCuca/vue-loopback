import createLoopback from '~/test/utils/create-loopback';
import {email} from '~/server/initial-data/maintenance-account';
import createAdmin from '~/server/boot/create-admin';

async function prepareLoopback(undoBoot = false) {
  const server = await createLoopback();
  const Account = server.models.Account;
  const Role = server.models.Role;
  const RoleMapping = server.models.RoleMapping;
  if (undoBoot) {
    let info = await Account.deleteAll({email});
    if (info.count < 1) throw Error('account not deleted');
    info = await Role.deleteAll({name: 'admin'});
    if (info.count < 1) throw Error('role not deleted');
  }

  return {server, Account, Role, RoleMapping};
}

describe('boot create-admin', () => {
  it('adds admin, role and roleMapping', async() => {
    const {server, RoleMapping} = await prepareLoopback(true);
    const result = await createAdmin(server);

    expect(result).not.toBe(null);
    expect(result.account).toMatchObject({email});
    expect(result.role).toMatchObject({name: 'admin'});
    expect(result.principal).toMatchObject({
      principalType: RoleMapping.USER,
    });
  });

  it('do not add account if already exists', async() => {
    const {server} = await prepareLoopback();
    const result = await createAdmin(server);
    expect(result).toBe(null);
  });

  it('do not add role if already exists', async() => {
    const {server, Role} = await prepareLoopback(true);
    const created = await Role.create({name: 'admin'});
    const result = await createAdmin(server);

    expect(result).not.toBe(null);
    expect(result.role).toMatchObject(created);
  });
});
