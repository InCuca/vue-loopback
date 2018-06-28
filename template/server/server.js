import loopback from 'loopback';
import boot from 'loopback-boot';

const app = loopback();

const options = {
  appRootDir: __dirname,
  // File Extensions for jest (strongloop/loopback#3204)
  scriptExtensions: ['.js', '.json', '.node', '.ejs'],
};

let httpServer;

app.start = function() {
  // start the web server
  httpServer = app.listen(() => {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('API server listening at: %s', `${baseUrl}/api`);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
  return httpServer;
};

app.close = function() {
  httpServer.close();
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, options, (err) => {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) { app.start(); }
});

// export app
export default app;
