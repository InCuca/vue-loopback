import server from '../../index';

describe('Project Index', () => {
  beforeEach((done) => {
    server.once('started', done);
    server.start();
  });

  afterEach(() => server.close());

  it('should serve client files', (done) => {
    request(server).get('/index.html').end((err, res) => {
      expect(err).toEqual(null);
      expect(res).to.status(200);
      done();
    });
  });
});
