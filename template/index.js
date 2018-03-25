import express from 'express';
import fallback from 'express-history-api-fallback';
import path from 'path';
import app from './server/server';

const client = path.resolve(__dirname, 'client');

const unless = function(paths, middleware) {
  return function(req, res, next) {
    if (paths.some(p => req.path.indexOf(p) > -1)) {
      return next();
    }

    return middleware(req, res, next);
  };
};

// add static route for client
app.use(express.static(client));

// enable redirect urls to index
app.use(unless(
  ['/api', '/explorer'],
  fallback('index.html', {root: client}),
));

// start app
app.on('started', () => {
  const baseUrl = app.get('url').replace(/\/$/, '');
  console.log('Browse your CLIENT files at %s', baseUrl);
});

if (require.main === module) { app.start(); }

export default app;
