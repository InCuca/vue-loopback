import app from '../../server/server.js';

describe('Application', () => {
  it('should start the server', (done) => {
    app.addListener('started', done);
    app.start();
  });
});
