import loopback from 'loopback';
import root from '../../server/boot/root.js';
import auth from '../../server/boot/authentication.js';

describe('boot process', () => {
  let server = loopback();

  it('should return server status by root.js', (done) => {
    root(server);

    let conn = server.listen(8000, () => {
      request(server).get('/').then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('started');
        expect(res.body).to.have.property('uptime');
        conn.close(done);
      });
    });
  });

  it.skip('should enable authentication by authentication.js', () => {
    auth(server);
  });
});
