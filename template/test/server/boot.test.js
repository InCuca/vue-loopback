import loopback from 'loopback';
{{#extended}}
import boot from 'loopback-boot';
import path from 'path';

import root from '../../server/boot/root.js';
import auth from '../../server/boot/authentication.js';
import createAdmin from '../../server/boot/create-admin.js';

import initialAccount from '../../server/initial-data/manutencao-account';
import initialProf from '../../server/initial-data/example1-professor';
import initialAula from '../../server/initial-data/example1-aula';
import initialAluno from '../../server/initial-data/example1-aluno';
{{/extended}}
describe('boot process', () => {
  {{#extended}}
  const options = {
    appRootDir: path.resolve(__dirname, '../../server'),
  };
  let server;

  beforeEach(done => {
    server = loopback();
    boot(server, options, done);
  });

  afterEach(done => {
    // Clear memory database
    server.dataSources.db.automigrate(done);
  });
  {{/extended}}
  describe('root.js', () => {
    it('should return server status by root.js', (done) => {
      let conn = server.listen(8000, () => {
        request(server).get('/').then((res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('started');
          expect(res.body).to.have.property('uptime');
          conn.close(done);
        });
      });
    });
  });
  {{extended}}
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
        from: 'noreply@mydomain.com',
        to: '92y0zm+7xhtk2ni75mas@grr.la',
        subject: 'Testing email',
        text: 'Testing email text',
        html: '<b>Testing email text</b>',
      }, done);
    }).slow(5000).timeout(30000);
  });
  {{/extended}}
});
