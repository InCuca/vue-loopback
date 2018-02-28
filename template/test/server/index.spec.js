import server from '../../index.js';

describe('Project Index', () => {
  beforeEach((done) => {
    server.once('started', done);
    server.start();
  });

  afterEach(() => server.close());

  it('should serve client files', (done) => {
    request(server).get('/index.html').end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done();
    });
  });
});
