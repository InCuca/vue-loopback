import initialAccount from '../initial-data/maintenance-account';

export const email = initialAccount.email;
export const password = initialAccount.password;

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
        return Account.create({email, password});
      }
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
    })
    .then((payload) => { // get account and role from payload
      if (payload && payload.account && payload.role) {
        return payload.role.principals.create({
          principalType: RoleMapping.USER,
          principalId: payload.account.id,
        }).then((principal) => {
          payload.principal = principal;
          return payload;
        });
      }
    });
}
