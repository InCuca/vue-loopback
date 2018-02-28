import app from '../../server/server.js';

describe('Application', () => {
  it('should start the server', (done) => {
    app.once('started', () => {
      app.close()
      done()
    });
    app.start();
  });
});
