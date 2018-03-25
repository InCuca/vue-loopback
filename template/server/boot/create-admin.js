import initialAccount from '../initial-data/maintenance-account.json';

/**
 * Create the first admin user if there are not users in the system
 */
export default function createAdmin(server) {
  const Account = server.models.Account;
  const Role = server.models.Role;
  const RoleMapping = server.models.RoleMapping;

  return Account
    .find()
    .then((accounts) => {
      if (accounts.length < 1) {
        return Account.create(initialAccount);
      }
      return null;
    })
    .then((account) => {
      if (account) {
        return Role
          .find({name: 'admin'})
          .then((roles) => {
            if (roles.length < 1) {
              return Role.create({
                name: 'admin',
              });
            }

            return roles[0];
          })
          .then(role =>
            // resolve with a payload
            ({account, role})
          );
      }
      return null;
    })
    .then((payload) => { // get account and role from payload
      if (payload && payload.account && payload.role) {
        const myPayload = {...payload};
        return myPayload.role.principals.create({
          principalType: RoleMapping.USER,
          principalId: myPayload.account.id,
        }).then((principal) => {
          myPayload.principal = principal;
          return myPayload;
        });
      }
      return null;
    });
}
