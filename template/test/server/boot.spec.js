import loopback from 'loopback';
import boot from 'loopback-boot';
import path from 'path';
{{#extended}}
import root from '../../server/boot/root.js';
import auth from '../../server/boot/authentication.js';
import createAdmin from '../../server/boot/create-admin.js';
import initialAccount from '../../server/initial-data/maintenance-account';
{{/extended}}

describe('boot process', () => {
  let server;
  const options = {
    appRootDir: path.resolve(__dirname, '../../server'),
  };
  beforeEach(done => {
    server = loopback();
    boot(server, options, done);
  });

  afterEach(done => {
    // Clear memory database
    server.dataSources.db.automigrate(done);
  });

  describe('root.js', () => {
    it('should return server status by root.js', (done) => {
      let conn = server.listen(8000, () => {
        request(server).get('/api').then((res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('started');
          expect(res.body).to.have.property('uptime');
          conn.close(done);
        });
      });
    });
  });
  {{#extended}}
  describe('authentication.js', () => {
    it('should enable authentication by authentication.js', () => {
      expect(server.isAuthEnabled).to.equal(true);
    });
  });

  describe('email configuration', () => {
    it('should have Email model', () => {
      expect(server.models).has.property('Email');
    });

    it('Email model should send email', (done) => {
      server.models.Email.send({
        from: 'noreply@fakeserver.mailtrap.io',
        to: '92y0zm+7xhtk2ni75mas@grr.la',
        subject: 'Testing email',
        text: 'Testing email text',
        html: '<b>Testing email text</b>',
      }, done);
    }).slow(5000).timeout(30000);
  });

  describe('create-admin.js', () => {
    it('should have Account model', () => {
      expect(server.models).has.property('Account');
    });

    it('should create a default admin user', () => {
      return server.models.Account.find().then(res => {
        expect(res).to.have.lengthOf(1);
        expect(res[0]).to.have.property('createdAt');
        expect(res[0]).to.have.property('updatedAt');
        expect(res[0].id).to.equal(1);
        expect(res[0].email).to.equal(initialAccount.email);
        expect(res[0].password).to.be.an('string');
      });
    });

    it('should create a default admin role', () => {
      return server.models.Role.find().then(res => {
        expect(res).to.have.lengthOf(1);
        expect(res[0]).to.have.property('created');
        expect(res[0]).to.have.property('modified');
        expect(res[0].id).to.equal(1);
        expect(res[0].name).to.equal('admin');
      });
    });

    it('should create RoleMapping entry for admin', () => {
      const RoleMapping = server.models.RoleMapping;
      return RoleMapping.find().then(res => {
        expect(res).to.have.lengthOf(1);
        expect(res[0].id).to.equal(1);
        expect(res[0].roleId).to.equal(1);
        expect(res[0].principalId).to.equal(1);
        expect(res[0].principalType).to.equal(RoleMapping.USER);
      });
    });
  });
  {{/extended}}
});
